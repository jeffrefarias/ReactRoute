import './App.css'
import Home from './components/Home';
import Contacto from './components/Contacto'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contacto' element={<Contacto />}/>
          </Routes>
        </BrowserRouter>    
      </div>



    </>
  )
}

export default App
