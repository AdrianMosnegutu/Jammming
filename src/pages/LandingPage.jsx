import { FaSpotify } from "react-icons/fa";
import { requestAuthorization } from "../services/authenticator";

const LandingPage = () => {
  return (
    <header className="text-light-main flex flex-col items-center justify-center gap-28">
      <div className="flex flex-col items-center gap-10 p-20">
        <h1 className="text-9xl">
          Ja<em className="text-spotify-green not-italic">mmm</em>ing
        </h1>
        <p className="text-4xl">
          Build an in-app playlist and export it directly to your Spotify
          account!
        </p>
      </div>
      <button
        className="text-spotify-green border-spotify-green hover:bg-spotify-green hover:text-dark-main flex items-center gap-4 rounded-full border px-8 py-4 transition ease-in"
        onClick={requestAuthorization}
      >
        <FaSpotify size={30} />
        <span className="text-3xl">Log in to Spotify</span>
      </button>
    </header>
  );
};

export default LandingPage;
