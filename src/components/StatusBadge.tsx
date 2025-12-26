type StatusBadgeProps = {
    status: "pending" | "shipped" | "delivered" | "cancelled";
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const styles: Record<string, string> = {
        pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
        shipped: "bg-blue-100 text-blue-700 border-blue-200",
        delivered: "bg-green-100 text-green-700 border-green-200",
        cancelled: "bg-red-100 text-red-700 border-red-200",
    };

    return (
        <span
            className={`text-xs font-bold capitalize px-3 py-1 rounded-full border ${styles[status]}`}
        >
            {status}
        </span>
    );
};

export default StatusBadge;
