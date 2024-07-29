import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg  radius8 shadow">
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13 textH" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <p className="font13 extraBold">{author}</p>
        <div className="flex">
          <p className="tag darkBg  radius6 font13 orangeColor ">{tag}</p>
        </div>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
 width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
  background-color: #fff;
  border: 1px solid #e0e0e0;

   &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow on hover */
  }
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
