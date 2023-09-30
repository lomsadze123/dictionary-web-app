import styled from "styled-components";
import play from "../assets/icon-play.svg";
const Word = () => {
  return (
    <Div>
      <article>
        <div>
          <h1>keyboard</h1>
          <p>/'ki:bɔ:d/</p>
        </div>
        <div>
          <img src={play} alt="play sound" />
        </div>
      </article>
      <WordMean>
        <h2>noun</h2>
        <hr />
      </WordMean>
    </Div>
  );
};

export default Word;

const Div = styled.div`
  margin: 2.4rem 0 3.1rem 0;
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: #2d2d2d;
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }
  p {
    color: #a445ed;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
  div img {
    max-width: 4.8rem;
    width: 100%;
    height: auto;
  }
`;

export const WordMean = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.9rem;
  hr {
    max-width: 26.6rem;
    width: 100%;
    opacity: 0.25;
  }
  h2 {
    color: #2d2d2d;
    font-size: 1.8rem;
    font-weight: 700;
    font-style: italic;
  }
`;
