import { Body, Container } from "./App.styles";
import { AddTask } from "./components/AddTask";

const app = () => {
  return (
    <Container>
      <Body>
        <header>
          <h1>Lista de Tarefas</h1>
        </header>
        
        <AddTask />
      </Body>
    </Container>
  )
}

export default app;