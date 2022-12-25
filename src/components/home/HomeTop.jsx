import styled from "styled-components";
import topimg from "../../images/1.svg";
import { mobile } from "../../responsive";

const Top = styled.div`
  display: flex;
  margin-left: 12rem;
  margin-top: 2rem;

  ${mobile({
    marginLeft: "1rem",
    marginRight: "1rem",
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Email = styled.input`
  padding: 0.8rem;
  width: 50%;
  ${mobile({ width: "auto" })}
`;
const Password = styled.input`
  padding: 0.8rem;
  width: 50%;
  ${mobile({ width: "auto" })}
`;
const Heading = styled.h1`
  font-weight: 300;
  color: #8f5849;
  font-size: 3.5rem;

  ${mobile({ fontSize: "2.5rem" })}
`;
const ForgotPassword = styled.span`

&:hover{
    cursor: pointer;
    text-decoration: underline;
    color: #0352a1;
  }
`;
const Btn1 = styled.button`
  border: none;
  border-radius: 50px;
  padding: 1rem;
  width: 55%;
  background-color: #0768cad5;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: #044d95d5;
    transition: all;
  }

  ${mobile({ width: "auto", padding: "1rem" })}
`;
const Btn2 = styled.button`
  margin-top: 4rem;
  border: 1px solid grey;
  border-radius: 50px;
  padding: 1rem;
  max-width: 55%;
  background-color: white;
  color: rgb(71, 71, 71);
  font-weight: 500;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: rgba(179, 178, 178, 0.05);
    color: black;
    transition: all;
  }

  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  width: 50%;
  ${mobile({ width: "80%" })}
`;
const TopImage = styled.img`
  max-width: 100%;
  height: 100%;
  ${mobile({ marginTop: "4rem", marginLeft: "2rem", marginBottom: "0px" })}
`;

const HomeTop = () => {
  return (
    <>
      <Top>
        <Left>
          <Heading>Welcome to your professional community</Heading>
          <Email type="text" placeholder="Email or Phone number"></Email>
          <Password type="password" placeholder="Password"></Password>
          <ForgotPassword>Forgot password?</ForgotPassword>
          <Btn1 type="submit">Sign in</Btn1>
          <Btn2>New to LinkedIn? Join now</Btn2>
        </Left>
        <Right>
          <TopImage src={topimg} />
        </Right>
      </Top>
    </>
  );
};

export default HomeTop;
