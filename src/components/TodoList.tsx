import React, { useState } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { DeleteRounded } from '@material-ui/icons';
import DeleteModal from './DeleteModal';

interface TodoListProps {
  todos: any[]
  removeTodo(id: number): void
  onToggle(id: number): void
}

const TodoList: React.FC<TodoListProps> = (props) => {

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [todoId, setTodoId] = useState(0);

  const Delete = () => {
    props.removeTodo(todoId)
    setOpen(false)
  }

  return (
    <div>
      <DeleteModal open={open} handleClose={() => setOpen(false)} title={title} Delete={Delete}/>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {
          props.todos.map((todo, index) => {


            const deleteModalAnimation = (title: string, id: number) => {
              const circle = document.querySelector(`.circle${todo.id}`);
              if (circle) {
                circle.classList.remove("delete-circle_active");
                setTimeout(() => {
                  circle.classList.add("delete-circle_active");
                }, 100)
              }
              setOpen(true)
              setTitle(title)
              setTodoId(id)
            }

            const classes: string[] = ['todo-item'];

            if (todo.completed) {
              classes.push('completed');
            }

            return (<li className={classes.join(' ')}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={todo.completed}
                    onChange={props.onToggle.bind(null, todo.id)}
                    color="secondary"
                  />
                }
                label={`${index + 1}. ${todo.title}`}
              />
              <div className="delete-box" onClick={() => deleteModalAnimation(todo.title, todo.id)}>
                <div className={`delete-circle circle${todo.id}`}></div>
                <DeleteRounded style={{ color: '#d03838', cursor: 'pointer', position: 'relative', zIndex: 15 }} />
              </div>
            </li>)
          }

          )
        }
      </ul>
    </div>
  )
}

export default TodoList;