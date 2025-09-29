"use client"

import type React from "react"

import { useState } from "react"

type Props = {
  onAdd: (title: string) => void
}

export default function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <label htmlFor="todo-title" className="sr-only">
          Judul Todo
        </label>
        <input
          id="todo-title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Apa yang ingin kamu kerjakan?"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground outline-none ring-0 focus:border-ring/60 focus:ring-2 focus:ring-ring/50"
          aria-label="Judul Todo"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        aria-label="Tambah Todo"
      >
        Tambah
      </button>
    </form>
  )
}
