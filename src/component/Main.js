import { useState, useEffect } from 'react';
import contentData from '../data/contentData';
import styled from 'styled-components';

const ContentSection = styled.section`
    margin: 0 auto;
    padding: 0;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    width: 70%;
    /* height: 100vh; */

    h2 {
        text-align: left;
        margin: 30px 0px;
        font-size: 2em;
    }

    div {
        width: 100%;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
        font-size: 1.6em;
        text-align: left;
        margin-bottom: 30px;
    }
    @media screen and (max-width: 1000px) {
        width: 80%;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
    }
`;

const ContentList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-grow: 1;

    img {
        width: 100%;
        height: 180px;
        margin-bottom: 10px;
        border-radius : 10px;
    }

    span {
        display: block;
        text-align: left;
        font-size :1.8em;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 1000px) {
        justify-content: space-around;
    }

    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`;

const ContentItem = styled.li`
    width: calc(33.33% - 20px);
    margin-bottom: 50px;
    /* min-width: 250px; */

    @media screen and (max-width: 1000px) {
        width: calc(50% - 10px);
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

function Main() {
    const [content, setContent] = useState(contentData);

    

    return (
        <ContentSection>
            <h2>Into your course</h2>
            <div>✨ 프로젝트 힘내보아요~ </div>
            <h2>Magazine</h2>
            <ContentList>
                {content.map((item, index) => (
                    <ContentItem key={index}>
                        <a href={item.link}>
                            <img src={item.image} alt={item.title} />
                            <span>{item.title}</span>
                        </a>
                    </ContentItem>
                ))}
            </ContentList>
        </ContentSection>
    );
}

export default Main;