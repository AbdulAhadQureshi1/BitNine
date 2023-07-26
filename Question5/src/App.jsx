import './App.scss'
import DBEngine from './components/DBEngine/DBEngine';
import Package from './components/Enterprise Package/Package';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Features />
      <DBEngine />
      <Package />
    </>
  )
}

export default App;