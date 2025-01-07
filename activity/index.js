class Trainer {
	constructor(name) {
		this.name = name;
		this.pokemon_list = [];
	}
	// assigning the pokemon object to the trainer
	assign_pokemon(assigned_pokemon) {
		this.pokemon_list.push(assigned_pokemon);
		console.log(
			`${assigned_pokemon.name} has been assigned to Trainer ${this.name}.`
		);
	}
	// return this.pokemon_list[index];
	show_pokemon() {
		console.log(`${this.name}'s Pokemon:`);
		this.pokemon_list.forEach((array, index) => {
			console.log(
				`${index + 1}. ${array.name} (Type: ${array.type}, Level: ${
					array.level
				})`
			);
		}); // iterating all the pokemon stored in the array
	}
	summarize() {
		console.log(`${this.name}'s Pokemon:`);
		this.pokemon_list.forEach((array, index) => {
			// ensure HP is not negative
			const adjusted_hp = array.hp < 0 ? 0 : array.hp;
			console.log(
				`${index + 1}. ${array.name} (Type: ${array.type}, Level: ${
					array.level
				}, HP: ${adjusted_hp})`
			);
		});
	}
}

class Pokemon {
	constructor(name, type, level, hp) {
		this.name = name;
		this.type = type;
		this.level = level;
		this.hp = hp;
		if (type === "Grass") {
			this.damage = this.level * 2;
		} else if (type === "Water") {
			this.damage = this.level * 3;
		} else if (type === "Electric") {
			this.damage = this.level * 4;
		} else if (type === "Fire") {
			this.damage = this.level * 5;
		}
	}

	// Attack
	attack(opponent) {
		let chance = Math.random() * 100;
		console.log(`${this.name} attacks ${opponent.name}`);
		console.log(`${this.name} level up ${this.damage}.`);

		if (chance < 10) {
			console.log(`${this.name} landed a critical hit!`);
			this.damage *= 3; // critical hit triple damage
		} else if (chance < 30) {
			console.log(`${this.name} landed a double damage hit!`);
			this.damage *= 2; // double damage
		}
	}

	// Display what damage is received
	received_damage(opponent) {
		console.log(
			`${this.name} attacks. ${opponent.name} received ${this.damage} damage.`
		);
	}

	// Display how much HP left
	calculate_damage(opponent) {
		if (opponent.hp <= 0) {
			console.log(`${opponent.name} has fainted!`);
		} else {
			opponent.hp -= this.damage;
			if (opponent.hp < 0) {
				console.log(`${opponent.name} has 0 HP left.`);
			} else {
				console.log(`${opponent.name} has ${opponent.hp} HP left.`);
			}
		}
	}

	// Heal
	heal() {
		let healer,
			chance = Math.random() * 100;

		if (chance < 10) {
			healer = this.level * 3;
			this.hp += healer;
			console.log(
				`${this.name} received a ultra heal! Heals ${healer} HP. Thus, obtaining ${this.hp} HP`
			);
		} else if (chance < 30) {
			healer = this.level * 2;
			this.hp += healer;
			console.log(
				`${this.name} heals ${healer} HP. Thus, obtaining ${this.hp} HP`
			);
		}
	}

	// Increase damage and level up
	power_up() {
		let dummy = this.damage;
		this.damage = this.damage + this.level * 2;
		this.level++;
		console.log(
			`${this.name} level up! Level ${this.level}. Damage increased: ${dummy} -> ${this.damage}`
		);
	}
}

class ElectricPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Electric", level, hp); // calling the base class constructor
	}
	// overriding received_damage
	attack(opponent) {
		console.log(`${this.name} uses Thunderbolt on ${opponent.name}!`);
		super.attack(opponent);
	}
	// overriding received_damage
	received_damage(opponent) {
		super.received_damage(opponent); // call received_damage from the parent class
	}
}

class GrassPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Grass", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Leaf Storm on ${opponent.name}!`);
		super.attack(opponent);
	}
	received_damage(opponent) {
		super.received_damage(opponent);
	}
}

class WaterPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Water", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Aqua Ring on ${opponent.name}!`);
		super.attack(opponent);
	}
	received_damage(opponent) {
		super.received_damage(opponent);
	}
}

class FirePokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Fire", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Flamethrower on ${opponent.name}!`);
		super.attack(opponent);
	}
	received_damage(opponent) {
		super.received_damage(opponent);
	}
}

// Pokemon Declaration
const pokemon_array = [
	"Bulbasaur",
	"Charmander",
	"Squirtle",
	"Charizard",
	"Blastoise",
	"Butterfree",
	"Treecko",
	"Electrode",
];

function shuffle_arrays(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // random index
		[array[i], array[j]] = [array[j], array[i]]; // swap elements
	}
}

const names = [];
shuffle_arrays(pokemon_array);
names.push(...pokemon_array);

// trainer declaration
const ash = new Trainer("Ash");
const brock = new Trainer("Brock");
const misty = new Trainer("Misty");

let pikachu = new ElectricPokemon("Pikachu", 1, 110);

ash.assign_pokemon(pikachu);

