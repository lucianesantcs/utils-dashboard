import React from "react";

interface ITasks {
  id: number;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Pending";
  dueDate: string;
}

const Tasks = () => {
  const tasks: ITasks[] = [
    {
      id: 1,
      title: "Develop Dashboard",
      description: "Create main dashboard interface with cards and metrics",
      status: "In Progress",
      dueDate: "2024-02-15",
    },
    {
      id: 2,
      title: "Implement Authentication",
      description: "Add user login and registration system",
      status: "Pending",
      dueDate: "2024-02-20",
    },
    {
      id: 3,
      title: "Optimize Performance",
      description: "Improve application loading time and responsiveness",
      status: "Completed",
      dueDate: "2024-02-25",
    },
  ];

  const statusClass = (
    task: ITasks["status"],
    type: "Border" | "Background"
  ) => {
    const statusBackground = {
      Completed: "bg-green-100 text-green-600",
      "In Progress": "bg-yellow-100 text-yellow-600",
      Pending: "bg-red-100 text-red-600",
    };

    const statusBorder = {
      Completed: "border-green-200",
      "In Progress": "border-yellow-200",
      Pending: "border-red-200",
    };

    return type === "Border" ? statusBorder[task] : statusBackground[task];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>

        <section className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4 ${statusClass(
                task.status as ITasks["status"],
                "Border"
              )}`}
            >
              <div className="flex flex-col">
                <h2 className="flex items-center gap-1 text-xl font-semibold text-gray-800">
                  {task.title}
                  <span
                  className={`px-3 py-1 text-center text-xs rounded ${statusClass(
                    task.status,
                    "Background"
                  )}`}
                >
                  {task.status}
                </span>
                </h2>

                <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Due Date: {task.dueDate}
                </p>
              </div>

              <section className="flex space-x-4">
                <button className="px-2 py-1 cursor-pointer text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                  Edit
                </button>

                {task.status !== "Completed" && (
                  <button className="px-2 py-1 cursor-pointer text-white bg-green-600 rounded hover:bg-green-700 transition-colors">
                    Mark as Complete
                  </button>
                )}

                <button className="px-2 py-1 cursor-pointer text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                  Delete
                </button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
