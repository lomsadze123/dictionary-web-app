import styled from "styled-components";

const Meaning = () => {
  return (
    <Div>
      <p>Meaning</p>
      <ul>
        <li>
          (etc.) A set of keys used to operate a typewriter, computer etc.
        </li>
        <li>
          A component of many instruments including the piano, organ, and
          harpsichord consisting of usually black and white keys that cause
          different tones to be produced when struck.
        </li>
        <li>
          A device with keys of a musical keyboard, used to control electronic
          sound-producing devices which may be built into or separate from the
          keyboard device.
        </li>
      </ul>
      <div>
        <p>Synonyms</p>
        <h2>electronic keyboard</h2>
      </div>
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
    color: #2d2d2d;
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
  div {
    display: flex;
    gap: 2.4rem;
    margin-top: 2rem;
    p {
      margin: 0;
    }
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
    div {
      margin-top: 4.1rem;
      gap: 4rem;
    }
  }
`;
