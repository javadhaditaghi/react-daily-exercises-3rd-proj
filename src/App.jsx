import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './assets/About-us/About-us'
import Header from './assets/Header/Header'
import Hero from './assets/Hero/Hero'
import Services from './assets/Services/Services';
import Team from './assets/Team/Team';
import Blog from './assets/Blog/Blog';
import Contact from './assets/Contact/Contact';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SingleBlog from './assets/Blog/SingleBlog';
import SingleService from './assets/Services/SingleService';


function App() {
  useEffect(() => {
    Aos.init();
  }, []);



  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Hero />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='services' element={<Services />} />
          <Route path='services/:ServiceId' element={<SingleService />} />

          <Route path='team' element={<Team />} />
          <Route path='blog' element={<Blog />} />
          <Route path='Blog/:BlogId' element={<SingleBlog />} />
          <Route path='contact' element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>




  )
}

export default App
