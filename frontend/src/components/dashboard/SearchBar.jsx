import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
    return (
        <div className="relative">

            <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search tasks..."
                className="
                    w-full
                    rounded-xl
                    border
                    bg-white
                    pl-12
                    pr-4
                    py-3
                    shadow
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "
            />

        </div>
    );
}

export default SearchBar;