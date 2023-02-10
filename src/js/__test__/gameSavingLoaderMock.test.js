import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader');
beforeEach(() => jest.resetAllMocks());

test(('test negative method GameSavingLoader.load()'), () => {
  read.mockRejectedValue(new Error('Error'));
  GameSavingLoader.load()
    .then((err) => expect(err.message).toBe('Error'));
});
