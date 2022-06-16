import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Wrapper>
      <Icon></Icon>
      <SearchInput type="text" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled(SearchIcon)`
  position: absolute;
  top: 10px;
  left: 5px;
`;

const SearchInput = styled.input`
  width: 80%;
  margin: 0 10% 15px 10%;
  background-color: transparent;
  border: none;
  color: #4f045a;
  border-bottom: 2px solid #4f045a;
`;
