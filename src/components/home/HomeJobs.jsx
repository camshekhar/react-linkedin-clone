import styled from "styled-components";
import { mobile } from "../../responsive";

const Jobs = styled.div`
  display: flex;
  padding-bottom: 2rem;
  align-items: center;

  ${mobile({ flexDirection: "column" })}
`;

const Heading = styled.h2`
  flex: 1;
  font-size: 3rem;
  font-weight: 300;
  color: black;
  margin-left: 12rem;

  ${mobile({
    marginLeft: "1rem",
    fontSize: "2rem",
    fontWeight: "400",
    marginTop: "3rem",
  })}
`;
const Content = styled.div`
  flex: 1;
  justify-content: flex-end;
  margin-top: 4rem;
  margin-right: 10rem;
  ${mobile({ marginTop: "2rem", marginLeft: "1rem", marginRight: "1rem" })}
`;

const ContentHeading = styled.h5`
  color: grey;
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 1rem;
`;
const JobsBtn = styled.button`
  margin: 4px;
  padding: 1.2rem;
  border: 2px solid rgb(129, 127, 127);
  border-radius: 50px;
  font-weight: 500;
  background-color: transparent;
  font-size: 1.2rem;
  color: rgb(71, 69, 69);

  &:hover {
    cursor: pointer;
    background-color: rgba(227, 224, 224, 0.61);
  }
`;
const MoreBtn = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  font-weight: 500;
  font-size: 1rem;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: rgba(227, 224, 224, 0.61);
  }
`;

const HomeJobs = () => {
  return (
    <>
      <Jobs>
        <Heading>Find the right job or internship for you</Heading>
        <Content>
          <ContentHeading>SUGGESTED SEARCHES</ContentHeading>
          <JobsBtn>Engineering</JobsBtn>
          <JobsBtn>Business Development</JobsBtn>
          <JobsBtn>Finance</JobsBtn>
          <JobsBtn>Administrative Assistant</JobsBtn>
          <JobsBtn>Retail Associate</JobsBtn>
          <JobsBtn>Customer Service</JobsBtn>
          <JobsBtn>Operations</JobsBtn>
          <JobsBtn>Marketing</JobsBtn>
          <JobsBtn>Human Resources</JobsBtn>
          <MoreBtn>Show more</MoreBtn>
        </Content>
      </Jobs>
    </>
  );
};

export default HomeJobs;
