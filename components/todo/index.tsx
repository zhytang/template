import React, { useState, ChangeEvent } from 'react';

import { Checkbox, Input } from 'antd';

export type TodoCompleteEventHandler = (index: number, item: TodoModel) => void;
export type TodoAppendEventHandler = (item: TodoModel) => void;

export interface TodoModel {
  checked?: boolean;
  disabled?: boolean;
  /** 主键 */
  text: string;
}

export interface TodoProps {
  todos: TodoModel[];
  onAppend?: TodoAppendEventHandler;
  onComplete?: TodoCompleteEventHandler;
}

const Todo: React.FC<TodoProps> = ({ todos = [], onAppend, onComplete }) => {
  const [text, setText] = useState<string>();

  const textChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!text) return;
      const result: TodoModel = {
        text,
      };
      setText('');
      onAppend?.(result);
    }
  };

  const checkboxChange = (index: number, todo: TodoModel) => {
    onComplete?.(index, todo);
  };

  return (
    <div className="todo">
      <Input onKeyDown={keyDown} value={text} onChange={textChange} />

      <ul className="todos">
        {todos?.map((todo, index) => (
          <li key={todo.text}>
            <Checkbox checked={todo.checked} onChange={() => checkboxChange(index, todo)}>
              {todo.text}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todo.displayName = 'Todo';

export default Todo;
