import HomeTop from "../components/home/HomeTop";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import HomeTopics from "../components/home/HomeTopics";
import HomeJobs from "../components/home/HomeJobs";
import HomePostJob from "../components/home/HomePostJob";
import HomeStatus from "../components/home/HomeStatus";
import HomeExplore from "../components/home/HomeExplore";
import HomeYtInt from "../components/home/HomeYtInt";
import HomeJoin from "../components/home/HomeJoin";
import Footer from "../components/footer/Footer";
import TopFooter from "../components/footer/TopFooter";

const Sections = styled.div`
  gap: 1rem;
`;

const Home = () => {
  document.title = "LinkedIn Clone: Log In or Sign Up";
  return (
    <>
      <Navbar />
      <main>
        <HomeTop />
        <Sections>
          <HomeTopics />
          <HomeJobs />
          <HomePostJob />
          <HomeStatus />
          <HomeExplore />
          <HomeYtInt />
          <HomeJoin />
        </Sections>
      </main>
      <footer>
        <TopFooter />
        <Footer />
      </footer>
    </>
  );
};

export default Home;
