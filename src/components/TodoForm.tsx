import React, { useRef } from 'react';
import { TextField } from '@material-ui/core';


interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {

  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  }

  return (
    <div>
      <TextField
        className="w100 mt"
        label="Введите название дела"
        variant="outlined"
        inputRef={ref}
        // value={title}
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
    </div>
  )
}

export default TodoForm;