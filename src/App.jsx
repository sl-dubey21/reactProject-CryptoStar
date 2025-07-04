import Navbar from './components/Navbar/Navbar'
import { Routes ,Route} from 'react-router-dom'
import Coin from "../src/pages/Coins/Coin"
import Home from './pages/Home/Home'
import Price from './pages/price/Price'
import Feature from './pages/feature/Feature'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coin/:coinId' element={<Coin/>}></Route>
        <Route path='/pricing' element={<Price/>}></Route>
        <Route path='/features' element={<Feature/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
