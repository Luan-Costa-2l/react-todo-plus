import { ItemType } from "../../styles/Item"
import { TaskBody } from "./styles"

interface Props {
    item: ItemType;
}

export const TaskItem = ({ item }: Props) => {
    return (
        <TaskBody>
            <input type="checkbox" name="checkbox" checked={item.done} />
            <div className="taskBody--name">{item.name}</div>
        </TaskBody>
    )
}