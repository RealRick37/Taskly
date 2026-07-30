function SortSelect({ value, onChange }) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                rounded-xl
                border
                bg-white
                w-full
                md:w-auto
                px-4
                py-3
                shadow
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
            "
        >
            <option value="-created_at">
                Newest
            </option>

            <option value="created_at">
                Oldest
            </option>

            <option value="deadline">
                Deadline ↑
            </option>

            <option value="-deadline">
                Deadline ↓
            </option>

            <option value="-updated_at">
                Recently Updated
            </option>
        </select>
    );
}

export default SortSelect;