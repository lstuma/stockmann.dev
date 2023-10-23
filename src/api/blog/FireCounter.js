import { useState } from 'react'

import { fetchFirestat } from './fetchFire'

const FireCounter = ({article_id}) => {
    const [fire, setFire] = useState(-1)
    const [sentRequest, updateSentRequest] = useState(false)
    
    if(!sentRequest) {
        updateSentRequest(true)
        fetchFirestat(article_id).then(data => setFire(data));
    }
    
    return (
        <p className={fire===-1?"loading-text":""}>{fire}</p>
    )
}

export default FireCounter