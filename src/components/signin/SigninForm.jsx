import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mobile({ alignItems: "start" })}
`;

const Heading = styled.h1`
  font-weight: 500;

  ${mobile({ fontSize: "1.8rem", fontWeight: "600" })}
`;
const Message = styled.span`
  margin-top: 0.2rem;
  ${mobile({ fontSize: "0.8rem" })}
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  background-color: white;
  border-radius: 10px;
  width: 300px;
  height: 450px;
  padding: 1.5rem;
  margin-bottom: 6rem;
  box-shadow: 5px 5px 5px 5px #eae9e9da;
  ${mobile({
    boxShadow: "none",
    width: "80%",
    height: "auto",
    marginTop: "0.8rem",
    marginRight: "2rem",
    marginBottom: "0rem",
    marginLeft: "0.5rem",
  })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 1.5rem;

  ${mobile({ width: "100%", margin: "0px", marginTop: "1rem" })}
`;

const Email = styled.input`
  width: 90%;
  height: 25px;
  border: 1px solid gray;
  border-radius: 3px;
  margin-bottom: 1.5rem;
  padding: 0.7rem;
  font-size: 1.2rem;

  ${mobile({ borderRadius: "4px", height: "28px", width: "auto"})}
`;
const Password = styled.input`
  width: 90%;
  height: 25px;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 0.7rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  ${mobile({ borderRadius: "4px", height: "28px", width: "auto"})}
`;
const ForgotPassword = styled.span`
  color: #065db4eb;
  font-weight: 500;

  &:hover{
    cursor: pointer;
    background-color: #a6d0f9c4;
    border-radius: 20px;
    width: 50%;
    text-decoration: underline;
    padding: 2px;
    text-align: center;
  }
`;

const SiginBtn = styled.button`
  background-color: #065db4eb;
  margin-top: 1.5rem;
  border: none;
  padding: 1rem;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  width: 100%;

  &:hover{
    cursor: pointer;
    background-color: #033c76eb;
  }



`;
const Hr = styled.hr`
  margin-top: 1rem;
  border: 0.5px solid lightgray;
`;
const SignupSection = styled.span`
  margin-top: 2.5rem;
  text-align: center;
`;

const Links = styled.span`
  text-decoration: none;
  font-weight: 600;
  color: #03478b;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const SigninForm = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <Heading>Sign in</Heading>
          <Message>Stay updated on your professional world</Message>
          <Form>
            <Email type="text" placeholder="Email or Phone" />
            <Password type="password" placeholder="Password" />
            <ForgotPassword>Forgot password?</ForgotPassword>
            <Link to="/feed"><SiginBtn>Sign in</SiginBtn></Link>
            <Hr />
            <SignupSection>
              New to LinkedIn?{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Links>Join Now</Links>
              </Link>
            </SignupSection>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default SigninForm;
