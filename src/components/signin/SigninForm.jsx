import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const ErrAlert = styled.span`
  padding: 0.4rem;
  background-color: #f91010df;
  color: white;
  font-weight: 500;
  text-align: center;
  margin-bottom: 5px;
  border-radius: 50px;
`

const SigninForm = () => {

  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const loginData = {
      username: data.get('username'),
      password: data.get('password'),
    }

    if(loginData.username !== "" && loginData.password !== ""){
       if(loginData.username === localStorage.getItem('username') && loginData.password === localStorage.getItem('password')){
          navigate('/feed');
          setmessage("Login Success!");
          console.log(message);

       }
       else if(loginData.username === localStorage.getItem('username') && loginData.password !== localStorage.getItem('password')){
          setmessage("Invalid Password!");
          console.log("Invalid Password!");
       }
       else{
          setmessage("Invalid Credentials!");
          console.log("Invalid Credentials!");

       }
    }else{
      navigate('/login');
      setmessage("Please Enter Credentials!");
      console.log("Please Enter Credentials!");
    }

  }
  return (
    <>
      <Container>
        <FormContainer>
          <Heading>Sign in</Heading>
          <Message>Stay updated on your professional world</Message>
          <Form id="login-form" onSubmit={handleSubmit}>
            {message ? <ErrAlert>*** {message} ***</ErrAlert> : ""}
            <Email type="text" placeholder="Email or Phone" name="username" />
            <Password type="password" placeholder="Password" name="password" />
            <ForgotPassword>Forgot password?</ForgotPassword>
            <SiginBtn type="submit">Sign in</SiginBtn>
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
