import { DashboardPage, SingleProductPage } from "./pages";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
      </Routes>
    </>
  );
};

export default App;
