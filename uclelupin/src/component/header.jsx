import styled from "styled-components";
import logo from "../image/lupinclass.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 5px;
    box-shadow: 2px 4px 7px 1px #00000012;
`;

const Logo = styled.div`
    width: 150px;
    height: 55px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        @media (max-width: 992px) {
            display: none;
        }
    }

    li {
        margin-right: 40px;
        &:hover {
            background-color: rgba(0, 0, 0, 0.2);
            cursor: pointer;
        }
    }
    .icon {
        font-size: 20pt;
        @media (max-width: 992px) {
            display: none;
        }
    }
    .mobileIcon {
        display: none;
        @media (max-width: 992px) {
            display: block;
            font-size: 20pt;
        }
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <Nav>
                <ul>
                    <li>수강 중인 코스</li>
                    <li>코플릿</li>
                    <li className="icon">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </li>
                    <li className="mobileIcon">
                        <FontAwesomeIcon icon={faBars} />
                    </li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;
