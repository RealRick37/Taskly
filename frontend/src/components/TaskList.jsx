function TaskList({ tasks }) {
    return (
        <>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                </div>
            ))}
        </>
    );
}

export default TaskList;