import { useContext } from "react";
import ProfileContext from "../../contexts/ProfileContext";

const ProfileDisplay = () => {
  const { profile } = useContext(ProfileContext);

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    window.location = "/";
  };

  return (
    <div>
      <div>
        {profile && <span>{profile.username}</span>}
        <button onClick={handleLogOut}>Log out</button>
      </div>
      {profile && profile.icon && <img src={profile.icon} alt="profile icon" />}
    </div>
  );
};

export default ProfileDisplay;
