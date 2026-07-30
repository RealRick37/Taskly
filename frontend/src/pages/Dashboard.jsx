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
import { Loader2 } from "lucide-react";
import { getMe } from "../services/authService";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [ordering, setOrdering] = useState("-created_at");
    const [deleteTaskId, setDeleteTaskId] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
    fetchTasks();
    }, [search, status, ordering]);

    const fetchTasks = async () => {
        setLoading(true);

        try {
            const data = await getTasks({
                search,
                status,
                ordering,
            });

            const me = await getMe();
            setUser(me);

            setTasks(data);
        } catch (error) {
            console.log(error);
            toast.error("Couldn't load tasks.");
        } finally {
        setLoading(false);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <Navbar user={user} />

        <div
            className="
                max-w-7xl
                mx-auto
                px-4
                sm:px-6 
                lg:px-8
                py-6
            "
        >

            <StatsCards tasks={tasks} />

            <div
                className="
                    grid
                    grid-cols-1
                    xl:grid-cols-3
                    gap-6
                    lg:gap-8
                "
            >

                <div>
                    <TaskForm
                        onSubmit={editingTask ? updateTaskHandler : createTaskHandler}
                        initialData={editingTask}
                    />
                </div>
                

                <div className="lg:col-span-2">
                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            gap-4
                            mb-6
                        "
                    >

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
                    {loading ? (
                        <div className="flex justify-center items-center py-16">
                            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                        </div>
                        
                    ) : (
                        <TaskList
                            tasks={tasks}
                            onDelete={openDeleteModal}
                            onComplete={completeTaskHandler}
                            onEdit={setEditingTask}
                        />
                    )}

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