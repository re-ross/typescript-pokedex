import styled from "styled-components";
import { MouseEvent, GenProps } from "../types";

export const Generations = ({ updateGen }: GenProps) => {
  const updateGenHandler = (e: MouseEvent) => {
    updateGen((e.target as HTMLElement).id);
  };
  return (
    <Container>
      <ListContainer>
        <ListItem>
          <Button id="gen1" onClick={(e) => updateGenHandler(e)}>
            Gen 1
          </Button>
        </ListItem>
        <ListItem>
          <Button id="gen2" onClick={(e) => updateGenHandler(e)}>
            Gen 2
          </Button>
        </ListItem>
        <ListItem>
          <Button id="gen3" onClick={(e) => updateGenHandler(e)}>
            Gen 3
          </Button>
        </ListItem>
        <ListItem>
          <Button id="gen4" onClick={(e) => updateGenHandler(e)}>
            Gen 4
          </Button>
        </ListItem>
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 999;
  left: -129px;
  top: 70px;
`;

const ListContainer = styled.ul`
  position: relative;
`;

const ListItem = styled.li`
  list-style-type: none;
  margin-top: 90px;
  margin-left: 1px;
  transform: rotate(-90deg);
  padding: 5px 30px;
  background-color: #ff0050;
  border-radius: 30px 30px 0px 0px;
  border: 2px solid #4f045a;
  &:active {
    background-color: #dc0059;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
`;
