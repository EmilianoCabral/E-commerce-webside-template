import { Smallerbanners } from "../Components/Banners/smallbanner/Smallerbanners"
import { Bannerproduc } from '../Components/Banners/Banners.produc/Bannerproduc'
import { Discountproduc } from '../Components/Discountproduct/Discountproduc'
import { Banner } from "../Components/Banners/Banner"
import { Product } from "../Components/Productos/Productsitems"


export const Home = () => {
    return (
        <>
            <Banner />
            <Smallerbanners />
            <Product />
            <Bannerproduc />
            <Discountproduc />
        </>
    )
}
