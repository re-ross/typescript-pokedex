//FUNCTIONS
export type GenProps = {
  updateGen: (params: any) => any;
};

//PROPS
export type Pokemon = {
  id: number;
  name: string;
  abilities: Array<Object>;
  moves: Array<Object>;
  img: string;
  stats: Array<Object>;
  types: Array<Object>;
};

export type PokemonProps = {
  pokemon: Pokemon;
  renderCard: (params: any) => any;
};

export type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (params: any) => any;
};
