// src/_metronic/layout/components/Program Manager Level/TeamAssignmentsWidget.tsx

import React from 'react';

interface TeamAssignment {
    id: number;
    teamName: string;
    task: string;
    dueDate: string;
}

interface TeamAssignmentsWidgetProps {
    className?: string;
    color: string;
    title: string;
    description: string;
    assignments: TeamAssignment[];
}

const TeamAssignmentsWidget: React.FC<TeamAssignmentsWidgetProps> = ({ className, color, title, description, assignments }) => {
    return (
        <div className={`card ${className}`}>
            <div className={`card-header bg-${color} text-white`}>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-body">
                <ul>
                    {assignments.map(assignment => (
                        <li key={assignment.id}>
                            <strong>{assignment.teamName}</strong> - {assignment.task} (Due: {assignment.dueDate})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TeamAssignmentsWidget;