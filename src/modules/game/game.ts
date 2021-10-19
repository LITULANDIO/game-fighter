import axios from 'axios';
import { Game } from './type';

export default () => {
  // recuperamos el mock simulando una petición http
  const getGame = async (): Promise<any> => {
    try {
      const options: any = {
        method: 'GET',
        url: '/mock/characters.json'
      };

      if (options) {
        const { data } = await axios(options);
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  // parseamos y creamos un nuevo objeto para añadirle una imagen al personaje
  const getCharacterWithImg = async () => {
    const game: Game = await getGame();
    let gameWithImg: Game;

    if (!game) return [];

    return game.characters.map(player => {
      gameWithImg = {
        maxPoints: game.maxPoints,
        minPointsByStat: game.minPointsByStat,
        maxPointsByStat: game.minPointsByStat,
        characters: [
          {
            name: player.name,
            img:
              player.name === 'Tank'
                ? require('@/assets/tank.png')
                : player.name === 'Assasin'
                ? require('@/assets/assasin.png')
                : require('@/assets/sorcerer.png'),
            stats: []
          }
        ]
      };
      player.stats.map(st => {
        for (const stats of gameWithImg.characters) {
          stats.stats.push({ name: st.name, value: st.value });
        }
      });

      return gameWithImg;
    });
  };

  return {
    getCharacterWithImg
  };
};
