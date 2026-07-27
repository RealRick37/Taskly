import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { getTasks, createTask, deleteTask } from "../services/taskService";

function Dashboard() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const data = await getTasks();
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

    return (
        <>
            <h1>Dashboard</h1>
            <TaskForm onCreate={createTaskHandler} />
            <TaskList tasks={tasks} onDelete={deleteTaskHandler} />
        </>
    );
}

export default Dashboard;