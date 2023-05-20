//	js banner
//
console.log("v0.1g (unstable)")

//
//	this script loads in base materials like navbar and footer..
//

const pre_content = document.querySelector('#pre-content')
const content = document.querySelector('#content')
const post_content = document.querySelector('#post-content')

async function get_content(link) {
	return await fetch(link).then(response => response.text());
}

//
//	switching of page
//
async function load(link) {
	window.history.pushState(link, "unused", link);
}




//
//	setup
//
async function setup() {
	// load in top navbar
	pre_content.innerHTML += await get_content('/templates/nav-top.html')
	// load in bottom footer
	post_content.innerHTML += await get_content('/templates/footer-bottom.html')
}
setup();