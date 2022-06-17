import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Generations } from "./Generations";
import { generations, GenType } from "../data";
import { LeftHeader } from "./LeftHeader";
import { SearchBar } from "./SearchBar";
import { Pokemon } from "../types";
import { PokemonButton } from "./PokemonButton";

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
          <Panel>
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

const Container2 = styled.div`
  position: relative;
  padding: 20px;
  border: 3px solid #4f045a;
  border-radius: 30px 0px 0px 15px;
  height: 950px;
`;

const Container3 = styled.div`
  padding: 50px 10px;
  margin-top: 110px;
  background-color: #f1f5e6;
  border: 2px solid #4f045a;
  border-radius: 30px;
`;

const LrgScreen = styled.div`
  overflow: scroll;
  height: 400px;
  background: repeating-linear-gradient(
    45deg,
    #14daff,
    #14daff 80px,
    #14eaff 80px,
    #14eaff 160px
  );
  border: 2px solid #4f045a;
`;

const ResultsContainer = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-top: 6rem;
`;
