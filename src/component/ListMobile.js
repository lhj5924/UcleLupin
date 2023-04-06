import styled from "styled-components";
import { Link } from "react-router-dom";

// 모바일 버전 리스트

const ListBox = styled.ul`
  position: absolute;
  top: 65px;
  left:0;
  width: 100vw;
  font-size: 24px;
  background-color: #FFF;
  color : gray;
  box-shadow: 0px 8px 6px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  border-radius: 5px;
  z-index:1;
`
const HyperLink = styled.a`
  width : 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const StyledLi = styled.li`
  padding: 8px 24px;
  margin: 0px 5px;
  line-height: 40px;
  background-color: none;

   :hover {
    background-color: rgba(0,0,0,0.085);
  }
`
const StyledSvg = styled.svg`
  margin: 0 24px 0 0;
`



export default function ListMobile(){


  return (
    <>
    <ListBox>
    <StyledLi>
          <HyperLink href="https://urclass.codestates.com/courses/active" title="수강 중인 코스">
          <StyledSvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ico__menu--mobile"><path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="#455573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="#455573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </StyledSvg>
          <div>수강 중인 코스</div>
          </HyperLink></StyledLi>
          <StyledLi>
          <HyperLink href="https://urclass.codestates.com/classrooms" title="코플릿">
          <StyledSvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ico__menu--mobile"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L16.7071 18.7071C16.3166 19.0976 15.6834 19.0976 15.2929 18.7071C14.9024 18.3166 14.9024 17.6834 15.2929 17.2929L20.5858 12L15.2929 6.70711C14.9024 6.31658 14.9024 5.68342 15.2929 5.29289Z" fill="#455573"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 5.29289C9.09763 5.68342 9.09763 6.31658 8.70711 6.70711L3.41421 12L8.70711 17.2929C9.09763 17.6834 9.09763 18.3166 8.70711 18.7071C8.31658 19.0976 7.68342 19.0976 7.29289 18.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929L7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289Z" fill="#455573"></path>
          </StyledSvg>
          <div>코플릿</div>
          </HyperLink></StyledLi>
          <StyledLi>
          <HyperLink href="https://urclass.codestates.com/jobs/new" title="Jobs">
          <StyledSvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ico__menu--mobile"><path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#455573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#455573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </StyledSvg>
          <div>Jobs</div>
          </HyperLink></StyledLi>
        <StyledLi>
          <HyperLink href="https://help-urclass-codestates.zendesk.com/hc/ko" title="수강생 헬프센터">
          <StyledSvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ico__menu--link">
            <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="#455573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="#455573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </StyledSvg>
          <div>수강생 헬프센터</div>
          </HyperLink></StyledLi>
        <StyledLi>
        <Link to="/teampage" title="팀 페이지">
          {/* <HyperLink href="/" title="팀 페이지"> */}
            <StyledSvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ico__menu-Link">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.46447 15.4645C5.40215 14.5268 6.67392 14 8 14H16C17.3261 14 18.5979 14.5268 19.5355 15.4645C20.4732 16.4021 21 17.6739 21 19V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V19C19 18.2044 18.6839 17.4413 18.1213 16.8787C17.5587 16.3161 16.7956 16 16 16H8C7.20435 16 6.44129 16.3161 5.87868 16.8787C5.31607 17.4413 5 18.2044 5 19V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V19C3 17.6739 3.52678 16.4021 4.46447 15.4645Z" fill="#455573"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="#455573"></path>
            </StyledSvg>
          <div>팀 페이지</div>
          {/* </HyperLink> */}
          </Link>
        </StyledLi>
        <StyledLi>
          <HyperLink href="/" title="로그아웃">
            <StyledSvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ico__menu-Link"><path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#455573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 17L21 12L16 7" stroke="#455573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 12H9" stroke="#455573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </StyledSvg>
          <div>로그아웃</div>
          </HyperLink>
        </StyledLi>
    </ListBox>
    </>
  )
}