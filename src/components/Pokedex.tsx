import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Generations } from "./Generations";
import { generations, GenType } from "../data";
import { LeftHeader } from "./LeftHeader";
import { SearchBar } from "./SearchBar";

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
        <Column>
          <Panel>
            <Wrapper>
              <LeftHeader />
              <Box>
                <SearchBar />
              </Box>
            </Wrapper>
          </Panel>
        </Column>
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

const Panel = styled.div`
  background-color: #ff0050;
  border: 2px solid #4f045a;
  border-radius: 50px 0px 0px 50px;
  padding: 30px;
  position: relative;
  box-shadow: 5px 10px 15px #4f045a;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  border: 3px solid #4f045a;
  border-radius: 30px 0px 0px 15px;
  height: 950px;
`;

const Box = styled.div`
  padding: 50px 10px;
  margin-top: 110px;
  background-color: #f1f5e6;
  border: 2px solid #4f045a;
  border-radius: 30px;
`;
