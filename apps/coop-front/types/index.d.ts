import { CPGamePage } from "./index.d";
export type CPUserType = {
  roomId?: string;
  nickname?: string;
  avatarIndex?: number;
  color?: string;
  utcTimeStamp?: number;
  isOwner?: boolean;
};

export type CPChatType = {
  id: number;
  nickname: string;
  message: string;
};

export type CPUserProfile = {
  id?: number;
} & Omit<CPUserType, "roomId">;

export type CPUserProfilesState = {
  isOwner?: boolean;
  userProfiles?: CPUserProfile[];
};

export type CPPageType = "/lobby" | "/start" | "/draw" | "/result";

export type CPGamePage = {
  path: CPPageType;
  answer?: string;
  question?: string;
  questioner?: number;
};

export type CPGamePages = CPGamePage[];

type CPGameTypes = "DRAWEE";

type CPGameTypeProperty = {
  gamePages: CPGamePages;
  gamePagesIndex: number;
};

export type CPGames = Record<CPGameTypes, CPGameTypeProperty>;

export type CPGameState = {
  isGameStart: boolean;
  gamePages: CPGamePages;
  gamePagesIndex: number;
  agreeSet: Set<number>;
  // nowPage: CPNowPageType;
};
