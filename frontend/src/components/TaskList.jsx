import TaskCard from "./TaskCard";

function TaskList({ tasks, onDelete, onComplete, onEdit }) {
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