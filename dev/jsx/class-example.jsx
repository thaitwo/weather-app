class Person {
	constructor(name) {
		this.name = name;
	}

	talk() {
		console.log(this.name);
	}
}

class TennisPlayer extends Person {
	constructor(name) {
		super(name);
	}

	forehand() {
		console.log('hit forhand ' + this.name);
	}
}


// Using class
var Alex = new TennisPlayer('Alex')
Alex.talk();
Alex.forhand();