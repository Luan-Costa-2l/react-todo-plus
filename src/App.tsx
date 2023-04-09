import { useState } from "react";

import { Body, Container } from "./App.styles";
import { AddTask } from "./components/AddTask";
import { ItemType } from "./styles/Item";
import { TaskItem } from "./components/TaskItem";

const app = () => {
  const [list, setList] = useState<ItemType[]>([
    {id: 1, name: 'Comprar pão', done: false},
    {id: 2, name: 'Estudar Sass', done: true}
  ]);

  return (
    <Container>
      <Body>
        <header>
          <h1>Lista de Tarefas</h1>
        </header>
        
        <AddTask />

        {list.map((item, index) => (
          <TaskItem item={item} key={index} />
        ))}
      </Body>
    </Container>
  )
}

export default app;