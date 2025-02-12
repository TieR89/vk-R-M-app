<template>
  <div class="add-character-form">
    <input
      v-model="query"
      type="text"
      placeholder="Введите первую букву имени"
      @input="handleInput"
    />
    <ul v-if="suggestions.length" class="suggestions">
      <li
        v-for="character in suggestions"
        :key="character.id"
        class="suggestion-item"
      >
        <img
          :src="character.image"
          :alt="character.name"
          width="50"
          height="50"
        />
        <span>{{ character.name }}</span>
        <button @click="addCharacter(character)">Добавить</button>
        <button @click="removeCharacter(character.id)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import { searchCharacters } from '../api/rickAndMortyApi';
import { mapActions } from 'pinia';
import { useCharactersStore } from '../stores/characters';

export default {
  setup() {
    const query = ref('');
    const suggestions = ref([]);

    const handleInput = async () => {
      if (query.value.length > 0) {
        const results = await searchCharacters(query.value);
        suggestions.value = results;
      } else {
        suggestions.value = [];
      }
    };

    const { addCharacter, removeCharacter } = mapActions(useCharactersStore, [
      'addCharacter',
      'removeCharacter',
    ]);

    return {
      query,
      suggestions,
      handleInput,
      addCharacter,
      removeCharacter,
    };
  },
};
</script>

<style scoped>
.add-character-form {
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
}

.suggestions {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
}

.suggestion-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.suggestion-item img {
  margin-right: 10px;
}

.suggestion-item button {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
}
</style>
