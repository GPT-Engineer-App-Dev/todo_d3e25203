import { useState } from "react";
import { Box, Flex, Heading, Input, Button, Checkbox, Text, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <Box p={8}>
      <Heading mb={4}>Todo App</Heading>
      <Flex mb={4}>
        <Input placeholder="Add a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} mr={2} />
        <Button onClick={addTodo} colorScheme="blue">
          <FaPlus />
        </Button>
      </Flex>
      <VStack spacing={2} align="start">
        {todos.map((todo, index) => (
          <Flex key={index} align="center" justify="space-between" w="full">
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)}>
              <Text as={todo.completed ? "del" : "span"} color={todo.completed ? "gray.500" : "inherit"}>
                {todo.text}
              </Text>
            </Checkbox>
            <Button size="sm" onClick={() => deleteTodo(index)} colorScheme="red">
              Delete
            </Button>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
