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


// Sample Loop #1
let words = ['you', 'bot', 'none'];

for (let e = 0; e < words.length; e++) {
  console.log(words[e]);
}

// Alternative
let x;
for (x in words) {
  console.log(words[x]);
}

// Sample Loop #2
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Sample Loop #3
const listWords = words.map((word) =>
  <li key={word.toString()}>{word}</li>
);

console.log({listWords});