// pokemon assigned to their trainers
for (let index = 0; index < names.length; index++) {
	let pokemon;
	// use the shuffled 'names' array instead of pokemon_array
	if (names[index] === "Bulbasaur") {
		pokemon = new GrassPokemon(names[index], 1, 100);
	} else if (names[index] === "Charmander") {
		pokemon = new FirePokemon(names[index], 1, 110);
	} else if (names[index] === "Squirtle") {
		pokemon = new WaterPokemon(names[index], 1, 100);
	} else if (names[index] === "Charizard") {
		pokemon = new FirePokemon(names[index], 1, 110);
	} else if (names[index] === "Blastoise") {
		pokemon = new WaterPokemon(names[index], 1, 100);
	} else if (names[index] === "Butterfree") {
		pokemon = new GrassPokemon(names[index], 1, 95);
	} else if (names[index] === "Treecko") {
		pokemon = new GrassPokemon(names[index], 1, 95);
	} else if (names[index] === "Electrode") {
		pokemon = new ElectricPokemon(names[index], 1, 110);
	}

	if (index <= 1) {
		ash.assign_pokemon(pokemon);
	} else if (index >= 2 && index < 5) {
		brock.assign_pokemon(pokemon); // brock receives pokemon 1,2,3
	} else if (index >= 5 && index < 9) {
		misty.assign_pokemon(pokemon); // misty receives pokemon 4,5,6
	}
}

console.log("\n****************************************\n");
ash.show_pokemon();
console.log(" ");
brock.show_pokemon();
console.log(" ");
misty.show_pokemon();
console.log("\n****************************************\n");

class Battle {
	constructor(trainer1, trainer2) {
		this.trainer1 = trainer1;
		this.trainer2 = trainer2;
	}

	start_battle() {
		console.log(
			`The battle starts between Trainer ${this.trainer1.name} and Trainer ${this.trainer2.name}!`
		);

		let trainer1_pokemon_index = 0;
		let trainer2_pokemon_index = 0;

		// battle loop
		while (
			trainer1_pokemon_index < this.trainer1.pokemon_list.length &&
			trainer2_pokemon_index < this.trainer2.pokemon_list.length
		) {
			const pokemon1 = this.trainer1.pokemon_list[trainer1_pokemon_index];
			const pokemon2 = this.trainer2.pokemon_list[trainer2_pokemon_index];

			// check if the pokemon has fainted (HP <= 0), if so, skip to next pokemon
			if (pokemon1.hp <= 0) {
				console.log(
					`Trainer ${this.trainer1.name}'s ${pokemon1.name} has fainted and cannot participate in this battle.`
				);
				trainer1_pokemon_index++;
				continue;
			}
			if (pokemon2.hp <= 0) {
				console.log(
					`Trainer ${this.trainer2.name}'s ${pokemon2.name} has fainted and cannot participate in this battle.`
				);
				trainer2_pokemon_index++;
				continue;
			}

			// if both pokemon have HP > 0, proceed with the battle
			console.log(
				`\nTrainer ${this.trainer1.name} releases ${pokemon1.name}! HP: ${pokemon1.hp}`
			);
			console.log(
				`Trainer ${this.trainer2.name} releases ${pokemon2.name}! HP: ${pokemon2.hp}`
			);

			let round_counter = 1;
			while (pokemon1.hp > 0 && pokemon2.hp > 0) {
				console.log(`\n******** Battle Round ${round_counter} ********\n`);

				// pokemon 1 attacks pokemon 2
				pokemon1.attack(pokemon2);
				pokemon1.received_damage(pokemon2);
				pokemon1.calculate_damage(pokemon2);
				pokemon2.hp = Math.max(0, pokemon2.hp); // ensure HP not negative
				pokemon1.power_up();
				pokemon2.heal();

				if (pokemon2.hp <= 0) {
					console.log(`${pokemon2.name} HP: 0`);
				} else {
					console.log(`${pokemon2.name} HP: ${pokemon2.hp}`);
				}

				if (pokemon2.hp <= 0) {
					console.log(`${pokemon2.name} has fainted!`);
					console.log(`${pokemon1.name} wins this round!`);
					trainer2_pokemon_index++; // move to next pokemon for trainer 1
					break;
				}

				// pokemon 2 attacks pokemon 1
				pokemon2.attack(pokemon1);
				pokemon2.received_damage(pokemon1);
				pokemon2.calculate_damage(pokemon1);
				pokemon1.hp = Math.max(0, pokemon1.hp); // ensure HP not negative
				pokemon2.power_up();
				pokemon1.heal();

				if (pokemon1.hp <= 0) {
					console.log(`${pokemon1.name} HP: 0`);
				} else {
					console.log(`${pokemon1.name} HP: ${pokemon1.hp}`);
				}
				if (pokemon1.hp <= 0) {
					console.log(`${pokemon1.name} has fainted!`);
					console.log(`${pokemon2.name} wins this round!`);
					trainer1_pokemon_index++; // move to next pokemon for trainer 1
					break;
				}

				round_counter++;
			}

			// check if the battle ended with one trainer's pokemon fainting
			if (trainer1_pokemon_index >= this.trainer1.pokemon_list.length) {
				console.log(`${this.trainer1.name} has been eliminated!`);
				return this.trainer2; // trainer 2 wins
			}

			if (trainer2_pokemon_index >= this.trainer2.pokemon_list.length) {
				console.log(`${this.trainer2.name} has been eliminated!`);
				return this.trainer1; // trainer 1 wins
			}
		}

		console.log("\n*************************************");
	}
}

const trainers = [ash, brock, misty];

function shuffle_array(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // swap elements
	}
}

while (trainers.length > 1) {
	// randomize the trainers
	shuffle_array(trainers);

	// select the first two trainers
	const trainer1 = trainers[0];
	const trainer2 = trainers[1];

	// start the battle
	const battle = new Battle(trainer1, trainer2);
	const winner = battle.start_battle();

	// eliminate the loser and continue with the winner
	trainers.shift();
	trainers[0] = winner;
}

console.log(`\nThe final winner is ${trainers[0].name}!`);

console.log(`********* END OF TOURNAMENT *********`);

console.log(`\n************* Summary ***************`);
ash.summarize();
console.log(" ");
brock.summarize();
console.log(" ");
misty.summarize();
console.log("\n****************************************\n");
