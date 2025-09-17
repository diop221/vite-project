import { Trash } from "lucide-react";

type Priority = "Urgente" | "Moyenne" | "Basse"

type Todo = {
  id: number;
  text: string;
  priority: Priority
}

type Props = {
  todo: Todo
  isSelected: boolean
  onDelete: () => void
  onToggleSelect: () => void
}

const TodoItem = ({ todo, isSelected, onDelete, onToggleSelect }: Props) => {
  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={isSelected}
            onChange={onToggleSelect}
          />
          <span className="text-md font-bold">
            <span className={isSelected ? "line-through opacity-60" : ""}>
              {todo.text}
            </span>
          </span>
          <span
            className={`badge badge-sm badge-soft
            ${todo.priority === "Urgente" ?
              "badge-error" :
              todo.priority === "Moyenne"
                ? "badge-warning" :
                "badge-success"} badge-sm ml-2`}>
            {todo.priority}
          </span>
        </div>
        <button
          onClick={onDelete}  // ✅ Correction ici aussi
          className="btn btn-sm btn-error btn-soft"
        >
          <Trash className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem