import { FaSpotify } from "react-icons/fa";
import { requestAuthorization } from "../services/authenticator";

const LandingPage = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-10 text-light-main lg:gap-20 xl:gap-28">
      <div className="flex flex-col items-center gap-4 p-10 lg:gap-7 lg:p-20 xl:gap-10">
        <h1 className="text-5xl lg:text-7xl xl:text-9xl">
          Ja<em className="not-italic text-spotify-green">mmm</em>ing
        </h1>
        <p className="text-center text-base lg:text-2xl xl:text-4xl">
          Build an in-app playlist and export it directly to your Spotify
          account!
        </p>
      </div>
      <button
        className="flex items-center gap-2 rounded-full border border-spotify-green px-4 py-2 text-spotify-green transition ease-in hover:bg-spotify-green hover:text-dark-main lg:gap-3 lg:px-6 lg:py-3 xl:gap-4 xl:px-8 xl:py-4"
        onClick={requestAuthorization}
      >
        <FaSpotify className="scale-75 lg:scale-90 xl:scale-100" size={30} />
        <span className="text-base lg:text-xl xl:text-3xl">
          Log in to Spotify
        </span>
      </button>
    </header>
  );
};

export default LandingPage;
