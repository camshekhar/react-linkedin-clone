import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BriefcaseFill,
  CollectionPlay,
  GlobeAsiaAustralia,
  Linkedin,
  PeopleFill,
} from "react-bootstrap-icons";
import "./Navbar.css";
import { mobile } from "../../responsive";
const Nav = styled.div`
  background-color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;

  ${mobile({ height: "60px", paddingTop: "2px" })}
`;
const NavLink = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 8px;
  gap: 2rem;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
  font-size: 1rem;
  font-family: Helvetica, sans-serif;

  &:hover {
    color: rgb(0, 0, 0, 0.9);
  }

  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;

  ${mobile({ marginRight: "1rem" })}
`;

const Hr = styled.hr`
  margin-top: 10px;
  margin-right: 0;
  margin-left: 2px;
  height: 60%;

  ${mobile({ display: "none" })}
`;
const JoinBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  border: none;
  border-radius: 2.5rem;
  font-size: 1rem;
  height: 50px;
  width: 120px;
  font-weight: 500;

  &:hover {
    background-color: rgba(216, 206, 206, 0.34);
    cursor: pointer;
  }
`;

const SigninBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  border-radius: 2.5rem;
  font-size: 1rem;
  width: 100px;
  height: 50px;
  color: #065db4;
  font-weight: 500;
  border: 1.5px solid #065db4;

  &:hover {
    background-color: #bfdbf75f;
    cursor: pointer;
  }
`;
const Navbar = () => {
  return (
    <>
      <header>
        <Nav>
          <Link to="/" className="logo">
            Linked
            <Linkedin className="linkedin-icon"/>
             Clone
          </Link>
          <NavLink>
            <Left>
              <Link className="discover">
                <GlobeAsiaAustralia style={{ fontSize: "1.3rem" }} />
                Discover
              </Link>
              <Link className="people">
                <PeopleFill style={{ fontSize: "1.3rem" }} />
                People
              </Link>
              <Link className="learning">
                <CollectionPlay style={{ fontSize: "1.3rem" }} />
                Learning
              </Link>
              <Link className="job">
                <BriefcaseFill style={{ fontSize: "1.3rem" }} />
                Jobs
              </Link>
            </Left>
            <Right>
              <Hr />
              <Link to="/signup">
                <JoinBtn>Join now</JoinBtn>
              </Link>
              <Link to="/login">
                <SigninBtn>Sign in</SigninBtn>
              </Link>
            </Right>
          </NavLink>
        </Nav>
      </header>
    </>
  );
};

export default Navbar;
