import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import StatsCards from "../components/dashboard/StatsCards";
import SearchBar from "../components/dashboard/SearchBar";
import StatusFilter from "../components/dashboard/StatusFilter";
import SortSelect from "../components/dashboard/SortSelect";
import { getTasks, createTask, deleteTask, completeTask, updateTask } from "../services/taskService";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import ConfirmModal from "../components/ConfirmModal";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [ordering, setOrdering] = useState("-created_at");
    const [deleteTaskId, setDeleteTaskId] = useState(null);
    const [deleting, setDeleting] = useState(false);

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
            toast.error("Couldn't load tasks.");
        }
    };

    const createTaskHandler = async (task) => {
        try {
            const newTask = await createTask(task);

            toast.success("Task created.");

            setTasks((prev) => [newTask, ...prev]);
        } catch (error) {
            console.log(error);
            toast.error("Failed to create task.");
        }
    };

    const openDeleteModal = (id) => {
        setDeleteTaskId(id);
    };

    const confirmDelete = async () => {
        try {
            await deleteTask(deleteTaskId);

            setTasks((prev) =>
                prev.filter(task => task.id !== deleteTaskId)
            );
            
            toast.success("Task deleted.");
            setDeleteTaskId(null);

        } catch (error) {
            toast.error("Failed to delete task.");
        } finally {
            setDeleting(false);
        }
    };

    const completeTaskHandler = async (id) => {
        try {
            const updatedTask = await completeTask(id);

            toast.success("Task completed.");

            setTasks((prev) =>
                prev.map((task) =>
                    task.id === id ? updatedTask : task
                )
            );
        } catch (error) {
            console.log(error);
            toast.error("Failed to complete task.");
        }
    };

    const updateTaskHandler = async (taskData) => {
        try {
            const updatedTask = await updateTask(editingTask.id, taskData);

            toast.success("Task updated.");

            setTasks((prev) =>
                prev.map((task) =>
                    task.id === updatedTask.id ? updatedTask : task
                )
            );

            setEditingTask(null);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.");
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
                        onDelete={openDeleteModal}
                        onComplete={completeTaskHandler}
                        onEdit={setEditingTask}
                    />

                    <ConfirmModal
                        open={deleteTaskId !== null}
                        title="Delete Task"
                        message="Are you sure you want to delete this task?"
                        onConfirm={confirmDelete}
                        onCancel={() => setDeleteTaskId(null)}
                    />
                </div>

            </div>

        </div>
    </div>
);
}

export default Dashboard;