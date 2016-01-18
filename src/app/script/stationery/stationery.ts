export class Stationery {
    brandName: string;
    price: number;
    quantity: number;
    location: string;

    constructor(brandName: string, price: number, quantity: number, location: string) {
        this.brandName = brandName;
        this.price = price;
        this.quantity = quantity;
        this.location = location;
    }
}
