import { create } from "zustand";

const FavStore = create((set) => ({
  favourites: [],

  addFavourite: (singleSong) =>
    set((state) => ({ favourites: [...state.favourites, singleSong] })),

  removeFavourite: (id) =>
    set((state) => ({
      favourites: state.favourites.filter(
        (singleSong) => singleSong.trackId !== id,
      ),
    })),
}));

export default FavStore;
