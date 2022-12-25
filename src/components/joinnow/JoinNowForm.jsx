import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-weight: 400;

  ${mobile({ display: "none" })}
`;
const HeadingM = styled.h1`
  display: none;
  font-weight: 500;
  
  ${mobile({ display: "inline", fontSize: "1.5rem" })}
`;
const FormContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  height: 350px;

  ${mobile({ width: "90%", height: "auto", marginTop: "0.8rem", flexDirection: "column" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem;

  ${mobile({ width: "100%", margin: "0px", marginTop: "1rem" })}
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: gray;
`;
const Email = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid gray;
  border-radius: 2px;
  margin-bottom: 1rem;

  ${mobile({ borderRadius: "4px", height: "28px" })}
`;
const Password = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid gray;
  border-radius: 2px;

  ${mobile({ borderRadius: "4px", height: "28px" })}
`;
const Agreement = styled.span`
  margin-top: 1rem;
  text-align: center;
  color: gray;
  font-size: 0.8rem;

  ${mobile({ display: "none" })}
`;

const JoinBtn = styled.button`
  background-color: #065db4eb;
  margin-top: 1rem;
  border: none;
  padding: 0.8rem;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;

  ${mobile({ display: "none" })}

  &:hover{
    cursor: pointer;
    background-color: #033c76eb;
  }
`;
const Continue = styled.button`
  display: none;
  background-color: #065db4eb;
  margin-top: 1.5rem;
  border: none;
  padding: 0.8rem;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  width: 100%;

  ${mobile({ display: "inline" })}
`;
const LoginSection = styled.span`
  margin-top: 1rem;
  text-align: center;

  ${mobile({ fontSize: "0.9rem" })}
`;

const BusinessPage = styled.span`
  margin-top: 1rem;

  ${mobile({ fontSize: "0.9rem", marginTop: "2.5rem" })}
`;
const Hr = styled.hr`
  ${mobile({ display: "none" })}
`;
const Links = styled.span`
  text-decoration: none;
  font-weight: 600;
  color: #065db4eb;

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
const JoinNowForm = () => {
  
  const [message, setmessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
      e.preventDefault();

      const data = new FormData(e.currentTarget);

      const actualData = {
        username: data.get('username'),
        password: data.get('password'),
      }

      if(actualData.username !== "" && actualData.password !== ""){
        if(actualData.username !== localStorage.getItem('username')){
            localStorage.setItem("username", actualData.username);
            localStorage.setItem("password", actualData.password);
            navigate('/login');
            setmessage("Successfully Registered!");
            
        }else{
            document.getElementById('registration-form').reset();
            setmessage("This User Already Exists!");
            navigate('/signup')
           
        }
      }else{
        setmessage("Kindly Enter Details to proceed!");
        navigate('/signup')
        console.log(message);    
    }

      
  }

  return (
    <>
      <Container>
        <Heading>Make the most of your professional life</Heading>
        <FormContainer>
        <HeadingM>Join LinkedIn now - it's free!</HeadingM>

          <Form id="registration-form" onSubmit={handleSubmit}>
            {message ? <ErrAlert>*** {message} ***</ErrAlert> : ""}
            <Label>Email or phone number</Label>
            <Email type="text" name="username" />
            <Label>Password (6 or more characters)</Label>
            <Password type="password" name="password" />
            <Agreement>
              By clicking Agree & join, you agree to the LinkedIn User
              Agreement, Privacy Policy, and Cookie Policy.
            </Agreement>
            <JoinBtn type="submit">Agree & Join</JoinBtn>
            <Continue type="submit">Continue</Continue>
            <Hr />
            <LoginSection>
              Already on LinkedIn?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Links>Sign in</Links>
              </Link>
            </LoginSection>
          </Form>
        </FormContainer>
        <BusinessPage>
          Looking to create a page for a business? <Links>Get Help</Links>
        </BusinessPage>
      </Container>
    </>
  );
};

export default JoinNowForm;
