import data from "../data.json"
import { ProductsProps } from "../types";

export const askfordata = (): Promise<ProductsProps[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.product);
        }, 500);
    })
}
