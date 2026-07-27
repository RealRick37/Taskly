function TaskList({ tasks, onDelete }) {
    return (
        <>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>

                    <button
                        onClick={() => onDelete(task.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
}

export default TaskList;