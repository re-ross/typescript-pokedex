import styled from "styled-components";
import { Pokedex } from "./components";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Pokedex />
      </Wrapper>
    </Container>
  );
};

export default App;

const Container = styled.div`
  height: 150vh;
  margin-left: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 15px 0px 15px;
  margin-right: auto;
  margin-left: auto;
`;
