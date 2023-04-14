import { useState } from "react";

import { ItemType } from "../../types/Item"
import { TaskBody } from "./styles"
import { api } from "../../api";

interface Props {
    item: ItemType;
    handleChecked: (taskId: number) => void;
    dark: boolean;
    setList: React.Dispatch<React.SetStateAction<ItemType[]>>;
    editTask: (id: number) => void;
}

export const TaskItem = ({ item, handleChecked, dark, setList, editTask }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const doneTask = () => {
        handleChecked(item.id);
        setIsChecked(!isChecked);
    }

    const handleDeleteItem = () => {
        api.deleteTaskItem(item.id);
        let newList = api.getTaskList();
        setList(newList);
    }

    return (
        <TaskBody done={isChecked} dark={dark}>
            <input type="checkbox" name="checkbox" checked={isChecked} onChange={doneTask} />
            <div className="taskBody--name">{item.name}</div>
            <div className="taskBody--editIcon" onClick={() => editTask(item.id)}>📝</div>
            <div className="taskBody--deleteIcon" onClick={handleDeleteItem}>🗑️</div>
        </TaskBody>
    )
}