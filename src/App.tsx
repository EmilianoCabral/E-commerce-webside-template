
import './App.css'
import { Headers } from './Components/Headers/Headers'
import { Footer } from './Components/Footer/Footer'
import { Banner } from './Components/Banners/Banner'
import { Smallerbanners } from './Components/Banners/smallbanner/Smallerbanners'

function App() {

  return (
    <>
      <Headers />
        <Banner />
        <Smallerbanners />
      <Footer />
    </>
  )
}

export default App
