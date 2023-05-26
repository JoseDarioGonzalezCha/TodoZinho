import { GlobalStyle } from "./styles/global";

import { MenuContainer } from "./Components/Menu/MenuContainer";
import { TaskContainer } from "./Components/Task/TaskContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <MenuContainer />
      <TaskContainer />
    </>
  );
}

export default App;
