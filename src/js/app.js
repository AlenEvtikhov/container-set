import team from './team';
import character from './character';

const newTeam = new team();

const player = new character({ name: 'Joe', age: 32 });
const player1 = new character({ name: 'John', age: 44 });
const player2 = new character({ name: 'Vanda', age: 25 });

newTeam.addAll(player, player1, player2, player2);