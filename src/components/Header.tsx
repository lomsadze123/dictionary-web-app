import styled from "styled-components";
import logo from "../assets/logo.svg";
import arrow from "../assets/icon-arrow-down.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="book logo" />
      <article>
        <div>
          <button>Sans Serif</button>
        </div>
        <span></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="22"
          viewBox="0 0 73 22"
          fill="none"
        >
          <rect y="1" width="40" height="20" rx="10" fill="#757575" />
          <circle cx="10" cy="11" r="7" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52 10.449C51.9985 12.8283 52.8017 15.1383 54.2791 17.0033C55.7566 18.8683 57.8214 20.1788 60.138 20.7218C62.4545 21.2647 64.8866 21.0082 67.039 19.994C69.1912 18.9797 70.9373 17.2673 71.9931 15.1352C62.5442 15.1352 57.858 10.4479 57.858 1C56.0984 1.87311 54.6177 3.22033 53.5827 4.88981C52.5476 6.5593 51.9995 8.48469 52 10.449Z"
            stroke="#757575"
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
  div::after {
    content: "ㅤ";
    background: url(${arrow}) no-repeat center;
    background-size: 1.6rem;
    margin-left: 1rem;
    padding: 0.5rem;
  }
  button {
    border: 0;
    background-color: transparent;
    color: #2d2d2d;
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

  @media (min-width: 768px) {
    margin: 5.8rem 0 5.15rem 0;
    img {
      max-width: 3.2rem;
    }
    button {
      font-size: 1.8rem;
    }
  }
`;
