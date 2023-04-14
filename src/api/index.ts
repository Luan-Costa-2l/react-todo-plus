import { ItemType } from '../types/Item';

export const api = {
    setTaskList: (newList: ItemType[]) => {
        localStorage.setItem('taskList', JSON.stringify(newList));
    },
    getTaskList: () => {
        let response = localStorage.getItem('taskList');
        if (response) {
            let json = JSON.parse(response);
            return json as ItemType[];
        }
        return [];
    },
    deleteTaskItem: function(id: number) {
        let taskList = this.getTaskList();
        let newTaskList = taskList.filter((item) => item.id !== id);
        this.setTaskList(newTaskList);
    },
    setTheme: (theme: boolean) => {
        localStorage.setItem('theme', theme.toString());
    },
    getTheme: () => {
        let response = localStorage.getItem('theme');
        if (response) {
            return JSON.parse(response);
        }
        return false;
    }
}