import getAttack, { character } from '../js/app';

test('test of the get attack function', () => {
  const received = getAttack(character);
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание не доступно',
    },
  ];

  expect(received).toEqual(expected);
});
