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
    },
    editTask: function(id: number, setTask: React.Dispatch<React.SetStateAction<string>>, setTaskList: React.Dispatch<React.SetStateAction<ItemType[]>>) {
        let taskList = this.getTaskList();
        if (taskList.length > 0) {
            let task = taskList.find(item => item.id === id);
            if (task) {
                setTask(task.name);
                setTaskList(taskList.filter(item => item.id !== id));
                this.deleteTaskItem(task.id);
            }
        }
    }
}