import PropTypes from "prop-types";

const PlaylistPrivacy = ({ isPublic, onPrivacyChange }) => {
  return (
    <fieldset>
      <div>
        <input
          type="radio"
          name="privacy"
          id="public"
          checked={isPublic}
          onChange={() => onPrivacyChange(true)}
        />
        <label htmlFor="public">Public</label>
      </div>
      <div>
        <input
          type="radio"
          name="privacy"
          id="private"
          checked={!isPublic}
          onChange={() => onPrivacyChange(false)}
        />
        <label htmlFor="private">Private</label>
      </div>
    </fieldset>
  );
};

PlaylistPrivacy.propTypes = {
  isPublic: PropTypes.bool.isRequired,
  onPrivacyChange: PropTypes.func.isRequired,
};

export default PlaylistPrivacy;
