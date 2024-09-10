import { BehaviorSubject } from 'rxjs';
import { TodoItem } from '../interfaces/todo.interface';
import { inject } from '../util/dic';

export class TodoService {
  todos$ = new BehaviorSubject<TodoItem[]>([]);

  apiService = inject('ApiService');

  //todos$ = this.#todos$.asObservable();

  add(todo: TodoItem) {
    this.apiService.yolo();
    this.todos$.next([...this.todos$.value, todo]);
  }

  update(todo: TodoItem) {
    const updated = this.todos$.value.map((x) => {
      if (x.id === todo.id) {
        return {
          ...x,
          ...todo,
        };
      }
      return x;
    });
    this.todos$.next(updated);
  }

  delete(todo: TodoItem) {
    const updated = this.todos$.value.filter((x) => {
      return x.id !== todo.id;
    });
    this.todos$.next(updated);
  }
}
