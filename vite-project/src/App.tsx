import { useEffect, useState } from 'react'
import TodoItem from "./Todoitem"
import { Construction } from 'lucide-react' 

type Priority = "Urgente" | "Moyenne" | "Basse"

type Todo = {
  id: number;
  text: string;
  priority: Priority
}

function App() {
  const [input, setInput] = useState<string>("")
  const [priority, setpriority] = useState<Priority>("Moyenne")
  const savetodos = localStorage.getItem("todos")
  const initialtodos = savetodos ? JSON.parse(savetodos) : []
  const [todos, setTodos] = useState<Todo[]>(initialtodos)
  const [filter, setFilter] = useState<Priority | "Tous">("Tous")
  
  // ✅ Correction : syntaxe correcte pour useState
  const [selectedTodos, setSelectedTodos] = useState<Set<number>>(new Set())

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function addtodo() {
    if (input.trim() === "") {
      return;
    }

    const newtodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      priority: priority
    }

    const newtodos = [newtodo, ...todos]
    setTodos(newtodos)
    setInput("")
    setpriority("Moyenne")
    console.log(newtodo);
  }

  let filtredtodos: Todo[] = []
  if (filter === "Tous") {
    filtredtodos = todos
  } else {
    filtredtodos = todos.filter((todo) => todo.priority === filter)
  }
  
  const urgentCount = todos.filter((t) => t.priority === "Urgente").length
  const mediumCount = todos.filter((t) => t.priority === "Moyenne").length
  const lowCount = todos.filter((t) => t.priority === "Basse").length
  const totalCount = todos.length 

  function deleteTodo(id: number) {
    const newtodos = todos.filter((todo) => todo.id !== id)
    setTodos(newtodos)
    // Supprimer aussi de la sélection si supprimé
    const newSelectedTodos = new Set(selectedTodos)
    newSelectedTodos.delete(id)
    setSelectedTodos(newSelectedTodos)
  }

  function toggleSelectTodos(id: number) {
    const newSelectedTodos = new Set(selectedTodos)
    if (newSelectedTodos.has(id)) {
      newSelectedTodos.delete(id)
    } else {
      newSelectedTodos.add(id)
    }
    setSelectedTodos(newSelectedTodos)
  }

  function finishSelected() {
    // ✅ Version simplifiée et plus lisible
    const newtodos = todos.filter((todo) => !selectedTodos.has(todo.id))
    setTodos(newtodos)
    setSelectedTodos(new Set())   
  }

  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col gap-4 mt-15 bg-base-300 p-5 rounded-2xl">
        
        <div className="flex gap-4">
          <input 
            type="text"
            className="input w-full"
            placeholder="Ajouter une tâche"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          
          <select 
            className="select w-full"
            value={priority}
            onChange={(e) => setpriority(e.target.value as Priority)}
          >
            <option value={"Urgente"}>Urgente</option>
            <option value={"Moyenne"}>Moyenne</option>
            <option value={"Basse"}>Basse</option>
          </select>

          <button onClick={addtodo} className="btn btn-primary">
            Ajouter
          </button>
        </div>

        <div className="space-y-2 flex-1 h-fit">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <button 
                className={`btn btn-soft ${filter === "Tous" ? "btn-primary" : ""}`}
                onClick={() => setFilter("Tous")}
              >
                Tous({totalCount})
              </button>
              <button 
                className={`btn btn-soft ${filter === "Urgente" ? "btn-primary" : ""}`}
                onClick={() => setFilter("Urgente")}
              >
                Urgente({urgentCount})
              </button>
              <button 
                className={`btn btn-soft ${filter === "Moyenne" ? "btn-primary" : ""}`}
                onClick={() => setFilter("Moyenne")}
              >
                Moyenne({mediumCount})
              </button>
              <button 
                className={`btn btn-soft ${filter === "Basse" ? "btn-primary" : ""}`}
                onClick={() => setFilter("Basse")}
              >
                Basse({lowCount})
              </button>
            </div>
            
            <button 
              onClick={finishSelected}
              className="btn btn-primary"
              disabled={selectedTodos.size === 0}
            >
              Finir la sélection ({selectedTodos.size})
            </button>
          </div>

          {filtredtodos.length > 0 ? (
            <ul className="divide-y divide-primary/20">
              {filtredtodos.map((todo) => (
                <li key={todo.id}>
                  <TodoItem 
                    todo={todo} 
                    isSelected={selectedTodos.has(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    onToggleSelect={() => toggleSelectTodos(todo.id)}
                  />
                </li>
              ))} 
            </ul>
          ) : (
            <div className="flex justify-center items-center flex-col p-5">
              <div>
                <Construction strokeWidth={1} className="w-40 h-40 text-primary"/>
              </div>
              <p className="text-sm">Aucune tache pour ce Filtre</p> 
            </div>
          )}
        </div>  
      </div>
    </div>
  )
}

export default App