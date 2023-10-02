import { Fragment } from "react";
import styled from "styled-components";
import { Li } from "./Verbs";

export interface Types {
  definition: string;
  synonyms: never[];
  antonyms: never[];
  example?: string;
}

const Meaning = ({
  definitions,
  synonyms,
  mode,
}: {
  definitions: Types[];
  synonyms: never[] | string[];
  mode: string;
}) => {
  return (
    <Div>
      <p>Meaning</p>
      <ul>
        {definitions.map((item, index) => (
          <Fragment key={index + 100}>
            <Li color={mode === "light"} key={index}>
              {item.definition}
            </Li>
            {item.example && (
              <h3 key={item.definition}>
                {item.example && `"${item.example}"`}
              </h3>
            )}
          </Fragment>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div className="margin">
          <p>Synonyms</p>
          <div>
            {synonyms.map((synonym, index) => (
              <h2 key={index}>{synonym}</h2>
            ))}
          </div>
        </div>
      )}
    </Div>
  );
};

export default Meaning;

const Div = styled.div`
  p {
    color: #757575;
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1.7rem;
  }
  ul {
    padding-left: 1.8rem;
  }
  li {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
  li::marker {
    color: #8f19e8;
  }
  li + li {
    margin-top: 1.3rem;
  }
  h2 {
    color: #a445ed;
    font-size: 1.6rem;
    font-weight: 700;
  }
  h3 {
    font-size: 1.5rem;
    color: #757575;
    margin: 1.3rem 0;
    line-height: 2.4rem;
    font-weight: 400;
  }
  div {
    display: flex;
    gap: 2.4rem;
    p {
      margin: 0;
    }
    div {
      gap: 0.5rem;
      flex-wrap: wrap;
      margin: 0;
    }
  }
  .margin {
    margin: 2rem 0 1.2rem 0;
  }

  @media (min-width: 768px) {
    p {
      font-size: 2rem;
      margin-bottom: 2.7rem;
    }
    ul {
      padding-left: 4.8rem;
    }
    li {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    div {
      gap: 4rem;
      div {
        gap: 1rem;
      }
    }
  }
  .margin {
    margin: 4.1rem 0 4rem 0;
  }
`;
