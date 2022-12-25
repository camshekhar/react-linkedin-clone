import styled from "styled-components";
import { mobile } from "../../responsive";

const PostJob = styled.div`
  display: flex;
  padding-top: 4rem;
  padding-bottom: 5rem;
  gap: 4rem;
  align-items: center;
  background-color: rgba(242, 228, 228, 0.751);
  ${mobile({ display: "none" })}
`;

const Heading = styled.h2`
  flex: 1;
  margin-left: 12rem;
  font-size: 3rem;
  font-weight: 400;
  color: rgba(161, 50, 9, 0.824);
  align-items: center;
`;
const PostJobBtn = styled.button`
  flex: 2;
  border: 2px solid #065db4;
  color: #065db4;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  max-width: 200px;
  max-height: 70px;
  margin-right: 40rem;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #b6d5f483;
  }
`;

const HomePostJob = () => {
  return (
    <>
      <PostJob>
        <Heading>Post your job for millions of people to see</Heading>
        <PostJobBtn>Post a job</PostJobBtn>
      </PostJob>
    </>
  );
};

export default HomePostJob;
