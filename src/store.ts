import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (text: string) => void;
  setGenreId: (id: number) => void;
  setSortOrder: (order: string) => void;
  setPlatformId: (id: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (text) => set(() => ({ gameQuery: { searchText: text } })),

  setGenreId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),

  setPlatformId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),

  setSortOrder: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: order } })),
}));

export default useGameQueryStore;
