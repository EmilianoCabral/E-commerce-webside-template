import { Smallerbanners } from "../Components/Banners/smallbanner/Smallerbanners"
import { Browsercategory } from '../Components/Browserbycategory.tsx/Browsercategory'
import { Productos } from '../Components/Productos/Productositems'
import { Bannerproduc } from '../Components/Banners/Banners.produc/Bannerproduc'
import { Discountproduc } from '../Components/Discountproduct/Discountproduc'
import { Sumersale } from '../Components/Sumersale/Sumersale'
import { Banner } from "../Components/Banners/Banner"


export const Home = () => {
    return (
        <>
            <Banner />
            <Smallerbanners />
            <Browsercategory />
            <Productos />
            <Bannerproduc />
            <Discountproduc />
            <Sumersale />
        </>
    )
}
