export interface ProductsProps {
    brand:string;
    id: number;
    category: string
    name: string;
    model: string
    description: string;
    price: number;
    characteristics?: string[];
    img?: string;
}