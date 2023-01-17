import json from './parser';
import read from './reader';

class GameSavingLoader {
  static async load(flag = false) {
    try {
      const data = await read(flag);
      const value = await json(data);
      return JSON.parse(value);
    } catch (e) {
      return e;
    }
  }
}

export default GameSavingLoader;
