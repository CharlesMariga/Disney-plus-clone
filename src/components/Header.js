import React from "react";
import styled from "styled-components";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
} from "../features/user/userSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {};

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src="/images/home-icon.svg" alt="" />
              <span>Home</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="" />
              <span>Search</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>Watchlist</span>
            </a>
            <a href="/orignials">
              <img src="/images/original-icon.svg" alt="" />
              <span>Originals</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="" />
              <span>Movies</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="" />
              <span>Series</span>
            </a>
          </NavMenu>
          <UserImg src="/images/avater.jpg" />
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: inherit;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background-color: white;
        width: 0px;
        position: absolute;
        left: 0;
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        bottom: -6px;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

const Login = styled.button`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  color: inherit;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export default Header;
