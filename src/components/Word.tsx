import styled from "styled-components";

const Word = () => {
  return (
    <Div>
      <article>
        <div>
          <h1>keyboard</h1>
          <p>/'ki:bɔ:d/</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
          >
            <circle
              opacity="0.25"
              cx="37.5"
              cy="37.5"
              r="37.5"
              fill="#A445ED"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29 27V48L50 37.5L29 27Z"
              fill="#A445ED"
            />
          </svg>
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
  div svg {
    max-width: 4.8rem;
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    margin: 5rem 0 4.4rem 0;
    h1 {
      font-size: 6.4rem;
      margin-bottom: 1.1rem;
    }
    p {
      font-size: 2.4rem;
    }
    div svg {
      max-width: 7.5rem;
      cursor: pointer;
    }
    div svg:hover circle {
      opacity: 1;
    }
    div svg:hover path {
      fill: white;
    }
  }
`;

export const WordMean = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2.9rem;
  hr {
    width: 100%;
    opacity: 0.25;
  }
  h2 {
    color: #2d2d2d;
    font-size: 1.8rem;
    font-weight: 700;
    font-style: italic;
  }

  @media (min-width: 768px) {
    margin-top: 4.2rem;
    gap: 3.2rem;
    h2 {
      font-size: 2.4rem;
    }
  }
`;
