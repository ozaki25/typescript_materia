import {Template} from "./stationery/Template";

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

    valid(): boolean {
        return !!this.brandName.trim() && !!this.price && !!this.quantity && !!this.location.trim();

        return true;
    }

    blank(column): boolean {
        return column.trim();
    }

    receive(): void {
        this.quantity += 10;
    }

    shipment(): void {
        this.quantity -= 10;
    }
}
