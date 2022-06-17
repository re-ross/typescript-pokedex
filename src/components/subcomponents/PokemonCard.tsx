import { useState, useEffect } from "react";
import styled from "styled-components";
import { CurrentPokemonProps, Pokemon } from "../../types";

export const PokemonCard = ({ currentPokemon }: CurrentPokemonProps) => {
  const { id, name, abilities, img, stats, types } = currentPokemon;
  return (
    <Container>
      <Box1>
        <Box2>
          <Subheader>{name}</Subheader>
          {types.map((pokemon) => (
            <Types key={pokemon.type.name}>{pokemon.type.name}</Types>
          ))}
        </Box2>
        <SmlScreen>
          <Button></Button>
          <Row>
            <Column1>
              <Image src={img.front_default} alt={name} />
            </Column1>
            <Column2>
              <Box3>
                <Title>{}</Title>
                <ListContainer>
                  {stats.map((pokemon: Pokemon | any) => (
                    <ListItem key={pokemon.stat.name}>
                      <Span>
                        {pokemon.stat.name}: {pokemon.base_stat}
                      </Span>
                    </ListItem>
                  ))}
                </ListContainer>
              </Box3>
            </Column2>
          </Row>
          <Span2>ID: {id}</Span2>
        </SmlScreen>
        <Row2>
          <Column3>
            <Title>Abilities:</Title>
            <ListContainer>
              {abilities.map((ability, i) => {
                return <ListItem key={i}>{ability.ability.name}</ListItem>;
              })}
            </ListContainer>
          </Column3>
        </Row2>
        <Row2>
          <Box4>
            <Title style={{ marginLeft: 20 }}>Moves:</Title>
          </Box4>
        </Row2>
      </Box1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0px 15px 0px 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Box1 = styled.div`
  padding: 30px 10px;
  background-color: #f1f5e6;
  border: 2px solid #1f1a38;
  border-radius: 15px;
`;

const Box2 = styled.div`
  height: 100px;
`;

const Box3 = styled.div`
  padding: 15px 20px;
`;

const Box4 = styled.div`
  margin: 0% 10% 0% 10%;
  padding: 20px 0px;
  width: 80%;
  background-color: #eefc57;
  border: 3px solid #ff9f1c;
  border-radius: 30px;
`;

const Subheader = styled.div`
  text-align: center;
  font-size: 2rem;
  width: 100%;
  text-transform: capitalize;
`;

const Span = styled.span`
  font-size: 1rem;
  display: block;
  text-transform: capitalize;
`;

const Span2 = styled.span`
  float: right;
  font-size: 1rem;
  display: block;
  text-transform: white;
`;

const SmlScreen = styled.div`
  border: 2px solid #1f1a38;
  background: repeating-linear-gradient(
    45deg,
    #1fb0ff,
    #1fb0ff 20px,
    #009ff5 20px,
    #009ff5 40px
  );
`;

const Button = styled.button`
  float: left;
  color: white;
  margin: 5px 0px 0px 5px;
  background-color: #ff9f1c;
  border: none;
  padding: 10px;
  border-radius: 15px;
  &:disabled {
    background-color: grey;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column1 = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;
const Column2 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const Column3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 200px;
`;

const Title = styled.span`
  text-align: center;
  font-size: 2rem;
  width: 100%;
  text-transform: capitalize;
`;

const ListContainer = styled.ul``;

const ListItem = styled.li`
  list-style-type: none;

  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
`;

const Types = styled.div`
  text-align: center;
  font-size: 1rem;
  display: block;
  text-transform: capitalize;
`;
