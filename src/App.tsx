import styled from "styled-components";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const local = localStorage.getItem("mode");

  if (local === null) {
    localStorage.setItem("mode", "light");
  }

  useEffect(() => {
    local && setMode(local);
  }, []);

  const handleSwitch = () => {
    if (local === "light") {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  };

  return (
    <Body color={mode === "light"}>
      <div className="div">
        <Header handleSwitch={handleSwitch} mode={mode} />
        <SearchForm mode={mode} />
      </div>
    </Body>
  );
}

export default App;

const Body = styled.div<{ color: boolean }>`
  min-height: 100vh;
  background-color: ${(props) => (props.color ? "#FFF" : "#050505")};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;

  @media (min-width: 768px) {
    padding: 0 3.9rem 0 4rem;
  }

  @media (min-width: 1000px) {
    padding: 0;
    .div {
      max-width: 73.6rem;
    }
    margin: 0 auto;
  }
`;
