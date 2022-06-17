import styled from "styled-components";

export const LeftHeader = () => {
  return (
    <Container>
      <Wrapper>
        <Box>Pokédex</Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  margin: -53px 0px 0px -53px;
  border-radius: 50px 0px 0px 0px;
  width: 116%;
  height: 100px;
  box-shadow: 1px 2px 5px #4f045a;
  background: #ff0050;
`;

const Wrapper = styled.div`
  padding-top: 5px;
`;

const Box = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: Roboto;
  color: white;
  margin-top: 10px;
`;
