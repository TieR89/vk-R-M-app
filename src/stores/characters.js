import { defineStore } from 'pinia';

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [], // Список персонажей
    friends: [], // Список друзей
  }),
  actions: {
    // Добавить персонажа
    addCharacter(character) {
      if (!this.characters.some(char => char.id === character.id)) {
        this.characters.push(character);
      }
    },
    // Удалить персонажа
    removeCharacter(characterId) {
      this.characters = this.characters.filter(char => char.id !== characterId);
    },
    // Установить список друзей
    setFriends(friends) {
      this.friends = friends;
    },
  },
});
