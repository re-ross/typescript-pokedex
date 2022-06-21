import styled from "styled-components";

export const Welcome = () => {
  return (
    <>
      <Header>Hi there!</Header>
      <Span>This is a React & Typescript based project using the Pokeapi!</Span>
    </>
  );
};

const Header = styled.header`
  text-align: center;
  color: white;
  font-size: 2.5rem;
  width: 100%;
`;

const Span = styled.span`
  font-size: 1rem;
  display: block;
  text-transform: capitalize;
  color: white;
  text-align: center;
`;
