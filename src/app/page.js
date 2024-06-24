import { Container } from "@chakra-ui/react";
// import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
// import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <Container maxW="7x1">
      <Auth />
      {/* <AddTodo /> */}
      {/* <TodoList /> */}
    </Container>
  );
}
