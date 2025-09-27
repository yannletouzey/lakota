import { create } from 'zustand';

const useStore = create((set) => ({
  menuButtonIsActive: false,
  setMenuButtonIsActive: (value) => set({ menuButtonIsActive: value }),
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}));

export default useStore;