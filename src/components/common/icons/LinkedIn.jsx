import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa6";

const Wrapper = styled.div`
  display: inline-block;
  padding: 6px;
  border-radius: 50%;
  background-color: #f0f0f0;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #3b5998;
  }
`;

const StyledLinkedInIcon = styled(FaLinkedinIn)`
  font-size: 28px;
  color: #3b5998;
  transition: color 0.3s ease;

  ${Wrapper}:hover & {
    color: #fff;
  }
`;

const LinkedIn = () => {
  return (
    <>
      <Wrapper>
        <StyledLinkedInIcon />
      </Wrapper>
    </>
  );
};

export default LinkedIn;