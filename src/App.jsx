import { GlobalStyle } from "./styles/global";

import { MenuContainer } from "./Components/Menu/MenuContainer";
import { TaskFormContainer } from "./Components/TaskFormContainer/TaskFormContainer";
import { Container } from "./Components/Container/Container.styles";
import { ShowTaskContainer } from "./Components/ShowTask/ShowTaskContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MenuContainer />
        <ShowTaskContainer />
        <TaskFormContainer />
      </Container>
    </>
  );
}

export default App;
