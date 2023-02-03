import { css } from "@emotion/react";
import {
  Button,
  Flex,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";

import {
  userProfilesSelector,
  userSelector,
  yjsQuestionsState,
  yjsRelayRaceAnswerState,
} from "@common/recoil/recoil.atom";
import { useRecoilState, useRecoilValue } from "recoil";

import useProfileUpdate from "@hooks/gameHooks/updateState/useProfileUpdate";
import useCheckCreatedProvider from "@hooks/pageMove/useCheckCreatedProvider";
import useSyncPageFromGameState from "@hooks/pageMove/useSyncPageFromGameState";
import useGameStateUpdate from "@hooks/gameHooks/updateState/useGameStateUpdate";

import {
  doc,
  getChangeGameStateHandler,
  providerState,
  yAgreeState,
  yChattingState,
  yGameState,
  yQuestionsState,
  yRelayRaceAnswerState,
} from "@common/yjsStore/userStore";

import DraweeLogo from "@asset/images/DraweeLogo.png";
import Users from "@components/Users";
import Chatting from "./Chatting";

import { useEffect } from "react";
import {
  CPGameDrawee,
  CPGameRelayRace,
  CPGameState,
  CPGameTypes,
} from "@types";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const LobbyMain = () => {
  const { t } = useTranslation("common");
  const lobbyToastInviteTitle = t("lobby.toast.invite.title");
  const lobbyToastInviteDescription = t("lobby.toast.invite.description");
  const router = useRouter();
  const toast = useToast();
  useCheckCreatedProvider(
    "/ErrorPage/?errorMessage=잘못된 접근입니다.&statusCode=403"
  );
  const { roomId } = useRecoilValue(userSelector) ?? {};
  const { isOwner, userProfiles } = useRecoilValue(userProfilesSelector);
  const { provider } = providerState;
  useGameStateUpdate(roomId);
  useSyncPageFromGameState();
  const changeGameStateHandler = getChangeGameStateHandler<CPGameState>(roomId);
  const [_, setRelayraceAnswerState] = useRecoilState(yjsRelayRaceAnswerState);
  useProfileUpdate();

  useEffect(() => {
    // 로비로 진입시 questionsState, yAgreeState 를 초기화함.
    if (isOwner) {
      const gameState = yGameState.get(roomId);
      if (!gameState) return;
      const pageIndex = gameState.gamePagesIndex;
      doc.transact(() => {
        for (let index = 0; index <= pageIndex; index++) {
          doc.getMap<any>(`shapes ${index}`).clear();
          doc.getMap<any>(`bindings ${index}`).clear();
        }
        yChattingState.delete(0, yChattingState.length);
        yQuestionsState.delete(0, yQuestionsState.length);
        yRelayRaceAnswerState.delete(0, yRelayRaceAnswerState.length);
        yAgreeState.clear();
      });
    }
    // 나중에 결과 페이지에서 처리
    setRelayraceAnswerState([]);
  }, [isOwner, roomId]);

  if (provider === null) {
    return <div>프로바이더가 없음</div>;
  }

  const onClickInviteHandler = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_HOSTNAME}/?roomId=${roomId}`
    );
    toast({
      title: lobbyToastInviteTitle,
      description: lobbyToastInviteDescription,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const onClickGameStartHandler = (gameType: CPGameTypes) => {
    if (gameType === "DRAWEE") {
      const partialDrawee: Partial<CPGameDrawee> = {
        isGameStart: true,
        gamePagesIndex: 0,
        gameType: "DRAWEE",
        path: "/start",
      };
      changeGameStateHandler(partialDrawee);
    }

    if (gameType === "RELAY_RACE") {
      const partialRelayRace: Partial<CPGameRelayRace> = {
        isGameStart: true,
        gamePagesIndex: 0,
        gameType: "RELAY_RACE",
        path: "/games/relay-race",
      };
      changeGameStateHandler(partialRelayRace);
    }
  };

  return (
    <>
      <Flex
        w={"100%"}
        h={"100%"}
        minHeight={"500px"}
        p="1em"
        justifyContent={"center"}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "10px", md: "20px" }}
      >
        <Flex w={{ base: "100%", md: "250px", xl: "350px" }}>
          <Users userProfiles={userProfiles} />
        </Flex>
        <Tabs isFitted variant={"enclosed"}>
          <TabList mb="1em">
            <Tab>게임</Tab>
            <Tab>채팅</Tab>
          </TabList>
          <TabPanels>
            <Flex
              w={{ base: "100%", md: "600px", xl: "600px" }}
              h={"100%"}
              borderRadius={"15px"}
              // border="3px solid gray"
              boxShadow="dark-lg"
              rounded="md"
              flexDirection={"column"}
            >
              <TabPanel>
                <Flex
                  css={css`
                    flex-grow: 1;
                    overflow: hidden;
                  `}
                >
                  <Chatting></Chatting>
                </Flex>
              </TabPanel>

              {!isOwner && (
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  m={3}
                  gap={"10px"}
                  fontWeight={500}
                  fontSize={"1.1rem"}
                >
                  <Spinner color="red.500" size="md" />
                </Flex>
              )}
              {isOwner && (
                <Flex
                  css={css`
                    flex-grow: 1;
                    max-height: 45px;
                    width: 100%;
                    justify-content: space-between;
                  `}
                >
                  <Button
                    css={css`
                      width: 50%;
                    `}
                    onClick={onClickInviteHandler}
                  >
                    {t("lobby.invite.button")}
                  </Button>
                  <Button
                    css={css`
                      width: 50%;
                    `}
                    onClick={() => onClickGameStartHandler("DRAWEE")}
                  >
                    {t("lobby.next.button")}1
                  </Button>
                  <Button
                    css={css`
                      width: 50%;
                    `}
                    onClick={() => onClickGameStartHandler("RELAY_RACE")}
                  >
                    {t("lobby.next.button")}2
                  </Button>
                </Flex>
              )}
            </Flex>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default LobbyMain;
