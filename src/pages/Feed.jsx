import styled from "styled-components";
import FeedFooter from "../components/feeds/FeedFooter";
import FeedHeader from "../components/feeds/FeedHeader";

const Container = styled.div`
  background-color: #f3f2ef;
  height: 100vh;
`;
const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

`;
const Right = styled.div`
  flex: 1;
`;
const Feed = () => {
  document.title = "Feed | LinkedIn Clone";
  
  return (
    <>
      <Container>
        <FeedHeader />
        <FeedContainer>
          <Left></Left>
          <Center>
            <h1>...Comming Soon...</h1>
          </Center>
          <Right></Right>
        </FeedContainer>
        <FeedFooter/>
      </Container>
    </>
  );
};

export default Feed;
