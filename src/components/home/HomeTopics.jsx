import styled from "styled-components";
import { mobile } from "../../responsive";

const Topics = styled.div`
  gap: 2rem;
  margin-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  background-color: rgb(239, 236, 236);

  ${mobile({ marginTop: "0.3rem", flexDirection: "column", gap: "0rem" })}
`;
const Heading = styled.h2`
  flex: 1;
  font-size: 3rem;
  font-weight: 300;
  color: black;
  margin-left: 12rem;
  margin-top: 4rem;
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

const TopicsBtn = styled.button`
  margin: 4px;
  padding: 1.2rem;
  border: 2px solid darkgrey;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: transparent;
  font-size: 1.2rem;
  color: rgb(71, 69, 69);

  &:hover {
    cursor: pointer;
    background-color: rgba(227, 224, 224, 0.61);
  }
`;

const Btn1 = styled.button`
  margin: 4px;
  padding: 1.2rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: transparent;
  font-size: 1.2rem;
  border: 1px solid #065db4;
  color: #065db4;

  &:hover {
    cursor: pointer;
    background-color: #b6d5f483;
  }
`;

const HomeTopics = () => {
  return (
    <>
      <Topics>
        <Heading>Explore topics you are interested in</Heading>
        <Content>
          <ContentHeading>CONTENT TOPICS</ContentHeading>
          <Btn1>See All Topics</Btn1>
          <TopicsBtn>Workplace</TopicsBtn>
          <TopicsBtn>Job Search</TopicsBtn>
          <TopicsBtn>Careers</TopicsBtn>
          <TopicsBtn>Interviewing</TopicsBtn>
          <TopicsBtn>Salary and Compensation</TopicsBtn>
          <TopicsBtn>Internships</TopicsBtn>
          <TopicsBtn>Employee Benefits</TopicsBtn>
        </Content>
      </Topics>
    </>
  );
};

export default HomeTopics;
