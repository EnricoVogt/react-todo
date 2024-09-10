import { useContext, createContext } from 'react';
import { dic, DIC } from '../util/dic';
import { TodoService } from '../services/todo.service';
import { ApiService } from '../services/api.service';

dic.register(TodoService, () => new TodoService());
dic.register(ApiService, () => new ApiService());
const injectorContext = createContext<DIC>(dic);

export function useInjector(name: string) {
  const ctx = useContext(injectorContext);
  const service = ctx.get(name);
  return service;
}
