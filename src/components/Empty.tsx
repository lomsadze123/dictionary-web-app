import styled from "styled-components";
import ops from "../assets/ops.svg";
import { H2 } from "./Word";

const Empty = ({ mode }: { mode: string }) => {
  return (
    <Div>
      <img src={ops} alt="Error icon" />
      <H2 color={mode === "light"}>No Definitions Found</H2>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </Div>
  );
};

export default Empty;

const Div = styled.div`
  text-align: center;
  margin-top: 7rem;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 3rem 0 2.5rem;
  }
  p {
    color: #757575;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
`;
