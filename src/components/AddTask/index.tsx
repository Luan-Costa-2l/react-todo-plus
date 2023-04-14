import { useState } from "react";
import { SearchBody } from "./styles";

interface Props {
    addTask: (task: string) => void;
    dark: boolean;
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
}

export const AddTask = ({ addTask, dark, task, setTask }: Props) => {

    const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.code === 'Enter') {
            addTask(task);
            setTask('');
        }
    }

    return (
        <SearchBody dark={dark}>
            <button className="addIcon" onClick={() => addTask(task)}>+</button>
            <input type="text" placeholder="Adicione uma tarefa" value={task} onChange={e => setTask(e.target.value)} onKeyUp={handleKeyUp} />
        </SearchBody>
    )
}