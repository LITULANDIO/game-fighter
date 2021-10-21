<template>
  <section>
    <div v-for="player in players" :key="player">
      <Character
        v-for="character in player.characters"
        :key="character.name"
        :character="character"
        @onClicked="onSelectCharacter"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Character from '@/components/character/Character.vue'; // @ is an alias to /src
import game from '@/modules/game/game';
import { Character as Player } from '@/modules/game/type';

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

    const onSelectCharacter = (character: Player): void => {
      console.log(character);
    };

    onMounted(() => {
      getPlayers();
    });

    return {
      players,
      onSelectCharacter
    };
  }
});
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
}
</style>
