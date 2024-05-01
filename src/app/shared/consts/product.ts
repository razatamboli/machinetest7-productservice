
export enum productEnum {
    Dispatched = "Dispatched",
    InProgress = "InProgress",
    Delivered = "Delivered"
}

export interface Iproducts{
    productName: string;
    productImg: string;
    productStatus: string;
    id : number;
}