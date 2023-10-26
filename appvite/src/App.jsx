import { NavBar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Hello"} />
      
    </>
  )
}

export default App;