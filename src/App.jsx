import { useEffect } from "react";
import { ProfileProvider } from "./contexts/ProfileContext";
import Jammming from "./pages/Jammming";
import LandingPage from "./pages/LandingPage";
import { getToken } from "./services/authenticator";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      const code = new URLSearchParams(window.location.search).get("code");
      if (code) getToken(code);
    }
  }, []);

  return (
    <>
      {localStorage.getItem("access_token") ? (
        <ProfileProvider>
          <Jammming />
        </ProfileProvider>
      ) : (
        <LandingPage />
      )}
    </>
  );
};

export default App;
