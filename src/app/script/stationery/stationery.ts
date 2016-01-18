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

    toHtml(): string {
        return "<tr><td>" + this.brandName + "</td><td>" + this.price + "</td><td>" + this.quantity + "</td><td>" + this.location + "</td></tr>"
    }
}
