import ReactDOM from "react-dom";

import { Button } from "../Page/Page.style";
import { useContextModal } from "../../Context/modalContext";
import {
  BackDropContainer,
  Content,
  ModalFooter,
  ModalHeader,
  OverlayContainer,
} from "./Modal.style";

/*
if (confirmHandler) {  confirmHandler() } = confirmHandler && confirmHandler();
                 */

type BackdropProp = {
  onConfirm: () => void;
};

type ModalOverlayProps = {
  title: string;
  message: string;
  confirmationMode?: boolean;
  onHide: () => void;
  onConfirm?: () => void;
};

const Backdrop = ({ onConfirm }: BackdropProp) => {
  return <BackDropContainer onClick={onConfirm} />;
};

const ModalOverlay = ({
  title,
  message,
  confirmationMode,
  onHide,
  onConfirm,
}: ModalOverlayProps) => {
  return (
    <OverlayContainer>
      <ModalHeader>
        <h2>{title}</h2>
      </ModalHeader>
      <Content>
        <p>{message}</p>
      </Content>
      {confirmationMode ? (
        <ModalFooter>
          <Button onClick={onHide}>No</Button>
          <Button onClick={onConfirm}>Yes</Button>
        </ModalFooter>
      ) : (
        <ModalFooter>
          <Button onClick={onHide}>Okay</Button>
        </ModalFooter>
      )}
    </OverlayContainer>
  );
};

const Modal = () => {
  const {
    title,
    message,
    show,
    hideModalHandler,
    confirmationMode,
    confirmHandler,
  } = useContextModal();
  return show ? (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={hideModalHandler} />,
        document.getElementById("backdrop-root") as Element | DocumentFragment
      )}
      {confirmationMode
        ? ReactDOM.createPortal(
            <ModalOverlay
              title={title}
              message={message}
              onHide={hideModalHandler}
              confirmationMode={true}
              onConfirm={() => {
                confirmHandler && confirmHandler();

                hideModalHandler();
              }}
            />,
            document.getElementById("modal-root") as Element | DocumentFragment
          )
        : ReactDOM.createPortal(
            <ModalOverlay
              title={title}
              message={message}
              onHide={hideModalHandler}
            />,
            document.getElementById("modal-root") as Element | DocumentFragment
          )}
    </>
  ) : null;
};

export default Modal;
