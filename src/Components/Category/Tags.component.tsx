import { TagBubble } from "./Tag.style";

interface props {
  big: string;
  name: string;
  onClick: () => {};
}
const Tag = ({ big, name, onClick }: props) => {
  return (
    <>
      <TagBubble className={big ? "big" : ""} onClick={onClick}>
        {name}
      </TagBubble>
    </>
  );
};

export default Tag;
