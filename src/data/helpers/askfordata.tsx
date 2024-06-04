import data from "../data.json"
import { ProductsProps } from "../../Components/types";

export const askfordata = (): Promise<ProductsProps[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.product)
        }, 500);
    })
}
