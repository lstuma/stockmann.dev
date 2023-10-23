import { useState } from 'react'
import { IoMdRocket } from 'react-icons/io'
import { fetchFirestat, fetchVotefire } from './fetchFire'

import './firecounter.css'

const FireCounter = ({article_id}) => {
    const [fire, setFire] = useState('0')
    const [sentRequest, updateSentRequest] = useState(false)
    const [fireLoaded, updateFireLoaded] = useState(false)
    const [voted, updateVoted] = useState(false);
    
    const vote = async() => {
        if(voted) return;
        updateVoted(true);
        await fetchVotefire(article_id)
        setTimeout(() => { updateFireLoaded(false); updateSentRequest(false); }, 6000);
    }
    
    if(!sentRequest) {
        updateSentRequest(true)
        fetchFirestat(article_id).then(data => setFire(data));
        updateFireLoaded(true)
    }
    
    
    return (
        <div className="fire-counter min-width-1000">
            <button onClick={vote} className={voted?"rocket-fly":""} value="1" ><IoMdRocket className="icon"/></button>
            <h2 className={fireLoaded?"":"loading-text"}>{fire}</h2>
        </div>
    )
}

export default FireCounter