import { useEffect, useState } from "react";

function TaskForm({ onSubmit, initialData }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            title,
            description,
        });

        setTitle("");
        setDescription("");
    };

    return (
        <div className="bg-white rounded-xl shadow p-6">

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
                    className="w-full border rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    type="submit"
                >
                    {initialData ? "Update Task" : "Create Task"}
                </button>

            </form>

        </div>
    );
}

export default TaskForm;