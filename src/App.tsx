

import { Headers } from './Components/Headers/Headers'
import { Footer } from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pageproductos } from './pages/pagesproduct/Pageproductos'
import { Home } from './pages/Home'
import { Detailproduct } from './pages/detailproduct/Detailproduct'

function App() {

  return (
    <BrowserRouter>
      <Headers />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Pageproductos' element={<Pageproductos />} />
            <Route path='/Detailproduct' element={<Detailproduct />} />
          </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
