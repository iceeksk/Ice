var headers = document.getElementsByTagName('h2'),
	contents = document.getElementsByClassName('plan')[0],
	fragment = document.createDocumentFragment();

Array.prototype.forEach.call(headers, function(header){
	var item = document.createElement('li');
	item.innerHTML = header.innerHTML;
	fragment.appendChild(item);
});
contents.appendChild(fragment);