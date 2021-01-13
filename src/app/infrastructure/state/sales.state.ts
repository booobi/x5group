export enum UnitType {
    GARAGE = 'GARAGE',
    APARTMENT = 'APARTMENT',
    STUDIO = 'STUDIO',
    SHOP = 'SHOP',
}

export interface SalesUnit {
    saleId: string,
    projectId: string,
    projectName: string,
    name: string,
    type: UnitType,
    floor: number,
    area: number,
    price: number,
}

export interface SalesResponse {
    items: SalesUnit[],
}

export interface SalesState {
    isLoading: boolean,
    salesData: SalesUnit[],
}

export const defaultSalesState: SalesState = {
    isLoading: false,
    salesData: [],
}