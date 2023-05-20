// js banner
//
console.log("v0.1b")

//
//	this script loads in base materials like navbar and footer..
//

const pre_content = document.querySelector('#pre-content')
const content = document.querySelector('#content')

async function get_content(link) {
	return await fetch(link).then(response => response.text()).then(text => text);
}

// load in top navbar
