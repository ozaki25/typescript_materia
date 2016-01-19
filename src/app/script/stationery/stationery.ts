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
    }

    setDefault(): Stationery {
        if(!this.brandName.trim()) this.brandName = "";
        if(!this.price) this.price = 0;
        if(!this.quantity) this.quantity = 0;
        if(!this.location.trim()) this.location = "";
        return this;
    }

    receive(): void {
        this.quantity += 10;
    }

    shipment(): void {
        this.quantity -= 10;
    }
}
