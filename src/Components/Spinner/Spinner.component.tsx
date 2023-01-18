import { SpinnerStyled } from "./Spinner.style";

const Spinner = () => {
  return (
    <SpinnerStyled>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerStyled>
  );
};

export default Spinner;
