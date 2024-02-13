import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/footer";
import Hotels from "./components/Hotels";

export default function App() {
  let slides = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1694967456313-80d6c3acab32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Lorem Impsum',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1675657144518-025804f1812c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Lorem Impsum',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Lorem Impsum',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1538430224529-7eceed6ab252?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Lorem Impsum',
    },
  ]
  console.log(slides);
  return (
    <div className="m-auto">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home slides={slides}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Hotels />} />
      </Routes>
      {/* <h1 className="text-3xl font-bold text-teal-800 underline my-8 justify-center flex">
        Hello world!
      </h1> */}
      
      {/* <Carousel slides={slides}/> */}
      <Footer/>
    </div>
  )
} 