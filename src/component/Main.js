import { useState, useEffect } from 'react';
import contentData from '../data/contentData';
import styled from 'styled-components';

const ContentSection = styled.section`
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100vh;

    h2 {
        text-align: left;
        margin-bottom: 10px;
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;

        if (windowHeight + scrollTop === documentHeight) {
            // 스크롤이 맨 아래에 도달했을 때 새로운 데이터를 가져옴
            const newData = [...contentData];
            setContent([...content, ...newData]);
        }
    };

    return (
        <ContentSection>
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