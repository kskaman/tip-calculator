import appStyles from "./styles/App.module.css";

import logo from "./assets/icons/logo.svg";
import TipCalculator from "./TipCalculator";

const App = () => {
  return (
    <div className={appStyles.container}>
      <img src={logo} alt="App Logo" />
      <TipCalculator />
    </div>
  );
};

export default App;
