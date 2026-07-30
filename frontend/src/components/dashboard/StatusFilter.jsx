function StatusFilter({ value, onChange }) {

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                w-full
                md:w-auto
                rounded-xl
                border
                bg-white
                px-4
                py-3
                shadow
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "
        >
            <option value="">All</option>
            <option value="todo">Todo</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
        </select>
    );
}

export default StatusFilter;