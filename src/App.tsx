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
  background-color: #f1f5e6;
  height: 150vh;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 15px 0px 15px;
  margin-right: auto;
  margin-left: auto;
`;
