import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

import styles from "./PageTurningAnimation.module.scss";
import BackgroundNote from "@components/layout/backgroundNote";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { transitionPageAnimationState } from "@common/recoil/recoil.atom";
import React from "react";

type PageTurningAnimation<RC> = {
  children: RC;
  transitionState: string;
};

const PageTurningAnimation = ({
  children,
  transitionState,
}: PageTurningAnimation<React.ReactNode>) => {
  const [isTurn, setIsTurn] = useState<boolean>(false);

  const color = useColorModeValue("white", "#1b0c5f");

  useEffect(() => {
    setIsTurn(transitionState === "exiting");
  }, [transitionState]);

  const [_, setIsAnimationEnd] = useRecoilState(transitionPageAnimationState);

  const ref = useRef(null);

  useEffect(() => {
    const handler = (event: React.AnimationEvent<HTMLDivElement>) => {
      if ((event.target as HTMLDivElement).id === "flipInOut") {
        setIsAnimationEnd(true);
      }
    };
    ref.current && ref.current.addEventListener("animationend", handler);
    return () => {
      setIsAnimationEnd(false);
      ref.current && ref.current.removeEventListener("animationend", handler);
    };
  }, [setIsAnimationEnd]);

  return (
    <div
      css={css`
        position: absolute;
        z-index: 10;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
      `}
    >
      <div
        className={styles.root}
        css={css`
          width: 100%;
          height: 100%;
          background-color: #0c5900;
          background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
        `}
      >
        <div ref={ref} className="book">
          <Flex
            id={"flipInOut"}
            className={`${isTurn ? styles.flipOut : styles.flipIn}`}
            css={css`
              width: 100%;
              height: 100%;
            `}
          >
            <Flex
              id={"scaleOut"}
              className={`${isTurn ? styles.scaleOut : ""}`}
              bg={color}
              css={css`
                width: 100%;
                height: 100%;
              `}
            >
              <BackgroundNote></BackgroundNote>
              <Flex className={`book__page`}>{children}</Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default PageTurningAnimation;
