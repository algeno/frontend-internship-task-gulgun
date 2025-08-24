"use client";

function StatusBadge({ isOnline }: { isOnline: boolean }) {
  const color = isOnline ? "green" : "red";

  const colorVariants = {
    green: "bg-green-100 text-green-800 ",
    red: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex items-center ${colorVariants[color]} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
      {isOnline ? "Online" : "Offline"}
    </span>
  );
}

export default StatusBadge;
