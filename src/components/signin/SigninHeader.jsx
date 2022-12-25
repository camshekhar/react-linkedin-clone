import styled from "styled-components";
import { mobile } from "../../responsive";
import { Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./SigninHeader.css";

const Header = styled.div`
  background-color: transparent;
  width: 100%;
  height: 40px;
  padding-top: 1.5rem;

  ${mobile({ height: "40px" })}
`;
const SigninHeader = () => {
  return (
    <>
      <Header>
        <Link to="/" className="li-logo">
          Linked
          <Linkedin className="linkedin-icon" />
          Clone
        </Link>
      </Header>
    </>
  );
};

export default SigninHeader;
