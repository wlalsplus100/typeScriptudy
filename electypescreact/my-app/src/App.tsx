import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { WeaponsType } from "./constant/types";
import Item from "./components/item";
import DataFetchingComponent from "./components/DataFatching/dataFatchingComponent";
import LoadingContainer from "./components/Loading/loading";

function App() {
  const [datas, setDatas] = useState<WeaponsType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (datas && datas.length > 0) {
      setIsLoading(false);
    }
  }, [datas]);

  const createChild = (datas: WeaponsType[]) => {
    const makeChild = datas.map((data, i) => {
      return <Item data={data} key={i} />;
    });
    return <>{makeChild}</>;
  };

  return (
    <div className="App">
      <DataFetchingComponent onDataFetched={setDatas} />
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <Container>{datas && createChild(datas)}</Container>
      )}
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  background-color: rebeccapurple;
`;
