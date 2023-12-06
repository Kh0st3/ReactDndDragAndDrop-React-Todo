import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { useState } from "react";

const initialTodos = [
  { id: 1, text: "Aprender React.js" },
  { id: 2, text: "Aprender JS" },
  { id: 3, text: "Aprender Vue.js" },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h1>Todo app</h1>

      <Droppable droppableId="todos">
        {(droppableProvider) => (
          <ul
            ref={droppableProvider.innerRef}
            {...droppableProvider.droppableProps}
          >
            {todos.map((todo, index) => (
              <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>
                {(draggableProvider) => (
                  <li
                    ref={draggableProvider.innerRef}
                    {...draggableProvider.dragHandleProps}
                    {...draggableProvider.draggableProps}
                  >
                    {todo.text}
                  </li>
                )}
              </Draggable>
            ))}
            {droppableProvider.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
