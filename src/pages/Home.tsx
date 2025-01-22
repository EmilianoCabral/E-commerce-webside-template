
import { Bannerproduc } from '../Components/Banners/Banners.produc/Bannerproduc'
import { Discountproduc } from '../Components/Discountproduct/Discountproduc'
import { Banner } from "../Components/Hero/Banner"
import { Product } from "../Components/Productos/Productsitems"


export const Home = () => {
    return (
        <>
            <Banner />
            <Product />
            <Bannerproduc />
            <Discountproduc />
        </>
    )
}
