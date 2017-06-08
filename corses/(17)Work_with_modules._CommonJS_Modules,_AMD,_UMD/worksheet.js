var JangoFett = {
	accuracy: 100500,
	awesomness: Infinity
};


var stormtrooper = Object.create(JangoFett);
stormtrooper.accuracy = -100500;

console.log(stormtrooper.awesomness);