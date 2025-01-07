class Trainer {
	constructor(name) {
		this.name = name;
		this.pokemon_list = [];
	}

	assign_pokemon(assigned_pokemon) {
		this.pokemon_list.push(assigned_pokemon); // assigning the Pokemon object to the trainer
		console.log(
			`${assigned_pokemon.name} has been assigned to Trainer ${this.name}.`
		);
	}

	show_pokemon() {
		// return this.pokemon_list[index];

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
			// Ensure HP is not negative
			const adjustedHp = array.hp < 0 ? 0 : array.hp;
			console.log(
				`${index + 1}. ${array.name} (Type: ${array.type}, Level: ${
					array.level
				}, HP: ${adjustedHp})`
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
		} else if (type === "Ultimate") {
			this.damage = this.level * 7;
		}
	}

	// Attack
	attack(opponent) {
		let chance = Math.random() * 100;

		console.log(`${this.name} attacks ${opponent.name}`);
		console.log(`${this.name} level up ${this.damage}.`);

		if (chance < 10) {
			console.log(`${this.name} landed a critical hit!`);
			this.damage *= 3; // Critical hit triple damage
		} else if (chance < 30) {
			console.log(`${this.name} landed a double damage hit!`);
			this.damage *= 2; // Double damage
		}
		//Pokemon level up! 10
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
				`${this.name} received a ultra heal! Heals ${healer} HP. Thus, having ${this.hp} HP`
			);
		} else if (chance < 30) {
			healer = this.level * 2;
			this.hp += healer;
			console.log(
				`${this.name} heals ${healer} HP. Thus, having ${this.hp} HP`
			);
			// } else {
			// 	healer = this.level * 2;
			// 	this.hp += healer;
			// 	console.log(
			// 		`${this.name} heals ${healer} HP. Thus, having ${this.hp} HP`
			// 	);
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

class UltimatePokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Ultimate", level, hp);
	}

	attack(opponent) {
		console.log(`${this.name} uses Pulverize on ${opponent.name}!`);
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
		const j = Math.floor(Math.random() * (i + 1)); // Random index
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
}

const names = [];

shuffle_arrays(pokemon_array);
names.push(...pokemon_array);

//Trainer Declaration
const ash = new Trainer("Ash");
const brock = new Trainer("Brock");
const misty = new Trainer("Misty");

let pikachu = new ElectricPokemon("Pikachu", 1, 110);

ash.assign_pokemon(pikachu);

//Pokemon assigned to their trainers
for (let index = 0; index < names.length; index++) {
	let pokemon;
	// Use the shuffled 'names' array instead of pokemon_array
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

		let trainer1PokemonIndex = 0;
		let trainer2PokemonIndex = 0;

		// Battle Loop
		while (
			trainer1PokemonIndex < this.trainer1.pokemon_list.length &&
			trainer2PokemonIndex < this.trainer2.pokemon_list.length
		) {
			const pokemon1 = this.trainer1.pokemon_list[trainer1PokemonIndex];
			const pokemon2 = this.trainer2.pokemon_list[trainer2PokemonIndex];

			// check if the pokemon has fainted (HP <= 0), if so, skip to next Pokémon
			if (pokemon1.hp <= 0) {
				console.log(
					`Trainer ${this.trainer1.name}'s ${pokemon1.name} has fainted and cannot participate in this battle.`
				);
				trainer1PokemonIndex++;
				continue;
			}
			if (pokemon2.hp <= 0) {
				console.log(
					`Trainer ${this.trainer2.name}'s ${pokemon2.name} has fainted and cannot participate in this battle.`
				);
				trainer2PokemonIndex++;
				continue;
			}

			// if both pokemon have HP > 0, proceed with the battle
			console.log(
				`\nTrainer ${this.trainer1.name} releases ${pokemon1.name}! HP: ${pokemon1.hp}`
			);
			console.log(
				`Trainer ${this.trainer2.name} releases ${pokemon2.name}! HP: ${pokemon2.hp}`
			);

			let roundCounter = 1;
			while (pokemon1.hp > 0 && pokemon2.hp > 0) {
				console.log(`\n******** Battle Round ${roundCounter} ********\n`);

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
					trainer2PokemonIndex++; // move to next pokemon for trainer 1
					break;
				}

				// Pokemon 2 attacks Pokemon 1
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
					trainer1PokemonIndex++; // move to next pokemon for trainer 1
					break;
				}

				roundCounter++;
			}

			// check if any trainer runs out of pokemon to continue the battle
			if (trainer1PokemonIndex >= this.trainer1.pokemon_list.length) {
				console.log(`Trainer ${this.trainer2.name} wins the battle!`);
				break;
			}

			if (trainer2PokemonIndex >= this.trainer2.pokemon_list.length) {
				console.log(`Trainer ${this.trainer1.name} wins the battle!`);
				break;
			}

			trainer1PokemonIndex++;
			trainer2PokemonIndex++;
		}

		// final winner check after all rounds
		if (trainer1PokemonIndex >= this.trainer1.pokemon_list.length) {
			console.log(`Trainer ${this.trainer2.name} wins the battle!`);
		} else if (trainer2PokemonIndex >= this.trainer2.pokemon_list.length) {
			console.log(`Trainer ${this.trainer1.name} wins the battle!`);
		} else {
			console.log("The battle ended without a winner.");
		}

		console.log("\n*************************************");
	}
}

const trainers = [ash, brock, misty];

// Shuffle trainers array
function shuffle_array(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
}

// Elimination tournament logic
function start_elimination_tournament(trainers) {
	// Shuffle the array of trainers at the start
	shuffle_array(trainers);

	let winner = trainers[0]; // The first trainer starts as the winner
	console.log(
		`The tournament begins! Trainer ${winner.name} starts the battle.`
	);

	// Continue battling until only one trainer remains
	while (trainers.length > 1) {
		// Randomly pick an opponent from the remaining trainers
		const remainingTrainers = trainers.filter((trainer) => trainer !== winner);
		const opponent =
			remainingTrainers[Math.floor(Math.random() * remainingTrainers.length)];

		// Start the battle between the winner and the selected opponent
		console.log(
			`\nBattle between Trainer ${winner.name} and Trainer ${opponent.name}!`
		);
		const battle = new Battle(winner, opponent);
		battle.start_battle();

		// Determine who the winner is after the battle
		if (battle.trainer1.pokemon_list.length > 0) {
			winner = battle.trainer1; // Trainer 1 won
			console.log(
				`${winner.name} wins this battle and proceeds to the next round.`
			);
		} else {
			winner = battle.trainer2; // Trainer 2 won
			console.log(
				`${winner.name} wins this battle and proceeds to the next round.`
			);
		}

		// Remove the loser from the tournament
		trainers = trainers.filter((trainer) => trainer !== winner);

		if (trainers.length > 1) {
			break;
		}
	}

	console.log(`\nThe winner of the tournament is Trainer ${winner.name}!`);
}

// Start the tournament
start_elimination_tournament(trainers);

console.log(`********* END OF TOURNAMENT *********`);

console.log(`\n************* Summary ***************`);
ash.summarize();
console.log(" ");
brock.summarize();
console.log(" ");
misty.summarize();
console.log("\n****************************************\n");
