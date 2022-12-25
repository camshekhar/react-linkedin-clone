import SigninForm from "../components/signin/SigninForm";
import SigninHeader from "../components/signin/SigninHeader";
import Footer from "../components/signin/Footer";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #f4f4f4;

  ${mobile({ backgroundColor: "white"})}
`;
const SignIn = () => {
  document.title = "LinkedIn Clone Login, Sign in | LinkendIn Clone";
  return (
    <>
      <Container>
        <SigninHeader />
        <SigninForm />
        <Footer />
      </Container>
    </>
  );
};

export default SignIn;
