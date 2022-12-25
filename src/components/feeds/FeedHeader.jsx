import {
  Basket2Fill,
  BellFill,
  BriefcaseFill,
  CaretDownFill,
  ChatDotsFill,
  Grid3x3GapFill,
  HouseDoorFill,
  Linkedin,
  PeopleFill,
  PersonCircle,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const WebHeader = styled.div`
  display: flex;
  background-color: white;
  height: 50px;
  align-items: center;
  padding-top: 5px;
  width: 100%;
  ${mobile({ display: "none" })}
`;

const MobileHeader = styled.div`
  display: none;
  background-color: white;
  height: 45px;
  align-items: center;
  padding: 0;
  gap: 1rem;
  width: 100%;
  position: fixed;
  top: 0;

  ${mobile({ display: "flex" })}
`;

const Profile = styled.div`
  display: flex;
  color: #606060e7;
  align-items: center;
  font-size: 1.8rem;
  margin-left: 1.5rem;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12.5rem;
  flex: 1;
  gap: 8px;
`;

const Brand = styled.div`
  color: #065db4;
  font-size: 2.2rem;
`;
const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #e1ebf5b2;
  color: #f1f1edfb;
  width: 60%;
  height: 20px;
  padding: 8px;
  border-radius: 4px;
  z-index: 0;

  ${mobile({ width: "100%", backgroundColor: "#e8f1f998" })}
`;

const SearchIcon = styled.div`
  position: absolute;
  color: gray;
  margin-right: 8px;
  z-index: 1;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: bolder;

  ${mobile({ fontSize: "1rem" })}
`;
const SearchBar = styled.input`
  position: absolute;
  border: transparent;
  border-color: transparent;
  background-color: transparent;
  margin-left: 2rem;
  height: 90%;
  width: 85%;
  z-index: 1;

  ${mobile({ width: "80%", fontSize: "1rem", color: "#f1f1edbe" })}
`;

const Right = styled.div`
  display: flex;
  gap: 2.2rem;
  flex: 2;
  font-size: 1.3rem;
  color: #606060e7;

  ${mobile({
    gap: "0rem",
    flex: "none",
    color: "#777676e7",
    marginRight: "1.5rem",
  })}
`;
const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const NavLinkRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLinkRightText = styled.span`
  display: flex;
  align-items: end;
  justify-content: center;
  font-size: 0.8rem;
`;
const NavLinkText = styled.span`
  font-size: 0.8rem;
`;

const Hr = styled.hr`
  height: 50px;
  border: 0.04px solid #e1dfdf;
`;
const FeedHeader = () => {
  return (
    <>
      <nav>
        <WebHeader>
          <Left>
            <Link to="/">
              <Brand>
                <Linkedin />
              </Brand>
            </Link>
            <SearchDiv>
              <SearchIcon>
                <Search />
              </SearchIcon>
              <SearchBar placeholder="Search"></SearchBar>
            </SearchDiv>
          </Left>
          <Right>
            <NavLinks>
              <HouseDoorFill />
              <NavLinkText>Home</NavLinkText>
            </NavLinks>
            <NavLinks>
              <PeopleFill />
              <NavLinkText>My Network</NavLinkText>
            </NavLinks>
            <NavLinks>
              <BriefcaseFill />
              <NavLinkText>Jobs</NavLinkText>
            </NavLinks>
            <NavLinks>
              <ChatDotsFill />
              <NavLinkText>Messaging</NavLinkText>
            </NavLinks>
            <NavLinks>
              <BellFill />
              <NavLinkText>Notifications</NavLinkText>
            </NavLinks>

            <NavLinkRight>
              <NavLinks>
                <PersonCircle />
                <NavLinkRightText>
                  Me <CaretDownFill />
                </NavLinkRightText>
              </NavLinks>
              <Hr />
              <NavLinks>
                <Grid3x3GapFill />
                <NavLinkRightText>
                  Work <CaretDownFill />
                </NavLinkRightText>
              </NavLinks>
              <NavLinks>
                <Basket2Fill />
                <NavLinkText>Post a job for free</NavLinkText>
              </NavLinks>
            </NavLinkRight>
          </Right>
        </WebHeader>

        <MobileHeader>
          <Profile>
            <PersonCircle />
          </Profile>

          <SearchDiv>
            <SearchIcon>
              <Search />
            </SearchIcon>
            <SearchBar placeholder="Search"></SearchBar>
          </SearchDiv>
          <Right>
            <ChatDotsFill />
          </Right>
        </MobileHeader>
      </nav>
    </>
  );
};

export default FeedHeader;
