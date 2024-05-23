import { Smallerbanners } from "../Components/Banners/smallbanner/Smallerbanners"
import { Browsercategory } from '../Components/Browserbycategory.tsx/Browsercategory'

import { Bannerproduc } from '../Components/Banners/Banners.produc/Bannerproduc'
import { Discountproduc } from '../Components/Discountproduct/Discountproduc'
import { Sumersale } from '../Components/Sumersale/Sumersale'
import { Banner } from "../Components/Banners/Banner"
import { Product } from "../Components/Productos/Productsitems"


export const Home = () => {
    return (
        <>
            <Banner />
            <Smallerbanners />
            <Browsercategory />
            <Product />
            <Bannerproduc />
            <Discountproduc />
            <Sumersale />
        </>
    )
}
