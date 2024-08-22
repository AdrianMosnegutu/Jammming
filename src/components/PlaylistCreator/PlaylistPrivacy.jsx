import PropTypes from "prop-types";

const PlaylistPrivacy = ({ isPublic, onPrivacyChange }) => {
  return (
    <fieldset className="accent-spotify-green flex items-center gap-6">
      <div className="flex items-center">
        <input
          className="hidden"
          type="radio"
          name="privacy"
          id="public"
          checked={isPublic}
          onChange={() => onPrivacyChange(true)}
        />
        <label
          className="group flex flex-shrink-0 cursor-pointer items-start gap-2"
          htmlFor="public"
        >
          <div className="bg-light-main border-light-main flex aspect-square w-5 rounded-full border bg-opacity-0 p-1 transition ease-in group-hover:bg-opacity-25">
            <div
              className={`${isPublic ? "bg-spotify-green" : "bg-transparent"} aspect-square w-full rounded-full`}
            />
          </div>
          <span>Public</span>
        </label>
      </div>
      <div className="flex items-center">
        <input
          className="hidden"
          type="radio"
          name="privacy"
          id="private"
          checked={!isPublic}
          onChange={() => onPrivacyChange(false)}
        />
        <label
          className="group flex flex-shrink-0 cursor-pointer items-start gap-2"
          htmlFor="private"
        >
          <div className="bg-light-main border-light-main flex aspect-square w-5 rounded-full border bg-opacity-0 p-1 transition ease-in group-hover:bg-opacity-25">
            <div
              className={`${!isPublic ? "bg-spotify-green" : "bg-transparent"} aspect-square w-full rounded-full`}
            />
          </div>
          <span>Private</span>
        </label>
      </div>
    </fieldset>
  );
};

PlaylistPrivacy.propTypes = {
  isPublic: PropTypes.bool.isRequired,
  onPrivacyChange: PropTypes.func.isRequired,
};

export default PlaylistPrivacy;
