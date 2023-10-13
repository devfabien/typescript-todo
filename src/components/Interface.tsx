export interface Todos {
  id: string;
  task: string;
  completed: boolean;
}
export interface Props {
  tasks: Todos[];
  handleDel: (id: string) => void;
  handleCheck: (id: string) => void;
}
