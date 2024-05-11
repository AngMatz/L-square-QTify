import Navbar from "./components/Navbar/navbar.js";
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div>
      <StyledEngineProvider injectFirst>
      <Navbar />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
