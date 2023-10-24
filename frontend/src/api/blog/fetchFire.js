export const fetchFirestat = async (id) => {
    let json = await fetch('https://api.stockmann.dev/get_fire?id='+id).then(data => data.text())
    
    let data = JSON.parse(json)
    return data.fire
}
export const fetchVotefire = async (id) => {
    await fetch('https://api.stockmann.dev/vote_fire?id='+id).then(data => data.text())
}
