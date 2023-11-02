import { NavBar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidos a tienda NexGenTech!"} />
      
    </>
  )
}


export default App;