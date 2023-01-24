import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import DraweeLogo from "@asset/images/DraweeLogo.png";
import { css, keyframes } from "@emotion/react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const scroll = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translateY(46px);
  }
`;
function TopContent() {
  const router = useRouter();
  return (
    <Center w="100%" h="max-content">
      <Flex direction="column">
        <Center marginTop={{ base: "50px", sm: "10px", md: "50px" }}>
          <Image src={DraweeLogo} width={300} height={300} alt="로고이미지" />
        </Center>
        <Center marginTop={{ base: "40px", sm: "20px", md: "40px" }}>
          <Text fontSize={{ base: "6xl", sm: "3xl", md: "6xl" }}>
            <FormattedMessage
              id={"welcome.site.title"}
              values={{ locale: router.locale }}
            />
          </Text>
        </Center>
        <Center marginTop={{ base: "40px", sm: "20px", md: "40px" }}>
          <Text
            fontSize={{ base: "4xl", sm: "2xl", md: "4xl" }}
            textAlign="center"
          >
            <FormattedMessage
              id={"welcome.site.tutorial1"}
              values={{ locale: router.locale }}
            />
          </Text>
        </Center>
        <Center marginTop={{ base: "20px", sm: "10px", md: "20px" }}>
          <Text
            fontSize={{ base: "2xl", sm: "lg", md: "2xl" }}
            textAlign="center"
          >
            <FormattedMessage
              id={"welcome.site.tutorial2"}
              values={{ locale: router.locale }}
            />
          </Text>
        </Center>
        <Center marginTop={{ base: "10px", sm: "5px", md: "10px" }}>
          <Text
            fontSize={{ base: "2xl", sm: "lg", md: "2xl" }}
            textAlign="center"
          >
            <FormattedMessage
              id={"welcome.site.tutorial3"}
              values={{ locale: router.locale }}
            />
          </Text>
        </Center>
        <Center
          marginTop={{ base: "70px", sm: "30px", md: "100px", lg: "60px" }}
        >
          <Button
            width="150px"
            bg="colors.third"
            onClick={() => {
              router.push("/");
            }}
          >
            <FormattedMessage
              id={"welcome.site.start.button"}
              values={{ locale: router.locale }}
            />
          </Button>
        </Center>
        <Center>
          <div
            css={css`
              width: 40px;
              height: 65px;
              top: 50%;
              margin-top: 50px;
              box-shadow: inset 0 0 0 1px #000;
              border-radius: 25px;
              display: flex;
              justify-content: center;
            `}
          >
            <div
              css={css`
                width: 8px;
                height: 8px;
                background: #000;
                margin-top: 4px;
                top: 8px;
                border-radius: 4px;
                animation: ${scroll} 1.5s infinite;
              `}
            ></div>
          </div>
        </Center>
      </Flex>
    </Center>
  );
}

export default TopContent;
