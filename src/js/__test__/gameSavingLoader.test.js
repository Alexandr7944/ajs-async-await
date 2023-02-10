import GameSavingLoader from '../gameSavingLoader';

test('test positive method GameSavingLoader.load()', () => {
  const output = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  GameSavingLoader.load()
    .then((data) => expect(data).toEqual(output));
});
