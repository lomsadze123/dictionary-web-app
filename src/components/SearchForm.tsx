import styled from "styled-components";
import search from "../assets/icon-search.svg";
import Word from "./Word";
import Meaning from "./Meaning";
import Verbs from "./Verbs";

const SearchForm = () => {
  return (
    <Main>
      <form>
        <input type="text" placeholder="Search for any word…" />
        <img src={search} alt="search bar icon" />
      </form>
      <Word />
      <Meaning />
      <Verbs />
    </Main>
  );
};

export default SearchForm;

const Main = styled.main`
  form {
    width: 100%;
    background-color: #f4f4f4;
    border-radius: 1.6rem;
    padding: 1.4rem 2.44rem 1.5rem 2.4rem;
    display: flex;
    justify-content: space-between;
    gap: 3.3rem;
  }
  form img {
    max-width: 1.555rem;
    width: 100%;
    height: auto;
  }
  input {
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 1.6rem;
    font-weight: 700;
    color: #2d2d2d;
    background-color: #f4f4f4;
  }
  input::placeholder {
    opacity: 0.5;
  }
`;
