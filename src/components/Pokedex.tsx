import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { generations, GenType } from "../data";
import { Pokemon } from "../types";
import {
  PokemonCard,
  PokemonButton,
  Generations,
  LeftHeader,
  SearchBar,
  Welcome,
} from "./subcomponents";

export const Pokedex = () => {
  const [generation, setGeneration] = useState("gen1");
  const [pokemon, setPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({
    id: 0,
    name: "",
    abilities: [],
    moves: [],
    img: [],
    stats: [],
    types: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCard, setDisplayCard] = useState(false);

  const getPokemon = (gen: string) => {
    axios
      .get(generations[gen as GenType])
      .then((res) => setPokemon(res.data.results))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getPokemon(generation);
  }, [generation]);

  const renderCard = (pokemon: Pokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((response) => {
        const res = response.data;
        const moves = res.moves.slice(0, 4);

        setCurrentPokemon({
          id: res.id,
          name: res.name,
          abilities: res.abilities,
          moves: moves,
          img: res.sprites,
          stats: res.stats,
          types: res.types,
        });

        setDisplayCard(true);
      })
      .catch((err) => console.log(err));
  };

  const updateGen = (gen: string) => {
    setGeneration(gen);
  };

  const filteredPokemon = (pokemonList: any[], query: string) => {
    if (!query) return pokemonList;
    return pokemonList.filter(
      (p) => p.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  return (
    <Container>
      <Generations updateGen={updateGen} />
      <Row>
        <Column>
          <LeftPanel>
            <Container2>
              <LeftHeader />
              <Container3>
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <LrgScreen>
                  {filteredPokemon(pokemon, searchQuery).length !== 0 ? (
                    filteredPokemon(pokemon, searchQuery).map(
                      (pokemon: Pokemon) => (
                        <PokemonButton
                          key={pokemon.name}
                          renderCard={renderCard}
                          pokemon={pokemon}
                        />
                      )
                    )
                  ) : (
                    <ResultsContainer>No pokemon found!</ResultsContainer>
                  )}
                </LrgScreen>
              </Container3>
            </Container2>
          </LeftPanel>
        </Column>
        <Column>
          <RightPanel>
            {displayCard ? (
              <PokemonCard currentPokemon={currentPokemon} />
            ) : (
              <Welcome />
            )}
            <Box>Party</Box>
          </RightPanel>
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
  padding: 0;
`;

const LeftPanel = styled.div`
  background-color: #f4442e;
  border: 2px solid #1f1a38;
  border-radius: 50px 0px 0px 50px;
  padding: 30px;
  position: relative;
  box-shadow: 5px 10px 15px #1f1a38;
  height: 1000px;
`;
const RightPanel = styled.div`
  background-color: #f4442e;
  border: 2px solid #1f1a38;
  border-radius: 0px 50px 50px 0px;
  padding: 30px;
  position: relative;
  box-shadow: 5px 10px 15px #1f1a38;
  height: 1000px;
`;

const Container2 = styled.div`
  position: relative;
  padding: 20px;
  border: 3px solid #1f1a38;
  border-radius: 30px 0px 0px 15px;
  height: 950px;
`;

const Container3 = styled.div`
  padding: 50px 10px;
  margin-top: 110px;
  background-color: #f4f4f4;
  border: 2px solid #1f1a38;
  border-radius: 30px;
`;

const LrgScreen = styled.div`
  overflow: scroll;
  height: 400px;
  background: repeating-linear-gradient(
    45deg,
    #1fb0ff,
    #1fb0ff 80px,
    #009ff5 80px,
    #009ff5 160px
  );
  border: 2px solid #1f1a38;
`;

const ResultsContainer = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-top: 6rem;
`;

const Box = styled.div`
  text-align: center;
  color: white;
  font-size: 35px;
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0px;
  margin: 0% 25% 0% 25%;
  width: 50%;
`;
