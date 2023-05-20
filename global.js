//	js banner
//
let version ="v0.1u"
let stable = true
console.log(version + (stable?"":" (unstable)"))

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
	let data = await get_content(link.slice(0,-1)+".txt")
	// format markdown
	return "<div class='card'>"+ await format_markdown(data) +"</div>"
}
async function format_markdown(text) {
	let formatted = ""
	// format line specific things
	for(let line of text.split('\n'))
	{
		formatted += await format_markdown_line(line)
	}
	// format bold, italic, underscore...
	while(formatted.includes('***'))
	{
		formatted = formatted.replace('***', "<span class='bold'>").formatted.replace('***', "</span>")
	}

	return formatted
}
async function format_markdown_line(line) {
	// headings
	if(line.startsWith('######'))
		line = "<h6>"+line.slice(7)+"</h6>"
	else if(line.startsWith('#####'))
		line = "<h5>"+line.slice(6)+"</h5>"
	else if(line.startsWith('####'))
		line = "<h4>"+line.slice(5)+"</h4>"
	else if(line.startsWith('###'))
		line = "<h3>"+line.slice(4)+"</h3>"
	else if(line.startsWith('##'))
		line = "<h2>"+line.slice(3)+"</h2>"
	else if(line.startsWith('#'))
		line = "<h1>"+line.slice(2)+"</h1>"
	else
		line = "<p>"+line+"</p>"

	return line
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
