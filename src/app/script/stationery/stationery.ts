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

    toHtml(id: number): string {
        return "<tr>" +
            "<td>" + this.brandName + "</td>" +
            "<td>" + this.price + "</td>" +
            "<td>" + this.quantity + "</td>" +
            "<td>" + this.location + "</td>" +
            "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs receive\" href=\"#\">入荷</a></td>" +
            "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs shipment\" href=\"#\">出荷</a></td>" +
            "</tr>"
    }

    receive(): void {
        this.quantity += 10;
    }

    shipment(): void {
        this.quantity -= 10;
    }
}
