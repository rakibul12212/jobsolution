import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header'
import Category from './component/Categories/Catagories'
import Feature from './component/Features/Features'
import Footer from './component/Footer/Footer'







function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
       <Category></Category> 
       <Feature></Feature>
       <Footer></Footer>
        
    </div>
  )
}

export default App
