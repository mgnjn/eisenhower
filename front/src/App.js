import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Navbar from "./components/Navbar/Navbar";
import { Mode } from "./stores/mode.store";

export function App() {
  const modeStore = new Mode();
  return (
    <div>
      <Navbar modeStore={modeStore} />
    </div>
  );
}

export default App;
