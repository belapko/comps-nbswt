import {IOption} from '../components/dropdown/dropdown';

export const searchQueryFilter = (query: string, data: IOption[]):IOption[] => {
    return data.filter(element => {
        if (query === '') {
            return element;
        } else if (element?.title?.toLowerCase().includes(query.toLowerCase()) || element?.search?.toLowerCase().includes(query.toLowerCase())) {
            return element;
        }
    });
};