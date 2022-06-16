import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Generations } from "./Generations";
import { generations, GenType } from "../data";

export const Pokedex = () => {
  const [generation, setGeneration] = useState("gen1");
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = (gen: string) => {
    axios
      .get(generations[gen as GenType])
      .then((res) => setPokemon(res.data.results))
      .catch((e) => console.log(e.message));
  };

  const updateGen = (gen: string) => {
    setGeneration(gen);
  };

  useEffect(() => {
    getPokemon(generation);
  }, [generation]);

  return (
    <Container>
      <Generations updateGen={updateGen} />
      <Row>
        <Column></Column>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 3rem 0 3rem 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px 0 -15px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: 0;
`;
