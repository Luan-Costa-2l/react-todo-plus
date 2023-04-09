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

  const handleAddTask = (task: string) => {
    if (task !== '') {
      let newList = [...list];
      // let newId = list.length > 0 ? (list[list.length - 1].id + 1) : 0;

      newList.push({id: newList.length + 1, name: task, done: false});

      setList(newList);
    } else {
      alert('Campo tarefa deve ter algum conteúdo.');
    }
}

  return (
    <Container>
      <Body>
        <header>
          <h1>Lista de Tarefas</h1>
        </header>
        
        <AddTask addTask={handleAddTask} />

        {list.map((item, index) => (
          <TaskItem item={item} key={index} />
        ))}
      </Body>
    </Container>
  )
}

export default app;