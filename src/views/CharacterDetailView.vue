<template>
  <div class="character-detail-view">
    <button @click="goBack" class="back-button">Назад</button>
    <div v-if="isLoading" class="loading">Загрузка...</div>
    <CharacterDetail v-else :character="character" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { fetchCharacterDetails } from '../api/rickAndMortyApi';
import CharacterDetail from '../components/CharacterDetail.vue';

export default {
  components: {
    CharacterDetail,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const character = ref({});
    const isLoading = ref(true);

    onMounted(async () => {
      try {
        character.value = await fetchCharacterDetails(props.id);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        isLoading.value = false;
      }
    });

    const goBack = () => {
      router.push('/');
    };

    return {
      character,
      isLoading,
      goBack,
    };
  },
};
</script>

<style scoped>
.character-detail-view {
  padding: 20px;
}

.back-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.back-button:hover {
  background-color: #3aa876;
}

.loading {
  font-size: 18px;
  color: #2c3e50;
  text-align: center;
  margin-top: 20px;
}
</style>
