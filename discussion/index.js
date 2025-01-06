// Without ES6
// function pokemon(name, type, level, hp) {
// 	this.name = name;
// 	this.type = type;
// 	this.level = level;
// 	this.hp = hp;

// 	this.attack = function (opponent) {
// 		console.log(`${this.name} attack ${this.opponent}`);
// 		let damage = this.level * 2;
// 	};
// }

// let pikachu = new pokemon("Pikachu", "Electric", 5, 100);
// let charmander = new pokemon("Charmander", "Fire", 5, 100);

// pikachu.attack(charmander);

class Pokemon {
	constructor(name, type, level, hp) {
		this.name = name;
		this.type = type;
		this.level = level;
		this.hp = hp;
	}

	// Attack
	attack(opponent) {
		console.log(`${this.name} attacks ${opponent.name}`);
		let damage = this.level * 2;
		console.log(`${this.name} level up ${damage}.`);
	}

	// Display what damage is received
	received_damage(opponent) {
		let damage = this.level * 2;

		console.log(
			`${this.name} level up. ${opponent.name} received ${damage} damage.`
		);

		if (opponent.hp <= 0) {
			console.log(`${opponent.name} has fainted!`);
		} else {
			opponent.hp -= damage;
			console.log(`${opponent.name} has ${opponent.hp} HP left.`);
		}
	}

	// Heal
	heal(character) {
		let heals = this.level * 2;
		character.hp += heals;
		console.log(
			`${character.name} heals ${heals} HP. Thus, having ${character.hp} HP`
		);
	}
}

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

	show_pokemon(index) {
		return this.pokemon_list[index];

		// Alternative iteration and indeed, a better way:
		// console.log(`${this.name}'s Pokemon:`);
		// this.pokemon.forEach((array, index) => {
		// 	console.log(
		// 		`${index + 1}. ${array.name} (Type: ${array.type}, Level: ${
		// 			array.level
		// 		})`
		// 	);
		// }); // iterating all the pokemon stored in the array
	}
}

// Pokemon
let pikachu = new Pokemon("Pikachu", "Electric", 5, 100);
let kingkong = new Pokemon("King Kong", "Monkey", 10, 200);
let bulbasaur = new Pokemon("Bulbasaur", "Plant", 5, 100);

let charmander = new Pokemon("Charmander", "Fire", 5, 100);
let squirtle = new Pokemon("Squirtle", "Water", 5, 100);

// Trainers
let ash = new Trainer("Ash");
let brock = new Trainer("Brock");

ash.assign_pokemon(pikachu);
ash.assign_pokemon(kingkong);
brock.assign_pokemon(charmander);

let ash_pokemon = ash.show_pokemon(0);
let brock_pokemon = ash.show_pokemon(0);
console.log(" ");
ash_pokemon.attack(brock_pokemon);
console.log(" ");
ash_pokemon.received_damage(brock_pokemon);
console.log(" ");
ash_pokemon.heal(brock_pokemon);
console.log(" ");

// Battlefield
class Battle {
	constructor(pokemon1, pokemon2) {
		this.pokemon1 = pokemon1;
		this.pokemon2 = pokemon2;
	}

	start_battle() {
		console.log(
			`The battle starts between ${this.pokemon1.name} and ${this.pokemon2.name}!`
		);

		while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
			this.pokemon1.attack(this.pokemon2);

			if (this.pokemon2 > 0) {
				this.pokemon2.attack(this.pokemon1);
			}

			if (this.pokemon2.hp <= 0) {
				console.log(`${this.pokemon1.name} has lost the battle`);
			} else {
				console.log(`${this.pokemon2.name} has lost the battle!`);
				break;
			}
		}
	}
}

let battle = new Battle(ash_pokemon, brock_pokemon);
battle.start_battle();

//Polymorphism
class ElectricPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Electric", level, hp); // calling the base class constructor
	}

	attack() {
		console.log(`${this.name} uses Thunderbolt on ${opponent.name}!`);
		let damage = this.level * 3;
		console.log(`${this.name} level up ${damage}.`);
	}
}

class FirePokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Fire", level, hp); // calling the base class constructor
	}

	attack(opponent) {
		console.log(`${this.name} uses Flamethrower on ${opponent.name}!`);
		let damage = this.level * 4;
		console.log(`${this.name} level up ${damage}.`);
	}
}

let fire = new FirePokemon("SampleFire", 5, 100);
fire.attack(pikachu);
fire.received_damage(pikachu);

class MonkeyPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Monkey", level, hp); // calling the base class constructor
	}

	attack() {
		console.log(`${this.name} uses Flamethrower on ${opponent.name}!`);
		let damage = this.level * 3;
		console.log(`${this.name} level up ${damage}.`);
	}
}

// ash.assign_pokemon(pikachu);
// ash.assign_pokemon(kingkong);
// ash.assign_pokemon(bulbasaur);
// brock.assign_pokemon(charmander);
// brock.assign_pokemon(squirtle);
// console.log("\n********************************\n");

// ash.show_pokemon();
// console.log("\n********************************\n");
// brock.show_pokemon();
// console.log("\n********************************\n");

// var input = prompt("Do you want to start the battle? [Y/N]");
// if (input === "Y" || input === "y") {
// 	pikachu.attack(charmander);
// 	pikachu.received_damage(charmander);
// 	console.log("\n********************************\n");

// 	pikachu.attack(squirtle);
// 	pikachu.received_damage(squirtle);
// 	console.log("\n********************************\n");

// 	kingkong.attack(charmander);
// 	kingkong.received_damage(charmander);
// 	console.log("\n********************************\n");

// 	charmander.heal(charmander);
// } else if (input === "N" || input === "n") {
// 	console.log("Okay!");
// } else {
// 	console.log("Invalid input!");
// }
