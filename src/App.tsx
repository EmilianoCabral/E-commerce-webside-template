

import { Headers } from './Components/Headers/Headers'
import { Footer } from './Components/Footer/Footer'
import { Banner } from './Components/Banners/Banner'
import { Smallerbanners } from './Components/Banners/smallbanner/Smallerbanners'
import { Browsercategory } from './Components/Browserbycategory.tsx/Browsercategory'
import { Productos } from './Components/Productos/Productos'

function App() {

  return (
    <>
      <Headers />
        <main>
            <Banner />
            <Smallerbanners />
            <Browsercategory />
            <Productos />
        </main>
      <Footer />
    </>
  )
}

export default App
