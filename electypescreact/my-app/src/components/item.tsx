import React, { useState, useEffect } from "react";
import styled, { ShouldForwardProp } from "styled-components";
import { WeaponsType } from "../types/types";

const Item = ({ data }: { data: WeaponsType }) => {
  const colorPeek = () => {
    if (data.rarity === 3) {
      return "#008cff";
    } else if (data.rarity === 4) {
      return "#d400ff";
    } else {
      return "#ffee00";
    }
  };

  return (
    <Container>
      <CustomStyledComponent bgcolor={colorPeek()}>
        <Name>{data.name}</Name>
      </CustomStyledComponent>
    </Container>
  );
};

export default Item;

const Container = styled.div`
  min-width: fit-content;
  min-height: 30px;
  margin: 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CustomStyledComponent = styled.div<{ bgcolor: string }>`
  background-color: ${(props) => props.bgcolor};
  min-width: fit-content;
  min-height: 30px;
  margin: 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  text-align: center;
  font-size: 24px;
`;
