import styled from "styled-components";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 40px;
  font-family: Satoshi Regular;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }

  .logo {
    font-size: 32px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Integralcf;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 25px;
  }

  .nav-icon {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .input-wrapper {
    width: 540px;
    background-color: #f0f0f0;
    padding: 12px 16px;
    border-radius: 62px;
    display: flex;
    align-items: center;
    gap: 12px;

    input {
      border: none;
      outline: none;
      background: transparent;
      font-size: 16px;
      font-family: inherit;
    }
  }
  .mob-menu {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    z-index: 9999;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;


    transform: translateY(-20px);
    transition: all 0.8s ease; 
    opacity: 0;
    visibility: hidden;
  }
  .mob-menu.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}
.has-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
}

.arrow,.has-dropdown{
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown {
  position: absolute;
  top: 120%;
  left: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: white;
  padding: 10px 0;
  list-style: none;
  min-width: 150px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: 0.3s ease;
}

.dropdown.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
  .search {
    display: none;
  }
@media only screen and (max-width:1190px){
         ul {
    gap: 20px;
  }
}
  @media (max-width: 1160px) {
    .input-wrapper {
      display: none;
    }


    .search {
      display: block;
    }
  }

  @media (max-width: 1160px) {
    .web-menu {
      display: none;
    }
    .mob-menu{
      display: flex;
      align-items: center;
    }
           .logo {
    margin-left: 20px;
    position: relative;
  }
    .icon-wrapper svg {
  position: absolute;
  left: -22px;
  top: 12px;
  transition: all 0.6s ease;
}

.show {
  opacity: 1;
  transform: rotate(0deg);
}

.hide {
  opacity: 0;
  transform: rotate(90deg);
}
  }

`;

export const CartIcon = styled(CiShoppingCart)`
font-size: 24px;
`;
export const UserCircle = styled(FaRegUserCircle)`
font-size: 24px;
`;
export const SearchIcon = styled(IoSearch)`
font-size: 24px;
color: #00000066;
@media only screen and (max-width: 1180px){
    fill: black;
}
`;
export const HumburgIcon = styled(GiHamburgerMenu)`
font-size: 24px;
`;
export const CrossIcon = styled(RxCross1)`
font-size: 24px;
`;


