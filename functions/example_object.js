
//call of the class
class livingEntity {


	#currentHp;

	//thats how the object is created
	constructor(name, hp, strength, defense){
		//this is used for the initiated object the values in () are handled same as function parameters
		this.name= name;
		this.hp= hp;
		this.strength= strength;
		this.defense= defense;
		this.#currentHp = hp;
	}

	//methode
	getDamage(opponentAttack){
		this.#currentHp = this.#currentHp -(opponentAttack - this.defense);
		return (opponentAttack - this.defense);
	}
	getHp(){
		return this.#currentHp;
	}


}

//initiate some test objects for our new class

module.exports.livingEntity = livingEntity;

