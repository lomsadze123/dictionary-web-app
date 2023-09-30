import styled from "styled-components";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <Div>
      <Header />
      <SearchForm />
    </Div>
  );
}

export default App;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;
`;
