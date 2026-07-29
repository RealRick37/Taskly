function ConfirmModal({
    open,
    title,
    message,
    onConfirm,
    onCancel,
}) {

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">

                <h2 className="text-xl font-bold mb-3">
                    {title}
                </h2>

                <p className="text-gray-600 mb-6">
                    {message}
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={onCancel}
                        className="
                            px-4 py-2
                            rounded-lg
                            border
                            hover:bg-gray-100
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="
                            px-4 py-2
                            rounded-lg
                            bg-red-600
                            hover:bg-red-700
                            text-white
                        "
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ConfirmModal;