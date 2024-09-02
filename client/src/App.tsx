import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useStore } from "./store";
import { clientAPI } from "./apiEndpoints/api-client";
import { GET_USERINFO } from "./constants";

const App = () => {
  const { userInfo, setUserInfo } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await clientAPI.get(GET_USERINFO, {
          withCredentials: true,
        });

        console.log(response);
        if (response.status === 200 && response.data.id) {
          setUserInfo(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }

      if (!userInfo) {
        getUserData();
      } else {
        setIsLoading(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppRoutes />;
};

export default App;
