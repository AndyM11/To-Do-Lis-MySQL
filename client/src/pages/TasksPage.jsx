import React, { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

const TaskPage = () => {
    const { tasks, loadTasks } = useTasks();

    useEffect(() => {
        loadTasks();
    }, []);

    const renderMain = () => {
        if (tasks.length === 0) return <p>No Tasks Yet</p>;
        return tasks.map((task) => <TaskCard key={task.id} task={task} />);
    };

    return (
        <div>
            <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
            <div className="grid grid-cols-3 gap-2">
                {renderMain()}
            </div>
        </div>
    );
};

export default TaskPage;
