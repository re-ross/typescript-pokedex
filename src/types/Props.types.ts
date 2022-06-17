//FUNCTIONS
export type GenProps = {
  updateGen: (params: any) => any;
};

//PROPS
export type Pokemon = {
  id: number;
  name: string;
  abilities: Array<any>;
  moves: Array<any>;
  img: any;
  stats: Array<any>;
  types: Array<any>;
};

export type PokemonProps = {
  pokemon: Pokemon;
  renderCard: (params: any) => any;
};

export type CurrentPokemonProps = {
  currentPokemon: Pokemon;
};

export type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (params: any) => any;
};
