import { useEffect } from "react";
import { createPortal } from "react-dom";
import loader from '../../images/loader.gif'
import { LoaderImg, Overlay } from "./Loader.styled";

const root4Loader = document.querySelector('#loader');

const Loader = ({ size = 100}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return createPortal(
    <Overlay>
      <LoaderImg
        src={loader}
        alt="loading..."
        width={size}
      />
    </Overlay>,
    root4Loader
  );
};

export default Loader;