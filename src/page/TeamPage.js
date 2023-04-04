import React from 'react'
import styled from 'styled-components';
import profileKI from './../image/지원님프로필.jpg';
import profileLEE from './../image/현진님프로필.png';
import profileCHO from './../image/지현님프로필.png';
import profileCHOI from './../image/예슬님프로필.jpg';

let TeamPageCompo = styled.div`
    margin-top: 65px;
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    ul{
        list-style: none;
        font-size: 20px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 30px;
        @media screen and (max-width: 1200px){
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gird-gap: 10px;
        }
        @media screen and (max-width: 996px){
        /* width: 100vw; */
        display: grid;
        grid-template-columns: repeat(2,1fr);
        }
        @media screen and (max-width: 704px){
        /* width: 100vw; */
        display: grid;
        grid-template-columns: repeat(1,1fr);
        }
        
    }
    li{
        width: 280px;
        height: 360px;
        /* border: 2px solid darkgrey; */
        border-radius: 20px;
        box-shadow: 3px 3px 5px darkgrey;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding-top: 10px;
    }
    .img{
        width: 100px;
        height: 100px;
        /* border: 1px solid black; */
        border-radius: 50%;
        text-align: center;
        background-size: cover;
        background-position : center;
        background-repeat: no-repeat;
        margin-bottom: 14px;
        margin-top: 20px;
    }
  
    .ki{
        background-image: url(${profileKI});
    }
    .lee{
        background-image: url(${profileLEE});
        background-size : contain;
    }
    .cho{
        background-image: url(${profileCHO});
        background-size: contain;
    }
    .choi{
        background-image: url(${profileCHOI});
    }
    p{
        font-size: 16px;
        margin-bottom : 10px;
    }
    a{
        font-size: 16px;
    }
    .name{
        font-size: 26px;
        margin-bottom: 40px;
    }
`;
function TeamPage(){
    
    return (
        <TeamPageCompo>
            <ul>
                <li>
                    <div className='img ki'></div>
                    <div className='profile'>
                        <p className='name'>기지원</p>
                        <p>담당 컴포넌트 : Team Page</p>
                        <p>Github URL : <a target="_blank" rel="noreferrer" href='https://github.com/lhj5924/UcleLupin/tree/TCTZ-11--teamPage'>'UcleLupin/TeamPage'</a></p>
                    </div>
                </li>
                <li>
                    <div className='img lee'></div>
                    <div className='profile'>
                        <p className='name'>이현진</p>
                        <p>담당 컴포넌트 : List</p>
                        <p>Github URL : <a target="_blank" rel="noreferrer" href='https://github.com/lhj5924/UcleLupin/tree/TCTZ-10--feature-list'>'UcleLupin/List'</a></p>
                    </div>
                </li>
                <li>
                    <div className='img cho'></div>
                    <div className='profile'>
                        <p className='name'>조지현</p>
                        <p>담당 컴포넌트 : Main</p>
                        <p>Github URL : <a target="_blank" rel="noreferrer" href='https://github.com/lhj5924/UcleLupin/tree/TCTZ-9--feature-main'>'UcleLupin/Main'</a></p>
                    </div>
                </li>
                <li>
                    <div className='img choi'></div>
                    <div className='profile'>
                        <p className='name'>최예슬</p>
                        <p>담당 컴포넌트 : Header&Footer</p>
                        <p>Github URL : <a target="_blank" rel="noreferrer" href='https://github.com/lhj5924/UcleLupin/tree/TCTZ-8--header-footer'>'UcleLupin/Header&Footer'</a></p>
                    </div>
                </li>
            </ul>
        </TeamPageCompo>
    )
}

export default TeamPage;