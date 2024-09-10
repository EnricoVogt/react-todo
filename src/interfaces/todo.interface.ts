export interface TodoItem {
  id: string;
  isDone: boolean;
  priority: number;
  title: string;
  description: string;
  tags: string[];
}
