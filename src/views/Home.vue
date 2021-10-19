<template>
  <div v-for="player in players" :key="player">
    <Character v-for="character in player.characters" :key="character.name" :character="character" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Character from '@/components/character/Character.vue'; // @ is an alias to /src
import game from '@/modules/game/game';

export default defineComponent({
  name: 'Home',
  components: {
    Character
  },
  setup() {
    const players = ref();
    const { getCharacterWithImg } = game();

    const getPlayers = async (): Promise<void> => {
      players.value = await getCharacterWithImg();
      console.log(players.value);
    };

    onMounted(() => {
      getPlayers();
    });

    return {
      players
    };
  }
});
</script>
