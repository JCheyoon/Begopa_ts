import { ScrollUpContainer } from "./ScrollUp.style";
import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScroll(window.scrollY > 190);
    });
  }, []);

  const ScrollUpHandler = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <ScrollUpContainer
      className={isScroll ? "visible" : ""}
      onClick={ScrollUpHandler}
    >
      <span className="material-symbols-outlined">keyboard_arrow_up</span>
    </ScrollUpContainer>
  );
};

export default ScrollUp;
