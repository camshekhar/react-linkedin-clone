import styled from "styled-components";
import { mobile } from "../../responsive";
import { Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = styled.div`
  background-color: transparent;
  width: 100%;
  height: 80px;
  padding: 1rem;

  ${mobile({ width: "auto", height: "50px", padding: "0rem", paddingTop: "1.5rem", marginLeft: "1rem" })}
`;
const JoinNowHeader = () => {
  return (
    <>
      <Header>
        <Link to="/" className="jn-logo">
          Linked
          <Linkedin className="linkedin-icon" />
          Clone
        </Link>
      </Header>
    </>
  );
};

export default JoinNowHeader;
