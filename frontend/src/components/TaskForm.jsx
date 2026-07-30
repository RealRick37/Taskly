import { useEffect, useState } from "react";

function TaskForm({ onSubmit, initialData }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [status, setStatus] = useState("todo");

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.description);
            setDeadline(initialData?.deadline ? initialData.deadline.slice(0,16): "");
            setStatus(initialData?.status || "todo");
        
        } else {
            setTitle("");
            setDescription("");
            setDeadline("");
            setStatus("todo");
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            title,
            description,
            deadline: deadline || null,
            status: status || "todo",
        });

        setTitle("");
        setDescription("");
    };

    return (
        <div className="bg-white rounded-xl shadow p-5 sm:p-6">

            <h2 className="text-xl font-bold mb-5">
                {initialData ? "Edit Task" : "Create Task"}
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    className="w-full border rounded-lg px-4 py-2 h-28 sm:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="
                        w-full
                        border
                        rounded-lg
                        px-4
                        py-3
                        mb-4
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                >
                    <option value="todo">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>

                <input
                    type="datetime-local"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="
                        w-full
                        border
                        rounded-lg
                        px-4
                        py-3
                        mb-4
                    "
                />

                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 rounded-lg font-semibold transition"
                    type="submit"
                >
                    {initialData ? "Update Task" : "Create Task"}
                </button>

            </form>

        </div>
    );
}

export default TaskForm;