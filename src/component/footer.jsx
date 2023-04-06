import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    /* position: absolute;
    /* position: fixed;
    bottom: 0px;
    left: 0;
    right: 0; */
    padding: 5px;
    box-shadow: 7px 7px 7px 7px #00000012;
    height: 100px;
`;

const FooterText = styled.div`
    font-size: 12px;
    padding: 20px;
    text-align: left;
    line-height: 1.5;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterText>
                주식회사 코드스테이츠 | 사업자번호: 703-88-00878 | 대표자명:
                김인기 <br />
                서울특별시 서초구 서초대로 396, 강남빌딩 20층(스파크플러스 강남
                2호점)
            </FooterText>
        </FooterContainer>
    );
}

export default Footer;
