import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserInfo {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  color?: number;
  profileSetup: boolean;
}

export interface AuthSlice {
  userInfo: UserInfo | undefined;
  setUserInfo: (userInfo: UserInfo) => void;
  updateUserInfo: (key: keyof UserInfo, value: any) => void;
  clearUserInfo: () => void;
}

export interface RouteProps {
  children: ReactNode;
}
