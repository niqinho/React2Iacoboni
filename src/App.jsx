import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Componentes/NavBar/ItemListContainer/ItemListContainer"
import Navbar from "./Componentes/NavBar/navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={ <ItemListContainer greeting = "welcome to summoner's rift" /> }/>
  <Route path="/categoria/:categoriaid" element={ <ItemListContainer greeting = "Estos son los productos :" /> }/>
  <Route path="/item/:id" element={ <ItemDetailContainer/> }/>
</Routes>
</BrowserRouter>
  )
}

export default App
