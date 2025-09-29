"use client"

import { useState } from "react"
import type { Todo } from "../types/todo"
import TodoInput from "./todo-input"
import TodoList from "./todo-list"

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (title: string) => {
    const trimmed = title.trim()
    if (!trimmed) return
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleTodo = (id: string) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <div className="border-b border-border p-4">
        <TodoInput onAdd={addTodo} />
      </div>
      <div className="p-2 sm:p-3">
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  )
}
