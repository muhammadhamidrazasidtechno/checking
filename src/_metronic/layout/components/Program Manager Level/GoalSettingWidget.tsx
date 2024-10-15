// src/_metronic/layout/components/Program Manager Level/GoalSettingWidget.tsx

import React from 'react';

interface Goal {
    id: number;
    supervisor: string;
    goal: string;
    dueDate: string;
}

interface GoalSettingWidgetProps {
    className?: string;
    color: string;
    title: string;
    description: string;
    goals: Goal[];
}

const GoalSettingWidget: React.FC<GoalSettingWidgetProps> = ({ className, color, title, description, goals }) => {
    return (
        <div className={`card ${className}`}>
            <div className={`card-header bg-${color} text-white`}>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-body">
                <ul>
                    {goals.map(goal => (
                        <li key={goal.id}>
                            <strong>{goal.supervisor}</strong> - {goal.goal} (Due: {goal.dueDate})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GoalSettingWidget;