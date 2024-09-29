import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        <h3 className="font18 extraBold darkColor">{title}</h3>
        <Text className="font14 textH darkColor">{text}</Text>
        <Author className="font16 extraBold darkColor">{author}</Author>
        <Flex className="flex">
          <Tag className="tag darkBg radius6 font16 whiteColor">{tag}</Tag>
        </Flex>
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

 
`;

const Text = styled.p`
  padding: 30px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 15px 0;
  }
`;

const Author = styled.p`
  margin-top: 20px;
`;

const Flex = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Tag = styled.p`

  padding: 5px 10px;

  @media (max-width: 768px) {
    padding: 3px 8px;
  }

  @media (max-width: 480px) {
    padding: 2px 6px;
  }
`;
