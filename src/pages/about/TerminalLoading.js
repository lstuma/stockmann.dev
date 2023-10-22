import { useState, useEffect } from 'react'

const getPrefix = (prefixChar) => {
    switch(prefixChar) {
        case '$': return <span style={{color: "red"}}>lstuma@kali:~$</span>
        case '+': return <><span style={{color: "#555"}}>[</span><span style={{color: "green"}}>+</span><span style={{color: "#555"}}>] </span></>
        case '-': return <><span style={{color: "#555"}}>[</span><span style={{color: "red"}}>-</span><span style={{color: "#555"}}>] </span></>
    
    return <></>
    }
}

export const TerminalLoading = ({lines}) => {
    const [char, setChar] = useState(0)
    const [line, setLine] = useState(0)
    
    const moveCursor = async (_char, _line) => {
        if(_char >= lines[_line].length) {
            _line += 1
            _char = 0
            setChar(_char)
            let timeout = 500;
            if(lines[_line][_char] == 'W')  {
                timeout = 2000;
                _line += 1
            }
            else if(lines[_line][_char] == 'S') {
                timeout = 100;
                _line += 1;
            }
            setLine(_line)
            setTimeout(() => { moveCursor(_char, _line); }, timeout); return;
        } else {
            _char += 1
            setChar(_char)
        }
        if(_line >= lines.length-1 && _char >= lines[_line].length-1) return;
        setTimeout(() => { moveCursor(_char, _line); }, 10); return;
    }
    
    useEffect(() => {
        moveCursor(char, line);
    }, [])
    
    return (
        <div id="terminal-window">
            {Object.entries(lines.slice(0,line)).map(([key, text]) => (
            <p className="terminal-code" key={key}>
                {getPrefix(text[0])}
                {text.substring(1)}
            </p>
        ))}
            {char>0?
                <p className="terminal-code" key={line}>
                    {getPrefix(lines[line][0])}
                    {lines[line].substring(1, char)}
                </p>
                :
                <></>
            }
        </div>
    )
    
}

export default TerminalLoading