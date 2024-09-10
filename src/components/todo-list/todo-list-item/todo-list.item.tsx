import { useInjector } from '../../../hooks/use-injector.hook';
import { TodoItem } from '../../../interfaces/todo.interface';
import { useState } from 'react';

function TodoListItemCheckboxComponent(p: {
  checked: boolean;
  onChecked: () => void;
  id: any;
}) {
  const checkClasses = p.checked ? 'mark show' : 'mark';
  const checkClasses1 = p.checked ? 'mark1 show' : 'mark1';

  return (
    <div className={'todo-item-checkbox'}>
      <label htmlFor={p.id}></label>
      <input
        id={p.id}
        name="x"
        type="checkbox"
        checked={p.checked}
        onChange={p.onChecked}
      />
      <div className={'circle'}>
        <div className={checkClasses}></div>
        <div className={checkClasses1}></div>
      </div>
    </div>
  );
}

export function TodoListItemComponent(p: { todo: TodoItem }) {
  const [editMode, setEditMode] = useState(false);

  const todoService = useInjector('TodoService');
  const doneChange = (todo: TodoItem) =>
    todoService.update({ ...todo, isDone: !todo.isDone });

  const enterEditMode = () => {
    setEditMode(true);
  };

  const actions = editMode ? (
    <>
      <button>Speichern</button>
      <button>Abbrechen</button>
      <button>Löschen</button>
    </>
  ) : (
    <>
      <button onClick={enterEditMode}>edit</button>
    </>
  );

  return (
    <div className={'todo-item'}>
      <div>
        <TodoListItemCheckboxComponent
          checked={p.todo.isDone}
          onChecked={() => doneChange(p.todo)}
          id={p.todo.id}
        />
      </div>
      <div className={'ml-4'}>
        <h1>{p.todo.title}</h1>
        <div>{p.todo.description}</div>
      </div>
      <div>{actions}</div>
    </div>
  );
}
