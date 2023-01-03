import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 20px;
  width: 360px;
  height: 450px;
  border-radius: 5px;
  &:hover {
    -webkit-box-shadow: 2px 2px 15px 2px rgba(140, 142, 145, 0.42);
    box-shadow: 2px 2px 15px 2px rgba(140, 142, 145, 0.42);
  }
  background-color: var(--white);
`;

export const CardImg = styled.div<{ imgUrl: string }>`
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  background-position: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: block;
  margin: 0;
  padding: 0;
  height: 250px;
  width: 100%;
  cursor: pointer;
`;

export const CardDescription = styled.div`
  height: 200px;
  width: 100%;
  border: 1px solid var(--light-gray);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 20px;
  color: var(--light-black);

  h1 {
    font-size: 22px;
    font-weight: 600;
    padding: 0;
    cursor: pointer;

    &:hover {
      color: var(--orange);
    }
  }

  span.tag {
    border: none;
    border-radius: 40px;
    text-decoration: none;
    font-size: 18px;
    margin: 20px 5px;
    padding: 8px;
    background-color: var(--light-gray);
  }
`;

export const CardTime = styled.div`
  display: flex;
  align-items: center;
  color: var(--grey);
  justify-content: flex-end;
  margin-bottom: 10px;

  h2 {
    font-size: 16px;
    font-weight: normal;
    margin-left: 5px;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 340px;
  padding-top: 40px;
  color: var(--gray);
`;

export const XYButton = styled.button`
  color: var(--gray);

  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;
`;

export const DeleteButton = styled(XYButton)`
  span {
    &:hover {
      color: red;
    }
  }
`;
export const EditButton = styled(XYButton)`
  span {
    &:hover {
      color: green;
    }
  }
`;
