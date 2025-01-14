

import { Headers } from './Components/Headers/Headers'
import { Footer } from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pageproductos } from './pages/pagesproduct/Pageproductos'
import { Home } from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Headers />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Pageproductos' element={<Pageproductos />} />
{/*             <Route path='/Detailproduct' element={<Detailproduct />} /> */}
{/*             <Route path='/Cartcontainer' element={<Cartcontainer />} />*/}            
          </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
