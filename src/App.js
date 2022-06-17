import { ErrorBoundary } from "./Components/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import GsapRoutes from "./GSAP/GsapRoutes";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        {/*<Route path="/" element={<GsapRoutes />} />*/}
        <Route path="/gsap/*" element={<GsapRoutes />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
