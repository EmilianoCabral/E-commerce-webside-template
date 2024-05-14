

import { Headers } from './Components/Headers/Headers'
import { Footer } from './Components/Footer/Footer'
import { Banner } from './Components/Banners/Banner'
import { Smallerbanners } from './Components/Banners/smallbanner/Smallerbanners'
import { Browsercategory } from './Components/Browserbycategory.tsx/Browsercategory'
import { Productos } from './Components/Productos/Productositems'
import { Bannerproduc } from './Components/Banners/Banners.produc/Bannerproduc'
import { Discountproduc } from './Components/Discountproduct/Discountproduc'
import { Sumersale } from './Components/Sumersale/Sumersale'

function App() {

  return (
    <>
      <Headers />
        <main>
            <Banner />
            <Smallerbanners />
            <Browsercategory />
            <Productos />
            <Bannerproduc />
            <Discountproduc />
            <Sumersale />
        </main>
      <Footer />
    </>
  )
}

export default App
