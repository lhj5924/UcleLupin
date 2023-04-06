import styled from "styled-components";
import logo from "../image/lupinclass.jpg";

const FooterContainer = styled.footer`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 7px 7px 7px 7px #00000012;
    height: 200px;
`;

const FooterText = styled.div`
    font-size: 12px;
    padding: 20px;
    text-align: left;
    line-height: 1.8;
`;

const Logo = styled.div`
    width: 150px;
    height: 45px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 30px;
`;

function Footer() {
    return (
        <FooterContainer>
            <Logo></Logo>
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
