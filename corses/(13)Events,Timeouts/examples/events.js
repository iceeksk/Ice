var child = document.getElementsByClassName('child')[0],
	parent = document.getElementsByClassName('parent')[0];


console.log(child);
child.onclick = function(){
	console.log(2);
};

child.addEventListener('click', function(event){
	console.log('CHILD', event, this);
	// event.stopPropagation();
	// event.preventDefault();

	var e = new CustomEvent('custom', {
		detail: {
			date: new Date()
		}
	});
	
	document.dispatchEvent(e);
}, false);

parent.addEventListener('click', function(event){
	console.log('PARENT', event.target, event.currentTarget, this);
}, false);

/*document.addEventListener('click', function(event){
	console.log('DOCUMENT', event, this);

	event.stopPropagation();
}, true);*/

document.addEventListener('custom', function(event){
	console.log('DOCUMENT', event, this);

	event.stopPropagation();
}, false);


// console.log(child1);