import type { Metadata } from "next"
import TodoApp from "../components/todo-app"

export const metadata: Metadata = {
  title: "Todo Sederhana",
  description: "Aplikasi Todo sederhana dengan Next.js, TypeScript, dan Tailwind",
}

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <section className="mx-auto max-w-xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-pretty text-2xl font-semibold text-foreground">Todo Sederhana</h1>
          <p className="text-muted-foreground">Tambahkan, centang, dan hapus todo. Data disimpan di state React.</p>
        </header>
        <TodoApp />
      </section>
    </main>
  )
}
