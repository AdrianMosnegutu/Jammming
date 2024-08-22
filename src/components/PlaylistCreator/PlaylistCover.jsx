import PropTypes from "prop-types";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { MAX_IMAGE_SIZE_KB } from "../../utils/constants";
import { convertFileToBase64, isFileSizeValid } from "../../utils/helpers";

const PlaylistCover = ({ onCoverChange }) => {
  const [coverURL, setCoverURL] = useState(null);

  const handleCoverChange = ({ target }) => {
    const imageFile = target.files[0];

    if (!isFileSizeValid(imageFile, MAX_IMAGE_SIZE_KB)) {
      alert(`Image must be under ${MAX_IMAGE_SIZE_KB}kb!`);
      return;
    }

    setCoverURL(URL.createObjectURL(imageFile));
    convertFileToBase64(imageFile).then((data) => onCoverChange(data));
  };

  return (
    <>
      <label htmlFor="playlistCover">
        {!coverURL ? <FaCamera /> : <img src={coverURL} alt="playlist cover" />}
      </label>
      <input
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
};

export default PlaylistCover;
