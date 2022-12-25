import Footer from "../components/joinnow/Footer";
import JoinNowForm from "../components/joinnow/JoinNowForm";
import JoinNowHeader from "../components/joinnow/JoinNowHeader";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #f3f2ef;
  padding-bottom: 8rem;

  ${mobile({ backgroundColor: "white" })}
`;
const JoinNow = () => {
  document.title = "Sign Up | LinkedIn Clone";

  return (
    <>
      <Container>
        <JoinNowHeader />
        <JoinNowForm />
      </Container>
      <Footer />
    </>
  );
};

export default JoinNow;
