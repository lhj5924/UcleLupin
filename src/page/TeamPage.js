import React from 'react'
import styled from 'styled-components';

let 팀페이지 = styled.div`
    width: 100vw;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 40px;
    }
    li{
        width: 280px;
        height: 270px;
        border: 2px solid darkgrey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
    .img{
        width: 60px;
        height: 60px;
        border: 1px solid black;
        border-radius: 50%;
        text-align: center;
        background-color: aliceblue;
    }
`;
function TeamPage(){
    
    return (
        <팀페이지>
            <ul>
                <li>
                    <div className='img'></div>
                    <p>기지원</p>
                    <a href='/'><p>깃헙 주소</p></a>
                </li>
                <li>
                    <div className='img'></div>
                    <p>팀원 2</p>
                    <a href='/'><p>깃헙 주소</p></a>
                </li>
                <li>
                    <div className='img'></div>
                    <p>팀원 3</p>
                    <a href='/'><p>깃헙 주소</p></a>
                </li>
                <li>
                    <div className='img'></div>
                    <p>팀원 4</p>
                    <a href='/'><p>깃헙 주소</p></a>
                </li>
            </ul>
        </팀페이지>
    )
}

export default TeamPage;