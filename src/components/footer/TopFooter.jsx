import styled from "styled-components";
import { Linkedin } from "react-bootstrap-icons";
import { mobile } from "../../responsive";

const FooterTop = styled.div`
  display: flex;
  padding: 1rem;
  background-color: rgba(146, 145, 145, 0.169);
  ${mobile({ flexDirection: "column" })}
`;

const FtLogo = styled.div`
  flex: 1;
  color: #065db4;
  font-weight: 700;
  font-size: 1.4rem;
  margin-left: 11rem;
  margin-right: 5rem;

  &:hover{
    cursor: default;
  }

  ${mobile({ marginLeft: "1rem", marginBottom: "2rem", marginTop: "1rem" })}
`;
const FtCategories = styled.div`
  display: flex;
  margin-right: 15rem;
  gap: 4rem;
  ${mobile({
    flexDirection: "column",
    marginRight: "1rem",
    gap: "0.8rem",
    marginLeft: "-1.5rem",
  })}
`;
const FtCategory = styled.div`
  display: flex;
  flex-direction: column;
`;
const FtContent = styled.ul`
  list-style: none;
  margin-right: 1rem;
`;
const FtLinks = styled.li`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #044e98;
  }

  ${mobile({ fontSize: "0.8rem", fontWeight: "600", marginBottom: "10px" })}
`;
const FtHeading = styled.h4`
  margin-bottom: 5px;
  font-weight: 500;
  color: black;
  ${mobile({ marginBottom: "10px" })}
`;

const TopFooter = () => {
  return (
    <>
      <FooterTop>
        <FtLogo>
          Linked
          <Linkedin style={{ marginBottom: "-2px" }} />
          Clone
        </FtLogo>
        <FtCategories>
          <FtCategory>
            <FtContent>
              <FtHeading>General</FtHeading>
              <FtLinks>Sign Up</FtLinks>
              <FtLinks>Help Center</FtLinks>
              <FtLinks>About</FtLinks>
              <FtLinks>Press</FtLinks>
              <FtLinks>Blog</FtLinks>
              <FtLinks>Careers</FtLinks>
              <FtLinks>Developers</FtLinks>
            </FtContent>
          </FtCategory>
          <FtCategory>
            <FtContent>
              <FtHeading>Browse LinkedIn</FtHeading>
              <FtLinks>Learning</FtLinks>
              <FtLinks>Jobs</FtLinks>
              <FtLinks>Salary</FtLinks>
              <FtLinks>Mobile</FtLinks>
              <FtLinks>Services</FtLinks>
              <FtLinks>Products</FtLinks>
            </FtContent>
          </FtCategory>
          <FtCategory>
            <FtContent>
              <FtHeading>Business Solutions</FtHeading>
              <FtLinks>Talent</FtLinks>
              <FtLinks>Marketing</FtLinks>
              <FtLinks>Sales</FtLinks>
              <FtLinks>Learning</FtLinks>
            </FtContent>
          </FtCategory>
          <FtCategory>
            <FtContent>
              <FtHeading>Directories</FtHeading>
              <FtLinks>Members</FtLinks>
              <FtLinks>Jobs</FtLinks>
              <FtLinks>Companies</FtLinks>
              <FtLinks>Featured</FtLinks>
              <FtLinks>Learning</FtLinks>
              <FtLinks>Posts</FtLinks>
              <FtLinks>Articles</FtLinks>
              <FtLinks>Schools</FtLinks>
              <FtLinks>News</FtLinks>
              <FtLinks>News Letters</FtLinks>
              <FtLinks>Services</FtLinks>
              <FtLinks>Products</FtLinks>
              <FtLinks>Content Topics</FtLinks>
            </FtContent>
          </FtCategory>
        </FtCategories>
      </FooterTop>
    </>
  );
};

export default TopFooter;
