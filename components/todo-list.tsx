"use client"

import type { Todo } from "../types/todo"
import TodoItem from "./todo-item"

type Props = {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) {
    return <div className="px-2 py-6 text-center text-muted-foreground">Belum ada todo. Tambahkan todo pertamamu!</div>
  }

  return (
    <ul className="flex flex-col divide-y divide-border">
      {todos.map((todo) => (
        <li key={todo.id} className="p-2 sm:p-3">
          <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}
