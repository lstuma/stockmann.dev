export const fetchPost = async (link) => {
    let text = await fetch(link).then(data => data.text())
    let lines = text.split('\n')
    text = text.slice(text.indexOf('\n', 2))

    if(lines[0].startsWith('<!DOCTYPE html>')) { console.error("could not load resource"); return {title: "404", markdown: "404"}; }

    return {title: lines[0], markdown: text}
}

export default fetchPost