// js banner
//
console.log("v0.1a")

//
//	this script loads in base materials like  navbar and footer..
//

const pre_content = document.querySelector('#pre-content')
const content = document.querySelector('#content')

async function get_content(link) {
	let data = await fetch(link).then((response) => { return response})
	return data;
}

// load in top navbar
