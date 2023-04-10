import { useState } from "react";

import { ItemType } from "../../styles/Item"
import { TaskBody } from "./styles"

interface Props {
    item: ItemType;
    handleChecked: (taskId: number) => void;
}

export const TaskItem = ({ item, handleChecked }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const doneTask = () => {
        handleChecked(item.id);
        setIsChecked(!isChecked);
    }

    return (
        <TaskBody done={isChecked}>
            <input type="checkbox" name="checkbox" checked={isChecked} onChange={doneTask} />
            <div className="taskBody--name">{item.name} - {item.done.toString()}</div>
        </TaskBody>
    )
}