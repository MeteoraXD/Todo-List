import React, { useState } from 'react';

import {
  addButton,
  inputSection, InputWrapper, resetButton,
  todoInputWrapper,

} from '@/components/ui/TodoInput/TodoInput.css.ts';
import AddIcon from '@/components/icons/AddIcon';
import useTodos from '@/hooks/TodoHook/useTodos.ts';


const TodoInput: React.FunctionComponent = () => {
  const { dispatch } = useTodos();
  const [text, setText] = useState<string>('');


  const handleAddTodo = () => {
    if (text) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };


  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setText('');
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddTodo();
    }

  };

  return (
    <div className={todoInputWrapper}>
      <div className={InputWrapper}>
        <input
          className={inputSection}
          type="text"
          onKeyDown={handleKeyDown}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo..."
        />
        {text && (
          <button
            type="button"
            className={resetButton}
            onClick={handleReset}
          >
            ⨉
          </button>
        )}
        <button className={addButton} onClick={handleAddTodo}>
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
