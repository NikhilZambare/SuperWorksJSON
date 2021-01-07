export interface Products {
    id?:number;
    product_name: string;
    product_img: string;
    rate: number;
    dsce: string;
    qty: number;
    isAdded?: boolean;
}