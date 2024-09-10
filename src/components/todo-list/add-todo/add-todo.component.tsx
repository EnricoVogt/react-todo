import { useInjector } from '../../../hooks/use-injector.hook';
import { getFormData } from '../../../util/uti';

export function AddTodoComponent() {
  const todoService = useInjector('TodoService');

  const addHandler = (event: any) => {
    event.preventDefault();
    const data = getFormData(event.target);

    todoService.add({
      id: Date.now().toString(),
      isDone: false,
      priority: 0,
      title: data.title,
      description: data.description,
      tags: [],
    });
  };

  return (
    <form onSubmit={addHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="checkbox" />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description"></textarea>
      </div>
      <div>
        <label htmlFor="tags">Tags</label>
        <input id="tags" name="tags" type="text" />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <input id="priority" name="priority" type="range" min="1" max="5" />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}
