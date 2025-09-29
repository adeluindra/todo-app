"use client"

import type { Todo } from "../types/todo"

type Props = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div className="flex items-center justify-between gap-3">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 rounded border-border align-middle outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          aria-label={`Tandai ${todo.title} sebagai ${todo.completed ? "belum selesai" : "selesai"}`}
        />
        <span
          className={`text-foreground transition-colors ${todo.completed ? "line-through text-muted-foreground" : ""}`}
        >
          {todo.title}
        </span>
      </label>

      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-destructive px-3 py-2 text-xs font-medium text-destructive-foreground transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        aria-label={`Hapus ${todo.title}`}
      >
        Hapus
      </button>
    </div>
  )
}
