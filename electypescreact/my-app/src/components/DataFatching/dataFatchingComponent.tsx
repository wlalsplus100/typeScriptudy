import React, { useEffect } from "react";
import axios from "axios";
import { WeaponsType } from "../../types/types";

interface DataFetchingComponentProps {
  onDataFetched: (data: WeaponsType[]) => void;
}

const DataFetchingComponent: React.FC<DataFetchingComponentProps> = ({
  onDataFetched,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://genshin.jmp.blue/weapons");
        const weapons: string[] = response.data;

        if (weapons && weapons.length > 0) {
          const promises = weapons.map(async (weapon: string) => {
            const response = await axios.get<WeaponsType>(
              `https://genshin.jmp.blue/weapons/${weapon}`
            );
            return response.data;
          });

          const responseArray = await Promise.all(promises);
          onDataFetched(responseArray);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [onDataFetched]);

  return null;
};

export default DataFetchingComponent;
