export const fetchFirestat = async (id) => {
    let json = await fetch('http://api.stockmann.dev/get_fire?id='+id).then(data => data.text())
    
    let data = JSON.parse(json)
    return data.fire
}
export const fetchVotefire = async (id) => {
    let json = await fetch('http://api.stockmann.dev/vote_fire?id='+id).then(data => data.text())
    
    let data = JSON.parse(json)
    if(data.status === 'OK')
        return true
    else return false
}
