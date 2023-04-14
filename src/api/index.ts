import { ItemType } from '../styles/Item';

export const api = {
    setTaskList: (newList: ItemType[]) => {
        localStorage.setItem('taskList', JSON.stringify(newList));
    }
}