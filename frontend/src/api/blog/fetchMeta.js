export const fetchMeta = async () => {
    // get all post metadata from meta.csv collection
    let text = await fetch(process.env.PUBLIC_URL+"/blog/articles/meta.csv").then(data => data.text())
    let posts = []

    for(let line of text.split('\n')) {
        let data = line.split(',')
        posts.push({title: data[0], id: data[1], preview: data[2]})
    }

    return posts.reverse()
}

export default fetchMeta