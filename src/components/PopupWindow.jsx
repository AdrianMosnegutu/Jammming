import PropTypes from "prop-types";
import { AiOutlineLoading } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { SiTicktick } from "react-icons/si";

const popupIcon = (type) => {
  switch (type) {
    case "success":
      return <SiTicktick className="text-spotify-green" size={200} />;
    case "error":
      return <ImCross className="text-red-600" size={200} />;
    case "loading":
      return (
        <AiOutlineLoading className="animate-spin text-light-main" size={200} />
      );
    default:
      return null;
  }
};

const PopupWindow = ({ type, message }) => (
  <div className="absolute left-0 top-0 z-[60] flex h-[100vh] w-[100vw] items-center justify-center bg-dark-main bg-opacity-50 backdrop-blur-sm">
    <div className="flex aspect-square w-[30rem] flex-col items-center justify-around rounded-xl bg-dark-secondary py-10 text-light-main shadow-lg">
      {popupIcon(type)}
      <h3
        className={`text-3xl ${type === "loading" && "before:animate-text-loading before:content-['Loading']"}`}
      >
        {type !== "loading" && message}
      </h3>
    </div>
  </div>
);

PopupWindow.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default PopupWindow;
