import { Main_Header } from "./components/headers/main.header.jsx";
import { HomeScreen } from "./screens/home/home.screen.jsx";

function App() {
  return (
    <>
      <Main_Header
        cartQuantity={0}
        onSearch={() => console.log("Search clicked")}
        onAccount={() => console.log("Account clicked")}
        onCart={() => console.log("Cart clicked")}
      />
      <HomeScreen />
    </>
  );
}

export default App;
