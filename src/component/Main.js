import { useState, useEffect } from "react";
import contentData from "../data/contentData";
import styled from "styled-components";

const ContentSection = styled.section`
  margin: 0 auto;
  padding: 0;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  width: 75%;
  /* height: 100vh; */

  h2 {
    text-align: left;
    margin: 20px 0px;
    font-size: 20px;
    color: rgb(69, 85, 115);
  }

  div {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(242, 244, 247);
    border-radius: 12px;
    padding: 20px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 20%) 2px 2px 10px;
    font-size: 1em;
    text-align: left;
    margin-bottom: 50px;
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
    height: 200px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  span {
    display: block;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    color: rgb(69, 85, 115);
    margin-bottom: 10px;
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
  const [visibleContent, setVisibleContent] = useState(content.slice(0, 12));

  

  return (
    <ContentSection>
      <h2>Into your course</h2>
      <div>✨ 프로젝트 힘내보아요~ </div>
      <h2>Magazine</h2>
      <ContentList>
        {visibleContent.map((item, index) => (
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
