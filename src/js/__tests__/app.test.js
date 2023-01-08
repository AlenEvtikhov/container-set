import Character from '../Сharacter';
import Team from '../Team';

test("Проверка на добавление нового игрока", () => {
  const newTeam = new Team();

  const player = new Character({
    name: "Joe",
    age: 32
  });

  newTeam.add(player);

  const newSet = new Set();
  newSet.add({
    name: "Joe",
    age: 32
  });

  expect(newTeam.members).toEqual(newSet);
});

test("Проверка на добавление cуществующего игрока", () => {
  const newTeam = new Team();

  const player = new Character({
    name: "Joe",
    age: 32
  });

  newTeam.add(player);

  expect(function () {
    newTeam.add(player);
  }).toThrowError("Игрок уже есть в команде.");
});

test('Проверка на отсутсвие дубликатов при добавлении новых игроков', () => {
  const newTeam = new Team();

  const player = new Character({
    name: "Joe",
    age: 32
  });
  const player1 = new Character({
    name: "John",
    age: 44
  });
  const player2 = new Character({
    name: "Vanda",
    age: 25
  });

  newTeam.addAll(player, player1, player2, player2);

  expect(newTeam.members.size).toEqual(3);
});

test("Проверка на преобразование Set в массив", () => {
  const newTeam = new Team();

  const player = new Character({
    name: "Joe",
    age: 32
  });
  const player1 = new Character({
    name: "John",
    age: 44
  });
  const player2 = new Character({
    name: "Vanda",
    age: 25
  });

  newTeam.addAll(player, player1, player2);

  newTeam.toArray();

  const sample = [{
      "age": 32,
      "name": "Joe"
    },
    {
      "age": 44,
      "name": "John"
    },
    {
      "age": 25,
      "name": "Vanda"
    }
  ];

  expect(newTeam.toArray()).toEqual(sample);
});