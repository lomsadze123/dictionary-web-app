import styled from "styled-components";
import { WordMean } from "./Word";
import newWindow from "../assets/icon-new-window.svg";
import { Types } from "./Meaning";
import { Fragment } from "react";

const Verbs = ({
  definitions,
  check,
  link,
}: {
  definitions: Types[];
  check: string;
  link: string[];
}) => {
  return (
    <Div>
      {definitions && (
        <>
          <WordMean className="margin">
            <h2>{check}</h2>
            <hr />
          </WordMean>
          <p>Meaning</p>
          <ul>
            {definitions.map((item, index) => (
              <Fragment key={index + 100}>
                <li key={index}>{item.definition}</li>
                <p>{item.example && `"${item.example}"`}</p>
              </Fragment>
            ))}
          </ul>
        </>
      )}
      <hr />

      <div>
        <h3>Source</h3>
        <span>
          <a href={link[0]} target="_blank" rel="noreferrer noopener">
            {link[0]}
          </a>
        </span>
      </div>
    </Div>
  );
};

export default Verbs;

const Div = styled.div`
  .margin {
    margin: 0;
  }
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
    margin: 1.3rem 0 0 0;
    font-size: 1.5rem;
  }
  hr {
    opacity: 0.25;
    margin: 3.2rem 0 0.8rem 0;
  }
  h3,
  a {
    font-size: 1.4rem;
    font-weight: 400;
    color: #757575;
    text-decoration: underline;
  }
  a {
    margin: 2.4rem 0 0.8rem 0;
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
    hr {
      margin: 3.2rem 0 2rem 0;
    }
    hr + div {
      margin-top: 0;
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
