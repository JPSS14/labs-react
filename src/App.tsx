import "./App.css";
import { MainMenu } from "./components";
import { MainHeader } from "./components/main-header";

function App() {
  return (
    <>
      <div className="main">
        <div>
          <MainHeader />
          <MainMenu />
        </div>
      </div>
    </>
  );
}

export default App;
