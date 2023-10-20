import React from "react";
import styled from "styled-components";

const LoadingContainer = () => {
  return <Container>Loading...</Container>;
};

export default LoadingContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  font-size: 24px;
`;
