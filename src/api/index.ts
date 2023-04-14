import { ItemType } from '../types/Item';

export const api = {
    setTaskList: (newList: ItemType[]) => {
        localStorage.setItem('taskList', JSON.stringify(newList));
    },
    getTaskList: () => {
        let response = localStorage.getItem('taskList');
        if (response) {
            let json = JSON.parse(response);
            return json;
        }
        return [];
    }
}