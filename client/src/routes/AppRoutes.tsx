import Auth from "@/pages/auth";
import Chat from "@/pages/chat";
import Profile from "@/pages/profile";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useStore } from "@/store";
import { RouteProps } from "types";

const PrivateRoute = ({ children }: RouteProps) => {
  const { userInfo } = useStore();
  const isAuthenticated: boolean = !userInfo;

  return isAuthenticated ? children : <Navigate to="/auth" />;
};

const AuthRoute = ({ children }: RouteProps) => {
  const { userInfo } = useStore();
  const isAuthenticated = !userInfo;

  return isAuthenticated ? <Navigate to="/chat" /> : children;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            <AuthRoute>
              <Auth />
            </AuthRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
