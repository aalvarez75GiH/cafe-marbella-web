import { Routes, Route, Navigate } from "react-router-dom";

import { Main_Header } from "./components/headers/main.header.jsx";
import { HomeScreen } from "./screens/home/home.screen.jsx";
import { CoffeePage } from "./screens/coffee/coffee_page.jsx";
import { MerchPage } from "./screens/merch/merch_page.jsx";

function App() {
  return (
    <>
      <Main_Header
        cartQuantity={0}
        onSearch={() => console.log("Search clicked")}
        onAccount={() => console.log("Account clicked")}
        onCart={() => console.log("Cart clicked")}
      />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
