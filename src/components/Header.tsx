import styled from "styled-components";
import logo from "../assets/logo.svg";
import arrow from "../assets/icon-arrow-down.svg";
import { useState } from "react";

const Header = ({
  handleSwitch,
  mode,
}: {
  handleSwitch: () => void;
  mode: string;
}) => {
  const [hide, setHide] = useState(false);
  // const [font,setFont] = useState('Sans Serif');

  return (
    <HeaderContainer>
      <img src={logo} alt="book logo" />
      <article>
        <div onClick={() => setHide(!hide)} className="relative">
          <Button color={mode === "light"}>Sans Serif</Button>
          {hide && (
            <DivAbsolute color={mode === "light"}>
              <H2 color={mode === "light"}>Sans Serif</H2>
              <H2 color={mode === "light"}>Serif</H2>
              <H2 color={mode === "light"}>Mono</H2>
            </DivAbsolute>
          )}
        </div>
        <span></span>
        <svg
          onClick={handleSwitch}
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="22"
          viewBox="0 0 73 22"
          fill="none"
        >
          <rect
            y="1"
            width="40"
            height="20"
            rx="10"
            fill={mode === "light" ? "#757575" : "#A445ED"}
          />
          <circle
            cx={mode === "light" ? "10" : "30"}
            cy="11"
            r="7"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52 10.449C51.9985 12.8283 52.8017 15.1383 54.2791 17.0033C55.7566 18.8683 57.8214 20.1788 60.138 20.7218C62.4545 21.2647 64.8866 21.0082 67.039 19.994C69.1912 18.9797 70.9373 17.2673 71.9931 15.1352C62.5442 15.1352 57.858 10.4479 57.858 1C56.0984 1.87311 54.6177 3.22033 53.5827 4.88981C52.5476 6.5593 51.9995 8.48469 52 10.449Z"
            stroke={mode === "light" ? "#757575" : "#A445ED"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </article>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  margin: 2.4rem 0;
  width: 100%;
  justify-content: space-between;
  svg circle {
    transition: cx 0.3s ease;
  }
  &,
  article {
    align-items: center;
    display: flex;
  }
  img {
    max-width: 2.8055rem;
    width: 100%;
    height: auto;
  }
  .relative::after {
    content: "ㅤ";
    background: url(${arrow}) no-repeat center;
    background-size: 1.6rem;
    margin-left: 1rem;
    padding: 0.5rem;
  }
  button,
  h2 {
    border: 0;
    background-color: transparent;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.4rem;
  }
  span {
    display: block;
    margin: 0 1.6rem;
    width: 0.1rem;
    height: 3.2rem;
    background-color: #e9e9e9;
  }
  .relative {
    position: relative;
  }
  .relative div {
    position: absolute;
    top: 3.5rem;
    right: 0;
    padding: 1.5rem;
    z-index: 2;
    border-radius: 1.6rem;
  }

  @media (min-width: 768px) {
    margin: 5.8rem 0 5.15rem 0;
    img {
      max-width: 3.2rem;
    }
    button,
    h2 {
      font-size: 1.8rem;
    }
    div,
    button,
    svg {
      cursor: pointer;
    }
    svg:hover rect {
      fill: #a445ed;
    }
    .relative div {
      padding: 2.4rem;
      width: 18.3rem;
      right: 1rem;
      top: 4rem;
    }
    h2 + h2 {
      margin-top: 1.5rem;
    }
    h2:hover {
      color: #a445ed;
    }
  }
`;

const Button = styled.button<{ color: boolean }>`
  color: ${(props) => (props.color ? "#2d2d2d" : "#FFF")};
`;
const H2 = styled(Button).attrs({ as: "h2" })<{ color: boolean }>``;
const DivAbsolute = styled.div<{ color: boolean }>`
  box-shadow: ${(props) =>
    props.color
      ? "0px 5px 30px 0px rgba(0, 0, 0, 0.1)"
      : "0px 5px 30px 0px #A445ED"};
  background-color: ${(props) => (props.color ? "#FFF" : "#1F1F1F")};
`;
