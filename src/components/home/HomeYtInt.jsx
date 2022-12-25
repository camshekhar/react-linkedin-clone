import styled from "styled-components";
import { mobile } from "../../responsive";

const Yt = styled.div`
  display: flex;
  padding-top: 10rem;
  padding-bottom: 15rem;
  align-items: center;
  background-color: rgba(237, 241, 248, 0.623);
  ${mobile({
    flexDirection: "column",
    paddingTop: "1rem",
    paddingBottom: "5rem",
  })}
`;
const Video = styled.div`
  flex: 1;
  margin-left: 12rem;
  ${mobile({ marginLeft: "0rem" })}
`;
const YtVideo = styled.iframe`
  width: 500px;
  height: 350px;

  ${mobile({ width: "100%", height: "250px", borderRadius: "20px" })}
`;

const Heading = styled.h2`
  flex: 1;
  font-size: 2.5rem;
  font-weight: 400;
  margin-left: -2rem;
  color: rgba(164, 49, 7, 0.884);

  ${mobile({ marginLeft: "2rem", marginTop: "2rem" })}
`;

const HomeYtInt = () => {
  return (
    <>
      <Yt>
        <Video>
          <YtVideo
            title="Gayatri Iyer: In it to chase my dream | #InItTogether"
            allowfullscreen=""
            src="https://www.youtube-nocookie.com/embed/IlYUUN8rL_Y?rel=0"
          />
        </Video>
        <Heading>In it to chase my dream</Heading>
      </Yt>
    </>
  );
};

export default HomeYtInt;
