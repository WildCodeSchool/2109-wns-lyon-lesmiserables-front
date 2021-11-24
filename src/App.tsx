import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import HeaderRoutes from "./components/Header/HeaderRoutes";

const App = (): JSX.Element => {
  return (
    <Router>
      <div>
        <Header />
        <HeaderRoutes />
      </div>
    </Router>
  );
};

export default App;
