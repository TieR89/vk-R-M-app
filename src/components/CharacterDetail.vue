<template>
  <div class="character-detail">
    <img :src="character.image" :alt="character.name" class="character-image" />
    <h2 class="character-name">{{ character.name }}</h2>
    <div class="character-info">
      <p><strong>Статус:</strong> {{ character.status }}</p>
      <p><strong>Вид:</strong> {{ character.species }}</p>
      <p><strong>Пол:</strong> {{ character.gender }}</p>
      <p><strong>Локация:</strong> {{ character.location.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.character-detail {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

.character-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #42b983;
}

.character-name {
  margin: 10px 0;
  color: #2c3e50;
}

.character-info {
  text-align: left;
  margin-top: 20px;
}

.character-info p {
  margin: 10px 0;
  font-size: 16px;
}
</style>
