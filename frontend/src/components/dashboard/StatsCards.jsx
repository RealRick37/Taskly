import {
    ClipboardList,
    CheckCircle2,
    Clock3,
    Circle,
} from "lucide-react";

function StatsCards({ tasks }) {

    const total = tasks.length;
    const completed = tasks.filter(t => t.status === "done").length;
    const progress = tasks.filter(t => t.status === "in_progress").length;
    const todo = tasks.filter(t => t.status === "todo").length;

    const cards = [
        {
            title: "Total",
            value: total,
            icon: ClipboardList,
            color: "bg-slate-800",
        },
        {
            title: "Completed",
            value: completed,
            icon: CheckCircle2,
            color: "bg-green-500",
        },
        {
            title: "In Progress",
            value: progress,
            icon: Clock3,
            color: "bg-blue-500",
        },
        {
            title: "Todo",
            value: todo,
            icon: Circle,
            color: "bg-yellow-500",
        },
    ];

    return (
        <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-4
                gap-5
                mb-8
            "
        >

            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.title}
                        className="
                            bg-white
                            rounded-2xl
                            shadow
                            p-5
                            flex
                            justify-between
                            items-center
                            hover:shadow-lg
                            transition
                            "
                    >

                        <div>

                            <p className="text-slate-500 text-sm">
                                {card.title}
                            </p>

                            <h2 className="text-3xl font-bold mt-2">
                                {card.value}
                            </h2>

                        </div>

                        <div
                            className={`${card.color} p-3 rounded-xl text-white`}
                        >
                            <Icon size={26} />
                        </div>

                    </div>
                );
            })}

        </div>
    );
}

export default StatsCards;