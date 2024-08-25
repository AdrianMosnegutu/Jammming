import { useContext } from "react";
import ProfileContext from "../../contexts/ProfileContext";

const ProfileDisplay = () => {
  const { profile } = useContext(ProfileContext);

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    window.location = "/";
  };

  return (
    <div className="flex flex-shrink-0 flex-col-reverse items-center gap-1 md:flex-row md:gap-5">
      <div className="flex flex-col items-end justify-around">
        {profile && (
          <span className="hidden text-xl md:block lg:text-2xl">
            {profile.username}
          </span>
        )}
        <button
          className="bg-transparent text-sm text-spotify-green hover:underline lg:text-base"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </div>
      {profile && profile.icon && (
        <img
          className="aspect-square w-10 rounded-full lg:w-14"
          src={profile.icon}
          alt="profile icon"
        />
      )}
    </div>
  );
};

export default ProfileDisplay;
