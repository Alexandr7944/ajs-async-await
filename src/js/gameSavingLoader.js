import json from './parser';
import read from './reader';

class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return JSON.parse(value);
  }
}

export default GameSavingLoader;
