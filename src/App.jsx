import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './assets/About-us/About-us'
import Header from './assets/Header/Header'
import Hero from './assets/Hero/Hero'
import Services from './assets/Services/Services';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Hero />} />
            <Route path='about' element={<AboutUs />} />
            <Route path='services' element={<Services />} />


          </Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
