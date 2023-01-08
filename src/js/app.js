import Team from './Team';
import Character from './Сharacter';

const newTeam = new Team();

const player = new Character({
	name: 'Joe',
	age: 32
});
const player1 = new Character({
	name: 'John',
	age: 44
});
const player2 = new Character({
	name: 'Vanda',
	age: 25
});

newTeam.addAll(player, player1, player2, player2);