import styled from "styled-components";
import { WordMean } from "./Word";
import newWindow from "../assets/icon-new-window.svg";

const Verbs = () => {
  return (
    <Div>
      <WordMean>
        <h2>verb</h2>
        <hr />
      </WordMean>
      <p>Meaning</p>
      <ul>
        <li>To type on a computer keyboard.</li>
        <p>“Keyboarding is the part of this job I hate the most.”</p>
      </ul>
      <hr />
      <div>
        <h3>Source</h3>
        <span>
          <a
            href="https://en.wiktionary.org/wiki/keyboard"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://en.wiktionary.org/wiki/keyboard
          </a>
        </span>
      </div>
    </Div>
  );
};

export default Verbs;

const Div = styled.div`
  margin: 0 0 8.5rem 0;
  p {
    font-size: 1.6rem;
    color: #757575;
    font-weight: 400;
    margin: 3.1rem 0 1.7rem 0;
  }
  ul {
    padding-left: 2rem;
  }
  li::marker {
    color: #8f19e8;
  }
  li,
  ul p {
    color: #2d2d2d;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
  ul p {
    color: #757575;
    margin: 1.3rem 0 3.2rem 0;
    font-size: 1.5rem;
  }
  hr {
    opacity: 0.25;
  }
  h3,
  a {
    font-size: 1.4rem;
    font-weight: 400;
    color: #757575;
    text-decoration: underline;
    margin: 2.4rem 0 0.8rem 0;
  }
  a {
    color: #2d2d2d;
    margin: 0;
  }
  span::after {
    content: "ㅤ";
    background: url(${newWindow}) no-repeat center;
    background-size: 1.4rem;
    margin-left: 0.6rem;
    padding: 0.5rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 2rem;
      margin: 4.4rem 0 2.7rem 0;
    }
    li,
    ul p {
      font-size: 1.8rem;
    }
    ul {
      padding-left: 4.8rem;
    }
    hr + div {
      margin-top: 2.1rem;
      display: flex;
      align-items: center;
      gap: 2.5rem;
      a,
      h3 {
        text-decoration: none;
      }
      h3 {
        margin: 0;
      }
    }
    span::after {
      background-size: 1.6rem;
    }
  }
`;
