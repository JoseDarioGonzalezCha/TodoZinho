import { GlobalStyle } from "./styles/global";

import { MenuContainer } from "./Components/Menu/MenuContainer";
import { TaskContainer } from "./Components/Task/TaskContainer";
import { Container } from "./Components/Container/Container.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MenuContainer />
        <TaskContainer />
      </Container>
    </>
  );
}

export default App;
