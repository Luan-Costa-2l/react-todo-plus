import { SearchBody } from "./styles"

export const AddTask = () => {
    return (
        <SearchBody>
            <button className="addIcon">+</button>
            <input type="text" placeholder="Adicione uma tarefa" />
        </SearchBody>
    )
}