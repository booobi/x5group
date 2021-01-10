export enum UnitType {
    GARAGE = 'GARAGE',
    APARTMENT = 'APARTMENT',
    STUDIO = 'STUDIO',
    SHOP = 'SHOP',
}

export interface SalesUnit {
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
    salesData: [
        {
            projectId: 'jilishten-kompleks-kameliq',
            projectName: 'Жилищен Комплекс Камелия',
            type: UnitType.APARTMENT,
            name: 'Комплекс Камелия - Apartament 13',
            floor: 3,
            area: 54,
            price: 35000,
        },
        {
            projectId: 'jilishten-kompleks-kameliq',
            projectName: 'Жилищен Комплекс Камелия',
            type: UnitType.SHOP,
            name: 'Комплекс Камелия - Магазин 1',
            floor: 0,
            area: 40,
            price: 1000,
        },
        {
            projectId: 'jilishten-kompleks-kameliq',
            projectName: 'Жилищен Комплекс Камелия',
            type: UnitType.GARAGE,
            name: 'Комплекс Камелия - Гараж 4',
            floor: 0,
            area: 13,
            price: 6000,
        },
        {
            projectId: 'jilishten-kompleks-kameliq',
            projectName: 'Жилищен Комплекс Камелия',
            type: UnitType.GARAGE,
            name: 'Комплекс Камелия - Гараж 5',
            floor: 0,
            area: 13,
            price: 6000,
        },
        {
            projectId: 'magnoliq-sgrada-1',
            projectName: 'Жилищен Комплекс Магнолия',
            type: UnitType.APARTMENT,
            name: 'Комплекс Магнолия (сграда 1) - двустаен Апартамент 1',
            floor: 1,
            area: 56,
            price: 40000,
        },
        {
            projectId: 'magnoliq-sgrada-2',
            projectName: 'Жилищен Комплекс Магнолия',
            type: UnitType.APARTMENT,
            name: 'Комплекс Магнолия (сграда 2)-  тристаен Апартамент 3',
            floor: 1,
            area: 80,
            price: 60000,
        },
        {
            projectId: 'magnoliq-sgrada-3',
            projectName: 'Жилищен Комплекс Магнолия',
            type: UnitType.STUDIO,
            name: 'Комплекс Магнолия (сграда 3)-  ателие 1',
            floor: 1,
            area: 50,
            price: 50000,
        },
    ],
}