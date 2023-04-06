import styled from "styled-components";
import logo from "../image/lupinclass.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from 'react-router-dom';


const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 5px;
    box-shadow: 7px 7px 7px 7px #00000012;
`;

const Logo = styled.div`
    width: 150px;
    height: 55px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 10px;
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        align-items: center;
    }
    .list {
        @media (max-width: 992px) {
            display: none;
        }
    }

    li {
        font-size: 10pt;
        margin-right: 30px;
        &:hover {
            background-color: rgba(0, 0, 0, 0.2);
            cursor: pointer;
        }
    }
    .desktopIcon {
        font-size: 20pt;
        @media (max-width: 992px) {
            display: none;
        }
    }
    .mobileIcon {
        font-size: 20pt;
        @media (min-width: 993px) {
            display: none;
        }
    }
`;

const ModalContainer = styled.div`
    position: absolute;
    top: 60px;
    right: 10px;
    width: 200px;
    height: 200px;
    background-color: white;
    box-shadow: 2px 4px 7px 1px #00000032;
    border-radius: 5px;
`;

const ModalContent = styled.div`
    padding: 15px;
    font-size: 20pt;
    div {
        height: 50px;
        font-size: 11pt;
    }
`;

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <HeaderContainer>
            <Link to={'/'}>
                <Logo></Logo>
            </Link>
            <Nav>
                <ul>
                    <li className="list">수강 중인 코스</li>
                    <li className="list">코플릿</li>
                    <li className="list">Jobs</li>
                    <Link to={'/teampage'}>
                        <li
                            className="desktopIcon"
                            onMouseEnter={() => setIsModalOpen(true)}
                            onMouseLeave={() => setIsModalOpen(false)}
                        >
                            <FontAwesomeIcon icon={faCircleUser} />
                        </li>
                    </Link>
                    <li className="mobileIcon">
                        <FontAwesomeIcon icon={faBars} />
                    </li>
                </ul>
            </Nav>
            {isModalOpen && <Modal />}
        </HeaderContainer>
    );
}

const Modal = () => {
    return (
        <ModalContainer>
            <ModalContent>
                <div>OOO님, 안녕하세요!</div>
                <div>수강생 헬프센터</div>
                <div>마이페이지</div>
                <div>로그아웃</div>
            </ModalContent>
        </ModalContainer>
    );
};

export default Header;
