import styled from "styled-components";
import { PokemonProps } from "../types";

export const PokemonButton = ({ pokemon, renderCard }: PokemonProps) => {
  const handleClick = () => {
    renderCard(pokemon);
  };
  return (
    <Button key={pokemon.name} onClick={handleClick}>
      {pokemon.name}
    </Button>
  );
};

const Button = styled.button`
  padding: 10px 20px;
  background: none;
  border: none;
  color: white;
  font-size: 55px;
  text-align: center;
  display: block;
  margin: 10px 0px;
  margin-right: auto;
  margin-left: auto;
  text-transform: capitalize;
  cursor: pointer;
`;
