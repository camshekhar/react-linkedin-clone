import styled from "styled-components";
import statusImg from "../../images/5.png";
import { mobile } from "../../responsive";

const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 10rem;
  gap: 4rem;
  ${mobile({ flexDirection: "column-reverse", gap: "1rem" })}
`;
const Content = styled.div`
  flex: 1;
  flex-direction: column;
  margin-left: 12rem;
  ${mobile({ marginLeft: "2rem", marginRight: "1rem" })}
`;
const Heading = styled.h2`
  color: rgba(166, 60, 21, 0.646);
  font-size: 3rem;
  font-weight: 400;

  ${mobile({ fontSize: "1.7rem" })}
`;
const Desc = styled.p`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 300;
  color: #c2c2c2;

  ${mobile({ fontSize: "1.5rem" })}
`;
const Image = styled.img`
  flex: 1;
  width: 25%;
  margin-top: 2rem;
  margin-right: 15rem;

  ${mobile({
    flex: "1",
    marginTop: "1rem",
    width: "90%",
    marginRight: "2rem",
    marginLeft: "2rem",
  })}
`;

const HomeStatus = () => {
  return (
    <>
      <Status>
        <Content>
          <Heading>Let the right people know you’re open to work</Heading>
          <Desc>
            With the Open To Work feature, you can privately tell recruiters or
            publicly share with the LinkedIn community that you are looking for
            new job opportunities.
          </Desc>
        </Content>
        <Image src={statusImg} />
      </Status>
    </>
  );
};

export default HomeStatus;
