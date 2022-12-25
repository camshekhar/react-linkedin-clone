import styled from "styled-components";
import joinImg from "../../images/ft-image.jpg";
import { mobile } from "../../responsive";

const Join = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  background-image: linear-gradient(white, #0780fa6d);
  ${mobile({
    backgroundImage: "none",
    gap: "2rem",
    marginTop: "3rem",
    marginBottom: "3rem",
  })}
`;
const Heading = styled.h2`
  margin-left: 12rem;
  margin-right: 3rem;
  font-size: 3.5rem;
  font-weight: 300;

  ${mobile({ marginLeft: "2rem", fontSize: "2rem", marginRight: "1rem" })}
`;

const GSButton = styled.button`
  margin-left: 12rem;
  width: 150px;
  padding: 1rem;
  border-radius: 50px;
  background-color: #0661bd;
  border: none;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  ${mobile({ marginLeft: "2rem" })}

  &:hover{
    cursor: pointer;
    background-color: #02468a;
  }
`;

const Image = styled.img`
  margin-top: 0px;
  margin-bottom: 0px;
  ${mobile({ display: "none" })}
`;

const HomeJoin = () => {
  return (
    <>
      <Join>
        <Heading>
          Join your colleagues, classmates, and friends on LinkedIn.
        </Heading>
        <GSButton>Get started</GSButton>
        <Image src={joinImg} />
      </Join>
    </>
  );
};

export default HomeJoin;
