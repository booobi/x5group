import { ProjectStatus } from 'src/app/infrastructure/types/project';

export const projecStatusDisplayNamesMap = {
    [ProjectStatus.COMPLETE]: 'Завършен',
    [ProjectStatus.IN_PROGRESS]: 'В Строеж',
}