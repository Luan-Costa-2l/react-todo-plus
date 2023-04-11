import { useState } from "react";

import { Body, Container } from "./App.styles";
import { AddTask } from "./components/AddTask";
import { ItemType } from "./styles/Item";
import { TaskItem } from "./components/TaskItem";

const app = () => {
  const [list, setList] = useState<ItemType[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

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

  const handleChecked = (taskId: number) => {
    let newList = [...list];
    newList.forEach((item) => {
      if (item.id === taskId) {
        item.done = !item.done;
      }
    });
    setList(newList);
  }

  return (
    <Container dark={darkMode}>
      <button className="toggleButton" onClick={toggleTheme}>
        <div className="indicator"></div>
      </button>

      <Body dark={darkMode}>
        <header>
          <h1>Lista de Tarefas</h1>
        </header>
        
        <AddTask addTask={handleAddTask} dark={darkMode} />

        {list.map((item, index) => (
          <TaskItem item={item} key={index} handleChecked={handleChecked} dark={darkMode} />
        ))}

        
      </Body>
      <footer>
        <p>Criado por <a href="https://www.linkedin.com/in/luan-cordeiro-575826254/" target="_blank">Luan C. da Costa</a>.</p>
      </footer>
    </Container>
  )
}

export default app;