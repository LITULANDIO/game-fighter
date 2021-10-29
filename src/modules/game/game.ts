import axios from 'axios';
import { Game } from './type';

export default () => {
  // recuperamos el mock simulando una petición http
  const getGame = async (): Promise<any> => {
    try {
      const options: any = {
        method: 'GET',
        url: 'https://fighters-api.herokuapp.com/fighters'
      };

      if (options) {
        const { data } = await axios(options);
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const imgGame: any = {
    Tank: require('@/assets/tank.png'),
    Assassin: require('@/assets/assasin.png'),
    Knight: require('@/assets/sorcerer.png')
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
            img: imgGame[player.name],
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
