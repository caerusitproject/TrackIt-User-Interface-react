import styled from "styled-components";

export const NavbarContainer = styled.nav`
  border: 2px solid #222;
  border-radius: 3px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

export const TopTabsContainer = styled.div`
  background: #fff;
  border: 1.5px solid #dadada;
  border-radius: 6px 6px 0 0;
  padding: 7px 0 7px 10px;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const TabButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.1rem;
  font-weight: 500;
  margin-right: 17px;
  padding-bottom: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? "#f06c35" : "#c9c9c9")};
  border-bottom: ${({ active }) => (active ? "2px solid #f06c35" : "none")};

  i {
    margin-right: 6px;
  }

  &:hover {
    color: ${({ active }) => (active ? "#d95d2e" : "#a0a0a0")};
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  min-width: 80px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 1rem;
`;

export const MenuLink = styled.a`
  font-weight: 500;
  // color: #222;
  text-decoration: none;
  margin-right: 22px;

  a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    transition: color 0.2s ease;

    &.active {
      color: red;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 850px) {
    margin-right: 14px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  .bi {
    color: #1984cb;
    font-size: 1.7rem;
    margin-left: 18px;
    vertical-align: middle;

    @media (max-width: 850px) {
      font-size: 1.3rem;
      margin-left: 12px;
    }
  }
`;