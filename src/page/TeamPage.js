import React from "react";
import styled from "styled-components";
import profileKI from '../image/ki.jpg';
import profileLEE from './../image/lee.png';
import profileCHO from './../image/cho.png';
import profileCHOI from './../image/choi.jpg';

let TeamPageCompo = styled.div`
    margin-top: 30px;
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding-top: 50px; */
    ul {
        list-style: none;
        font-size: 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
        @media screen and (max-width: 1200px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gird-gap: 10px;
        }
        @media screen and (max-width: 996px) {
            /* width: 100vw; */
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 704px) {
            /* width: 100vw; */
            margin-top: 100px;
            height: auto;
            margin-bottom: 20px;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
    }
    li {
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
        @media screen and (max-width: 1200px) {
            width: 100%;
        }
        @media screen and (max-width: 996px) {
            width: 100%;
        }
        @media screen and (max-width: 704px) {
            width: 100%;
        }
    }
    li:hover {
        background: linear-gradient(50deg, #eaafc8, #654ea3);
        font-weight: bold;
        color: #ffff;
    }
    img {
        width: 100px;
        height: 100px;
        /* border: 1px solid black; */
        border-radius: 50%;
        margin-bottom: 14px;
        margin-top: 20px;
    }

    p {
        font-size: 16px;
        margin-bottom: 10px;
    }
    p:last-of-type {
        margin-top: 30px;
    }
    a {
        font-size: 16px;
        margin-top: 30px;
    }
    .name {
        font-size: 26px;
        margin-bottom: 40px;
    }
`;
function TeamPage() {
    return (
        <TeamPageCompo>
            <ul>
                <li>
                    <img
                        src={profileKI}
                        alt="프로필"
                    />
                    <div className="profile">
                        <p className="name">기지원</p>
                        <p>담당 컴포넌트 ➤ Team Page</p>
                        <p>Github URL </p>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/lhj5924/UcleLupin/tree/TCTZ-11--teamPage"
                        >
                            🔗 UcleLupin/TeamPage
                        </a>
                    </div>
                </li>
                <li>
                    <img
                        src={profileLEE}
                        alt="프로필"
                    />
                    <div className="profile">
                        <p className="name">이현진</p>
                        <p>담당 컴포넌트 ➤ List</p>
                        <p>Github URL </p>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/lhj5924/UcleLupin/tree/TCTZ-10--feature-list"
                        >
                            🔗 UcleLupin/List
                        </a>
                    </div>
                </li>
                <li>
                    <img
                        src={profileCHO}
                        alt="프로필"
                    />
                    <div className="profile">
                        <p className="name">조지현</p>
                        <p>담당 컴포넌트 ➤ Main</p>
                        <p>Github URL </p>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/lhj5924/UcleLupin/tree/TCTZ-9--feature-main"
                        >
                            🔗 UcleLupin/Main
                        </a>
                    </div>
                </li>
                <li>
                    <img
                        src={profileCHOI}
                        alt="프로필"
                    />
                    <div className="profile">
                        <p className="name">최예슬</p>
                        <p>담당 컴포넌트 ➤ Header&Footer</p>
                        <p>Github URL</p>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/lhj5924/UcleLupin/tree/TCTZ-8--header-footer"
                        >
                            🔗 UcleLupin/Header&Footer
                        </a>
                    </div>
                </li>
            </ul>
        </TeamPageCompo>
    );
}

export default TeamPage;
