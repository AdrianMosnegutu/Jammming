import { useContext } from "react";
import ProfileContext from "../../contexts/ProfileContext";

const ProfileDisplay = () => {
  const { profile } = useContext(ProfileContext);

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    window.location = "/";
  };

  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col items-end justify-around">
        {profile && <span className="text-2xl">{profile.username}</span>}
        <button
          className="text-spotify-green bg-transparent hover:underline"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </div>
      {profile && profile.icon && (
        <img
          className="aspect-square w-14 rounded-full"
          src={profile.icon}
          alt="profile icon"
        />
      )}
    </div>
  );
};

export default ProfileDisplay;
