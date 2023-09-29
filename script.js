//your JS code here. If required.

const ele= document.getElementById('level');

function getaparent(ele) {
	let count=0;

	while(ele){
		count++;
		ele=ele.parentElement;
	}

	return count;
}

const count= getaparent(ele);

window.alert(count);