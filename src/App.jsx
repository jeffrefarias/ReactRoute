import './App.css'
import Contacto from './components/Contacto'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <>

      <div>
        {/* <BrowserRouter>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Contacto' element={<Contacto />}/>
          </Routes>
        </BrowserRouter> */}
        {/* <Home /> */}
        <Contacto />
      </div>



    </>
  )
}

export default App
