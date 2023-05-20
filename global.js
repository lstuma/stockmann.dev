//	js banner
//
let version ="v0.i"
let stable = true
console.log(version + stable?"":" (unstable)")

//
//	this script loads in base materials like navbar and footer..
//

const pre_content = document.querySelector('#pre-content')
const content = document.querySelector('#content')
const post_content = document.querySelector('#post-content')

async function get_content(link) {
	return await fetch(link).then(response => response.text())
}

//
//	switching of page
//
async function load(link) {
	// update address bar
	window.history.pushState(link, "unused", link)
	// get data for actual content of page
	let data = "404 - Not found!"
	if(link.startsWith("/blog/") && link != '/blog/')
		data = await req_blog(link)
	else
		data = await req_page(link)

	// update content of page
	content.innerHTML = data
}
// get content of page
async function req_page(link) {
	// get page
	return await get_content(link+"index.html")
}
async function req_blog(link) {
	// get raw data
	let data = await get_content(link[-1]+".txt")
	// format markdown
	return data
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
setup()
