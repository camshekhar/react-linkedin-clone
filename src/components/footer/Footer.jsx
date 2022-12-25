import styled from "styled-components";
import { Linkedin, ChevronDown } from "react-bootstrap-icons";
import { mobile } from "../../responsive";

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 10px;
  ${mobile({
    flexDirection: "column",
    flexWrap: "no-wrap",
    alignItems: "start",
    marginLeft: "2rem",
    paddingTop: "1rem",
  })}
`;

const FbBrand = styled.div`
  display: flex;
  color: black;
  font-weight: bold;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;

  &:hover{
    cursor: default;
  }
`;
const FbCopy = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8rem;
  margin-left: 10px;
`;
const FbLinks = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8rem;
  margin-left: 15px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #062f59;
  }

  ${mobile({ marginBottom: "10px" })}
`;
const FbLinksLang = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8rem;
  margin-left: 15px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #062f59;
  }
`;
const Footer = () => {
  return (
    <>
      <FooterBottom>
        <FbBrand>
          Linked
          <Linkedin />
          Clone
        </FbBrand>
        <FbCopy>&copy; 2022</FbCopy>
        <FbLinks>About</FbLinks>
        <FbLinks>Accessibility</FbLinks>
        <FbLinks>User Agreement</FbLinks>
        <FbLinks>Privacy Policy</FbLinks>
        <FbLinks>Cookie Policy</FbLinks>
        <FbLinks>Copyright Policy</FbLinks>
        <FbLinks>Brand Policy</FbLinks>
        <FbLinks>Guest Controls</FbLinks>
        <FbLinks>Community Guidelines</FbLinks>
        <FbLinksLang>
          Language <ChevronDown />
        </FbLinksLang>
      </FooterBottom>
    </>
  );
};

export default Footer;
