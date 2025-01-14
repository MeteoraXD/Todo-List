import React, { useState } from 'react';

import { useTodos }  from '@/context/TodoContext';
import { addButton, inputSection ,todoInputWrapper} from '@/components/ui/TodoInput/todoInput.css.ts';

const TodoInput: React.FC = () => {
  const { dispatch } = useTodos();
  const [text, setText] = useState<string>('');

  const handleAddTodo = () => {
    if (text) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div className={todoInputWrapper} >
      <input
        className={inputSection}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button className={addButton} onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
