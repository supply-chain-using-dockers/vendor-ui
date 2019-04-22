export class orderdelay{
    placeOrderToRawMaterial: {
        id: string,
        date: Date,
        TotalDelay: number
        }
        startSubvendor: {
            id: string,
            date: Date,
            TotalDelay: number
        }
        startProduction: {
            id: string,
            date: Date,
            TotalDelay: number
        }
        startTransport: {
            id: string,
            date: Date,
            TotalDelay: number
        }
        formDate: Date
        _id: string
        supplier: string
        component: string
        expectedDate: Date
        


}