<template>
  <div class="home">
    <AddCharacterForm />
    <CharacterList :characters="characters" />
    <button @click="buildFriendsList">Построить список друзей :3</button>
    <FriendList v-if="friends.length" :friends="friends" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCharactersStore } from '../stores/characters';
import AddCharacterForm from '../components/AddCharacterForm.vue';
import CharacterList from '../components/CharacterList.vue';
import FriendList from '../components/FriendList.vue';
import { fetchMultipleCharacters } from '../api/rickAndMortyApi';

export default {
  components: {
    AddCharacterForm,
    CharacterList,
    FriendList,
  },
  computed: {
    ...mapState(useCharactersStore, ['characters', 'friends']), // Получаем состояние из хранилища
  },
  methods: {
    ...mapActions(useCharactersStore, [
      'addCharacter',
      'removeCharacter',
      'setFriends',
    ]), // Используем действия из хранилища
    async buildFriendsList() {
      const characterIds = this.characters.map(char => char.id);
      if (characterIds.length > 0) {
        const friendsList = await fetchMultipleCharacters(characterIds);
        this.setFriends(friendsList); // Обновляем список друзей в хранилище
      }
    },
  },
};
</script>
