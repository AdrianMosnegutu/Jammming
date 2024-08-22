import { requestAuthorization } from "../services/authenticator";

const LandingPage = () => {
  return (
    <header>
      <button onClick={requestAuthorization}>Log in</button>
    </header>
  );
};

export default LandingPage;
