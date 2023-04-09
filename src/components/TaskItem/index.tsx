import { useState } from "react";

import { ItemType } from "../../styles/Item"
import { TaskBody } from "./styles"

interface Props {
    item: ItemType;
}

export const TaskItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <TaskBody done={isChecked}>
            <input type="checkbox" name="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
            <div className="taskBody--name">{item.name}</div>
        </TaskBody>
    )
}