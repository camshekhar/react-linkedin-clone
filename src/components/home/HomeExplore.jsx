import styled from "styled-components";
import explore1Img from "../../images/2.svg";
import explore2Img from "../../images/3.svg";
import { mobile } from "../../responsive";

const Explore = styled.div`
  display: flex;
  gap: 10rem;
  margin-left: 12rem;
  align-items: center;
  padding-bottom: 15rem;
  padding-top: 5rem;

  ${mobile({
    flexDirection: "column",
    marginLeft: "2rem",
    paddingTop: "1rem",
    paddingBottom: "5rem",
    gap: "3rem",
  })}
`;

const Explore1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${mobile({ gap: "1rem" })}
`;
const Explore2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-right: 12rem;

  ${mobile({ gap: "1rem", marginRight: "1rem" })}
`;
const Explore2Slct = styled.select`
  border: 1px solid rgba(168, 166, 166, 0.363);
  border-radius: 5px;
  padding: 1rem;
  width: 70%;
  background-color: transparent;
  font-size: 1.3rem;
  font-weight: 400;
  color: rgb(58, 57, 57);

  &:hover {
    cursor: pointer;
    background-color: rgba(237, 232, 232, 0.299);
  }

  ${mobile({ width: "100%", padding: "2rem", textAlign: "center" })}
`;
const ExploreImg = styled.img`
  width: 300px;
`;
const Heading = styled.h2`
  font-weight: 300;
  font-size: 3rem;
  color: rgb(39, 38, 38);

  ${mobile({ fontSize: "2rem" })}
`;
const ExploreBtn = styled.button`
  border: 2px solid gray;
  border-radius: 50px;
  padding: 1rem;
  width: 60%;
  background-color: transparent;
  font-size: 1.3rem;
  font-weight: 500;
  color: rgba(62, 61, 61, 0.881);

  &:hover {
    color: black;
    cursor: pointer;
    background-color: rgba(237, 232, 232, 0.299);
  }

  ${mobile({ width: "80%" })}
`;

const HomeExplore = () => {
  return (
    <>
      <Explore>
        <Explore1>
          <ExploreImg src={explore1Img} />
          <Heading>Connect with people who can help</Heading>
          <ExploreBtn>Find people you know</ExploreBtn>
        </Explore1>
        <Explore2>
          <ExploreImg src={explore2Img} />
          <Heading>Learn the skills you need to succeed</Heading>
          <Explore2Slct>
            <option defaultValue="Choose a topic to learn about">
              Choose a topic to learn about
            </option>
            <option value="">Career Development</option>
            <option value="">Business Development</option>
            <option value="">Finance and Accounting</option>
            <option value="">Leadership and Management</option>
            <option value="">Trainig and Education</option>
            <option value="">IT Help Desk</option>
          </Explore2Slct>
        </Explore2>
      </Explore>
    </>
  );
};

export default HomeExplore;
