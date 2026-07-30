import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TaskCard from "./TaskCard";
import { AnimatePresence } from "framer-motion";

function TaskList({ tasks, onDelete, onComplete, onEdit }) {

    if (tasks.length === 0) {
        return (
            <div className="
                bg-white
                rounded-2xl
                shadow
                p-6
                sm:p-8
                md:p-12
                text-center
            ">

                <DotLottieReact
                    src="/animations/empty-tasks.lottie"
                    autoplay
                    loop
                    className="
                        mx-auto
                        w-44 h-44
                        sm:w-56 sm:h-56
                        md:w-64 md:h-64
                        lg:w-72 lg:h-72
                    "
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
            <AnimatePresence mode="popLayout">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                        onEdit={onEdit}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

export default TaskList;