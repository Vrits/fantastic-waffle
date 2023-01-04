import { Button, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import PenyakitContext from "../../context/PenyakitContext";

const GetPenyakit = () => {
  const [selectedPenyakit, setSelectedPenyakit] = useState([]);
  const { penyakit, selectedGejala } = useContext(PenyakitContext);

  const findPenyakit = () => {
    const arrPenyakit = [];

    if (
      selectedGejala.find((e) => e.code == "GD40") &&
      selectedGejala.find((e) => e.code == "GD39") &&
      selectedGejala.find((e) => e.code == "GD38") &&
      selectedGejala.find((e) => e.code == "GD37")
    ) {
      if (selectedPenyakit.find((e) => e.code === "PD08")) {
        return;
      }

      arrPenyakit.push(penyakit.find((e) => e.code == "PD08"));
    }
    
    if (
      selectedGejala.find((e) => e.code == "GD01") &&
      selectedGejala.find((e) => e.code == "GD23") &&
      selectedGejala.find((e) => e.code == "GD24") &&
      selectedGejala.find((e) => e.code == "GD05") &&
      selectedGejala.find((e) => e.code == "GD25") &&
      selectedGejala.find((e) => e.code == "GD27") &&
      selectedGejala.find((e) => e.code == "GD28") &&
      selectedGejala.find((e) => e.code == "GD35") &&
      selectedGejala.find((e) => e.code == "GD36")
    ) {
      if (selectedPenyakit.find((e) => e.code === "PD07")) {
        return;
      }

      arrPenyakit.push(penyakit.find((e) => e.code == "PD07"));
    }
    
    if (
      selectedGejala.find((e) => e.code == "GD29") &&
      selectedGejala.find((e) => e.code == "GD30") &&
      selectedGejala.find((e) => e.code == "GD31") &&
      selectedGejala.find((e) => e.code == "GD32") &&
      selectedGejala.find((e) => e.code == "GD33") &&
      selectedGejala.find((e) => e.code == "GD34")
      ) {
      if (selectedPenyakit.find((e) => e.code === "PD06")) {
        return;
      }

      arrPenyakit.push(penyakit.find((e) => e.code == "PD06"));
    }
    
    if (
      selectedGejala.find((e) => e.code == "GD01") &&
      selectedGejala.find((e) => e.code == "GD22") &&
      selectedGejala.find((e) => e.code == "GD23") &&
      selectedGejala.find((e) => e.code == "GD24") &&
      selectedGejala.find((e) => e.code == "GD05") &&
      selectedGejala.find((e) => e.code == "GD25") &&
      selectedGejala.find((e) => e.code == "GD26") &&
      selectedGejala.find((e) => e.code == "GD27") &&
      selectedGejala.find((e) => e.code == "GD28")
      ) {
      if (selectedPenyakit.find((e) => e.code === "PD05")) {
        return;
      }

      arrPenyakit.push(penyakit.find((e) => e.code == "PD05"));
    }
    
    if (
      selectedGejala.find((e) => e.code == "GD17") &&
      selectedGejala.find((e) => e.code == "GD18") &&
      selectedGejala.find((e) => e.code == "GD19") &&
      selectedGejala.find((e) => e.code == "GD20") &&
      selectedGejala.find((e) => e.code == "GD21") 
      ) {
      if (selectedPenyakit.find((e) => e.code === "PD04")) {
        return;
      }

      arrPenyakit.push(penyakit.find((e) => e.code == "PD04"));
    }
    
    if (
      selectedGejala.find((e) => e.code == "GD01") &&
      selectedGejala.find((e) => e.code == "GD11") &&
      selectedGejala.find((e) => e.code == "GD12") &&
      selectedGejala.find((e) => e.code == "GD13") &&
      selectedGejala.find((e) => e.code == "GD14") &&
      selectedGejala.find((e) => e.code == "GD15") &&
      selectedGejala.find((e) => e.code == "GD16") 
      ) {
      if (selectedPenyakit.find((e) => e.code === "PD03")) {
        return;
      }

      arrPenyakit.push(penyakit.find((e) => e.code == "PD03"));
    }

    if (
      selectedGejala.find((e) => e.code == "GD07") &&
      selectedGejala.find((e) => e.code == "GD08") &&
      selectedGejala.find((e) => e.code == "GD09") &&
      selectedGejala.find((e) => e.code == "GD10") 
      ) {
      if (selectedPenyakit.find((e) => e.code === "PD02")) {
        return;
      }

      arrPenyakit.push(penyakit.find((e) => e.code == "PD02"));
    }
    if (
      selectedGejala.find((e) => e.code == "GD01") &&
      selectedGejala.find((e) => e.code == "GD02") &&
      selectedGejala.find((e) => e.code == "GD03") &&
      selectedGejala.find((e) => e.code == "GD04") &&
      selectedGejala.find((e) => e.code == "GD05") &&
      selectedGejala.find((e) => e.code == "GD06")  
      ) {
      if (selectedPenyakit.find((e) => e.code === "PD01")) {
        return;
      }

      arrPenyakit.push(penyakit.find((e) => e.code == "PD01"));
    }

    setSelectedPenyakit([...selectedPenyakit, ...arrPenyakit]);

    return;
  };

  return (
    <>
      <Button
        colorScheme={"green"}
        alignSelf={"end"}
        disabled={selectedGejala.length < 1 ? true : false}
        mt={"2"}
        onClick={findPenyakit}
      >
        Cek Penyakit
      </Button>

      <Text>
        Penyakit yang diderita ={" "}
        {selectedPenyakit.length < 1
          ? "Sehat Wal'Afiat"
          : selectedPenyakit.map((e, i, arr) => (
              <span key={e.code}>
                {i + 1 == arr.length ? `${e.name}.` : `${e.name}, `}
              </span>
            ))}
      </Text>
    </>
  );
};

export default GetPenyakit;
