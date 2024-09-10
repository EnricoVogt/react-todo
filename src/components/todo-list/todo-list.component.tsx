import { useUnwrap } from '../../hooks/use-unwrap.hook';
import { useInjector } from '../../hooks/use-injector.hook';
import { TodoListItemComponent } from './todo-list-item/todo-list.item';
import { AddTodoComponent } from './add-todo/add-todo.component';

export function TodoListComponent() {
  const todoService = useInjector('TodoService');
  const todos = useUnwrap(todoService.todos$, []);

  const todoItems = todos.map((todo: any, i: number) => {
    return <TodoListItemComponent key={i} todo={todo} />;
  });

  return (
    <div>
      <AddTodoComponent />
      {todoItems}
    </div>
  );
}
