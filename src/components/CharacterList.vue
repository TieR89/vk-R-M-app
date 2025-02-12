<template>
  <ul class="character-list">
    <li v-for="character in characters" :key="character.id" class="character-item">
      <img :src="character.image" :alt="character.name" width="50" height="50" />
      <span>{{ character.name }}</span>
      <button @click="removeCharacter(character.id)">Удалить</button>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'pinia';
import { useCharactersStore } from '../stores/characters';

export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(useCharactersStore, ['removeCharacter']), // Используем действие из хранилища
  },
};
</script>

<style scoped>
.character-list {
  list-style-type: none;
  padding: 0;
}

.character-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.character-item img {
  margin-right: 10px;
}

.character-item button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.character-item button:hover {
  background-color: #cc0000;
}
</style>