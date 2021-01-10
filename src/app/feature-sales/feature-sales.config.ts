import { UnitType } from "../infrastructure/state/sales.state";

export function getUnityTypeName(type: UnitType) {
    switch (type) {
        case UnitType.APARTMENT: {
            return 'Апартамент';
        }
        case UnitType.GARAGE: {
            return 'Гараж';
        }
        case UnitType.SHOP: {
            return 'Магазин';
        }
        case UnitType.STUDIO: {
            return 'Ателие';
        }
        default: return '';
    }
}
