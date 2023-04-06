import "./App.css";
import List from './component/List';
import ListMobile from './component/ListMobile'

import { useState } from 'react';
import styled from "styled-components";

const TestBox = styled.div`
position: absolute;
top:0;
right: 0;
width: 40px;
height: 65px;
background-color: goldenrod;
display: flex;
align-items: center;
`

function App() {

    const [isHover, setIsHover] = useState(false);

    return (
        <div className="App">
            {/* <div>여기는 일단 냅두기 영역</div> */}

            <TestBox 
            onMouseEnter={()=>{setIsHover(!isHover)}}
            >TestBox</TestBox>
            {isHover
            ?<List />
            :<ListMobile />}
            <hr/>
            <div>Test</div>
            <hr/>
        </div>
    );
}

export default App;
