import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, onDelete, onComplete, onEdit }) {

    if (tasks.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow p-12 text-center">

                <DotLottieReact
                    src="/animations/empty-tasks.lottie"
                    autoplay
                    loop
                    className="w-64 h-64 mx-auto"
                />

                <h2 className="text-2xl font-semibold mt-4">
                    No tasks yet
                </h2>

                <p className="text-slate-500 mt-2">
                    Create your first task to get started.
                </p>

            </div>
        );
    }

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onComplete={onComplete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
}

export default TaskList;