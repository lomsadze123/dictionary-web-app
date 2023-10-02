import styled from "styled-components";
import search from "../assets/icon-search.svg";
import Word from "./Word";
import Meaning from "./Meaning";
import Verbs from "./Verbs";
import { useState } from "react";
import Data from "./Data";
import axios from "axios";
import Empty from "./Empty";

const SearchForm = ({ mode }: { mode: string }) => {
  const [data, setData] = useState(Data);
  const [value, setValue] = useState("person");
  const [searched, setSearched] = useState(true);

  const fetchData = async () => {
    try {
      const req = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + value
      );
      const reqData = req.data;
      setData(reqData);
      setSearched(true);
    } catch (error) {
      setSearched(false);
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value !== "") {
      fetchData();
    }
  };

  const check = data[0].meanings[1] && data[0].meanings[1];
  const check2 = data[0].meanings[2] && data[0].meanings[2].definitions;

  return (
    <Main>
      <Form color={mode === "light"} onSubmit={handleSubmit}>
        <Input
          color={mode === "light"}
          onChange={(e) => setValue(e.currentTarget.value)}
          type="text"
          placeholder="Search for any word…"
        />
        <img src={search} alt="search bar icon" />
      </Form>
      {searched ? (
        <>
          <Word
            word={data[0].word}
            phonetic={data[0].phonetic}
            audio={
              data[0].phonetics.length > 0 ? data[0].phonetics[0].audio : null
            }
            mode={mode}
          />
          <Meaning
            definitions={data[0].meanings[0].definitions}
            synonyms={data[0].meanings[0].synonyms}
            mode={mode}
          />
          <Verbs
            definitions={check ? check.definitions : check2}
            check={check && check.partOfSpeech}
            link={data[0].sourceUrls}
            mode={mode}
          />
        </>
      ) : (
        <Empty mode={mode} />
      )}
    </Main>
  );
};

export default SearchForm;

const Main = styled.main`
  form {
    width: 100%;
    border-radius: 1.6rem;
    padding: 1.4rem 2.44rem 1.5rem 2.4rem;
    display: flex;
    justify-content: space-between;
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
  }
  input::placeholder {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    form {
      padding: 2.2rem 2.4rem 2.1rem 2.4rem;
    }
    input {
      font-size: 2rem;
    }
    form:focus-within {
      border: 0.1rem solid #a445ed;
    }
  }
`;
const Form = styled.form<{ color: boolean }>`
  background-color: ${(props) => (props.color ? "#f4f4f4" : "#1F1F1F")};
  color: ${(props) => (props.color ? "#2d2d2d" : "#FFF")};
`;
const Input = styled(Form).attrs({ as: "input" })<{ color: boolean }>``;
