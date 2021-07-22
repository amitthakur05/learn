import React, { useState } from 'react';
import styled from "styled-components";

const CounterWrapper =styled("div")`{
    .hi {
        text-align:"center";
    }
}`
;

const Counter =() => {
    const [count, setCount] =useState(0);
    return (
        <CounterWrapper>
            <h4>{count}</h4>
            <button 
                // title="count increase by 5" 
                onClick={()=>setCount(prevState => prevState+5)}
            >click count increase by 5</button>
        </CounterWrapper>
    )

} 

export default Counter;