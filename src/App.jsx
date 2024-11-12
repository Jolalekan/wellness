import './App.css'
import Counting from './components/Counting'
import DataProtection from './components/DataProtection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Investor from './components/Investor'
import Navbar from './components/Navbar'
import Payment from './components/Payment'
import Service from './components/Service'

function App() {


  return (
    <>
    <Navbar/>
     <Hero/>
     <DataProtection/>
     <Counting/>
    <Service/>
    <Investor/>
    {/*<Payment/>*/}
    <Footer/>  
    </>
  )
}

export default App
