import {
    Pencil,
    Check,
    Trash2,
    CalendarDays,
} from "lucide-react";

function TaskCard({ task, onDelete, onComplete, onEdit }) {

    const statusStyles = {
        todo: "bg-yellow-100 text-yellow-700",
        in_progress: "bg-blue-100 text-blue-700",
        done: "bg-green-100 text-green-700",
    };

    const statusText = {
        todo: "To Do",
        in_progress: "In Progress",
        done: "Done",
    };

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">

            <div className="flex justify-between items-start">

                <div className="space-y-2">

                    <h2 className="text-xl font-bold text-slate-800">
                        {task.title}
                    </h2>

                    <p className="text-slate-500">
                        {task.description || "No description"}
                    </p>

                </div>

                <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[task.status]}`}
                >
                    {statusText[task.status]}
                </span>

            </div>

            {task.deadline && (
                <div className="flex items-center gap-2 mt-5 text-sm text-slate-500">

                    <CalendarDays size={16} />

                    <span>
                        {new Date(task.deadline).toLocaleDateString()}
                    </span>

                </div>
            )}

            <div className="flex gap-3 mt-6">

                <button
                    onClick={() => onEdit(task)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition"
                >
                    <Pencil size={18} />
                    Edit
                </button>

                <button
                    onClick={() => onComplete(task.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition"
                >
                    <Check size={18} />
                    Done
                </button>

                <button
                    onClick={() => onDelete(task.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
                >
                    <Trash2 size={18} />
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TaskCard;