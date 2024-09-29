import React from "react";
import styled from "styled-components";



export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8 font18 "
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#912338" : "#A90E34")};
  background-color: ${(props) => (props.border ? "transparent" : "#912338")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#fff" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#912338")};
    border: 1px solid "#912338";
    color: ${(props) => (props.border ? "#F2B300" : "#F2B300")};
  }
`;

