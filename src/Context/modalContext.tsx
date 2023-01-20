import { createContext, useContext, useState } from "react";
import { ModalType } from "./Types";

type ModalContextType = {
  show: boolean;
  title: string;
  message: string;
  showModalHandler: ({ title, message }: ModalType) => void;
  hideModalHandler: () => void;
  showConfirmation: ({ title, message, confirmHandler }: ModalType) => void;
  confirmHandler: (() => void) | undefined;
  confirmationMode: boolean;
};

type ProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext({} as ModalContextType);
export const ModalProvider = ({ children }: ProviderProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [confirmationMode, setConfirmationMode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [confirmHandler, setConfirmHandler] = useState<
    (() => void) | undefined
  >(undefined);

  const showModalHandler = ({ title, message }: ModalType) => {
    setShow(true);
    setConfirmationMode(false);
    setTitle(title);
    setMessage(message);
  };
  const hideModalHandler = () => {
    setShow(false);
    setTitle("");
    setMessage("");
    setConfirmHandler(undefined);
  };

  const showConfirmation = ({ title, message, confirmHandler }: ModalType) => {
    setShow(true);
    setConfirmationMode(true);
    setTitle(title);
    setMessage(message);
    setConfirmHandler(confirmHandler);
  };

  const value = {
    show,
    title,
    message,
    showModalHandler,
    hideModalHandler,
    showConfirmation,
    confirmHandler,
    confirmationMode,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useContextModal = () => {
  return useContext(ModalContext);
};
