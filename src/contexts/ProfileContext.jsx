import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ProfileContext = createContext(null);

export const ProfileProvider = ({ mockProfile, children }) => {
  const [profile, setProfile] = useState(mockProfile || null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

ProfileProvider.propTypes = {
  mockProfile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default ProfileContext;
