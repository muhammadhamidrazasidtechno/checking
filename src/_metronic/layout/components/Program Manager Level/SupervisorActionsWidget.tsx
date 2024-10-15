// src/_metronic/layout/components/Program Manager Level/SupervisorActionsWidget.tsx

import React from 'react';

interface SupervisorAction {
    id: number;
    action: string;
    date: string;
}

interface SupervisorActionsWidgetProps {
    className?: string;
    color: string;
    title: string;
    description: string;
    actions: SupervisorAction[];
}

const SupervisorActionsWidget: React.FC<SupervisorActionsWidgetProps> = ({ className, color, title, description, actions }) => {
    return (
        <div className={`card ${className}`}>
            <div className={`card-header bg-${color} text-white`}>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-body">
                <ul>
                    {actions.map(action => (
                        <li key={action.id}>
                            <strong>{action.action}</strong> - {action.date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SupervisorActionsWidget;