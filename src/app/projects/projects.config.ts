import { ProjectStatus } from '../infrastructure/types/project';

export const projecStatusDisplayNamesMap = {
    [ProjectStatus.COMPLETE]: 'Завършен',
    [ProjectStatus.IN_PROGRESS]: 'В Строеж',
}