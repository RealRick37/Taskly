import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import StatsCards from "../components/dashboard/StatsCards";
import SearchBar from "../components/dashboard/SearchBar";
import StatusFilter from "../components/dashboard/StatusFilter";
import SortSelect from "../components/dashboard/SortSelect";
import { getTasks, createTask, deleteTask, completeTask, updateTask } from "../services/taskService";
import Navbar from "../components/Navbar";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [ordering, setOrdering] = useState("-created_at");

    useEffect(() => {
    fetchTasks();
    }, [search, status, ordering]);

    const fetchTasks = async () => {
        try {
            const data = await getTasks({
                search,
                status,
                ordering,
            });

            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createTaskHandler = async (task) => {
        try {
            const newTask = await createTask(task);

            setTasks((prev) => [newTask, ...prev]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTaskHandler = async (id) => {
        try {
            await deleteTask(id);

            setTasks((prev) =>
                prev.filter((task) => task.id !== id)
            );
        } catch (error) {
            console.log(error);
        }
    };

    const completeTaskHandler = async (id) => {
        try {
            const updatedTask = await completeTask(id);

            setTasks((prev) =>
                prev.map((task) =>
                    task.id === id ? updatedTask : task
                )
            );
        } catch (error) {
            console.log(error);
        }
    };

    const updateTaskHandler = async (taskData) => {
        try {
            const updatedTask = await updateTask(editingTask.id, taskData);

            setTasks((prev) =>
                prev.map((task) =>
                    task.id === updatedTask.id ? updatedTask : task
                )
            );

            setEditingTask(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
    <div className="min-h-screen bg-slate-100">
        <Navbar />

        <div className="max-w-7xl mx-auto p-8">

            <StatsCards tasks={tasks} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div>
                    <TaskForm
                        onSubmit={editingTask ? updateTaskHandler : createTaskHandler}
                        initialData={editingTask}
                    />
                </div>
                

                <div className="lg:col-span-2">
                    <div className="flex gap-4 mb-6">

                        <div className="flex-1">
                            <SearchBar
                                value={search}
                                onChange={setSearch}
                            />
                        </div>

                        <StatusFilter
                            value={status}
                            onChange={setStatus}
                        />

                        <SortSelect
                            value={ordering}
                            onChange={setOrdering}
                        />

                    </div>
                    <TaskList
                        tasks={tasks}
                        onDelete={deleteTaskHandler}
                        onComplete={completeTaskHandler}
                        onEdit={setEditingTask}
                    />
                </div>

            </div>

        </div>
    </div>
);
}

export default Dashboard;