import { useState } from "react";

import { ItemType } from "../../types/Item"
import { TaskBody } from "./styles"

interface Props {
    item: ItemType;
    handleChecked: (taskId: number) => void;
    dark: boolean;
}

export const TaskItem = ({ item, handleChecked, dark }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const doneTask = () => {
        handleChecked(item.id);
        setIsChecked(!isChecked);
    }

    return (
        <TaskBody done={isChecked} dark={dark}>
            <input type="checkbox" name="checkbox" checked={isChecked} onChange={doneTask} />
            <div className="taskBody--name">{item.name}</div>
        </TaskBody>
    )
}