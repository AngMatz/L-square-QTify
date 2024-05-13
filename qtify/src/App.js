import Navbar from "./components/Navbar/navbar.js";
import HomePage from "./components/Pages/HomePage/homePage.js";
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
      <Navbar />
      <HomePage />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
