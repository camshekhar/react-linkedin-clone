import {
  BellFill,
  BriefcaseFill,
  HouseDoorFill,
  PeopleFill,
  PlusSquareFill,
} from "react-bootstrap-icons";

import styled from "styled-components";
import { mobile } from "../../responsive";

const MobileFooter = styled.div`
  display: none;
  background-color: white;
  height: 30px;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.7rem;
  overflow: hidden;
  ${mobile({ display: "flex" })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 1.5rem;
  font-size: 1.3rem;
  color: #777676e7;
  left: 0;
  margin-right: 20px;
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

const NavLinkText = styled.span`
  font-size: 0.8rem;
`;

const FeedFooter = () => {
  return (
    <>
      <nav>
        <MobileFooter>
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
              <PlusSquareFill />
              <NavLinkText>Posts</NavLinkText>
            </NavLinks>
            <NavLinks>
              <BellFill />
              <NavLinkText>Notifications</NavLinkText>
            </NavLinks>
            <NavLinks>
              <BriefcaseFill />
              <NavLinkText>Jobs</NavLinkText>
            </NavLinks>
          </Right>
        </MobileFooter>
      </nav>
    </>
  );
};

export default FeedFooter;
