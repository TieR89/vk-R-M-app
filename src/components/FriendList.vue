<template>
  <div class="friend-list">
    <div v-for="friend in sortedFriends" :key="friend.id" :style="{ backgroundColor: `rgba(66, 185, 131, ${friend.intensity})` }">
      <img :src="friend.image" :alt="friend.name" />
      <p>{{ friend.name }}</p>
      <p>Статус: {{ friend.status }}</p>
      <p>Вид: {{ friend.species }}</p>
      <p>Пол: {{ friend.gender }}</p>
      <router-link :to="`/character/${friend.id}`">Подробнее</router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const sortedFriends = computed(() => {
      return [...props.friends].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    });

    return {
      sortedFriends,
    };
  },
};
</script>

<style scoped>
.friend-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.friend-list div {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.friend-list img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.friend-list p {
  margin: 5px 0;
  font-size: 14px;
}

.friend-list a {
  color: #42b983;
  text-decoration: none;
}

.friend-list a:hover {
  text-decoration: underline;
}
</style>