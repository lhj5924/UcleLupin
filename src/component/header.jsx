import styled from "styled-components";
import logo from "../image/lupinclass.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import List from "./List";
import ListMobile from "./ListMobile";

const HeaderContainer = styled.div`
    background-color: #fff;
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
        color: #4b5a77;
        font-weight: 600;
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

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMModalOpen, setIsMModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const toggleMModal = () => {
        setIsMModalOpen(!isMModalOpen);
    };

    return (
        <HeaderContainer>
            <Link to="/">
                <Logo></Logo>
            </Link>
            <Nav>
                <ul>
                    <li className="list">수강 중인 코스</li>
                    <li className="list">코플릿</li>
                    <li className="list">Jobs</li>
                    <li className="desktopIcon" onClick={toggleModal}>
                        {isModalOpen ? <List /> : null}
                        <FontAwesomeIcon icon={faCircleUser} />
                    </li>
                    <li className="mobileIcon" onClick={toggleMModal}>
                        {isMModalOpen ? <ListMobile /> : null}
                        <FontAwesomeIcon icon={faBars} />
                    </li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;
