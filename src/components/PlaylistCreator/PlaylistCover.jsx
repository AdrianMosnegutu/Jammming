import PropTypes from "prop-types";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { MAX_IMAGE_SIZE_KB } from "../../utils/constants";
import { convertFileToBase64, isFileSizeValid } from "../../utils/helpers";

const PlaylistCover = ({ onCoverChange, onError }) => {
  const [coverURL, setCoverURL] = useState(null);

  const handleCoverChange = ({ target }) => {
    const imageFile = target.files[0];

    if (!isFileSizeValid(imageFile, MAX_IMAGE_SIZE_KB)) {
      onError({
        type: "error",
        message: `Image must be under ${MAX_IMAGE_SIZE_KB}kb!`,
      });
      return;
    }

    setCoverURL(URL.createObjectURL(imageFile));
    convertFileToBase64(imageFile).then((data) => onCoverChange(data));
  };

  return (
    <>
      <label
        className={`group flex-shrink-0 text-dark-main ${coverURL ? "bg-transparent" : "bg-light-main"} flex aspect-square w-52 cursor-pointer items-center justify-center overflow-hidden rounded-md transition-opacity ease-in hover:opacity-75`}
        htmlFor="playlistCover"
      >
        {!coverURL ? (
          <FaCamera size={60} />
        ) : (
          <img
            className="h-full w-full object-cover transition-opacity ease-in group-hover:opacity-75"
            src={coverURL}
            alt="playlist cover"
          />
        )}
      </label>
      <input
        className="hidden"
        type="file"
        name="playlistCover"
        id="playlistCover"
        accept="image/jpeg"
        onChange={handleCoverChange}
      />
    </>
  );
};

PlaylistCover.propTypes = {
  onCoverChange: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default PlaylistCover;
