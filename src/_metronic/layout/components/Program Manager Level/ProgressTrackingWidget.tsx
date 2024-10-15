// src/_metronic/layout/components/Program Manager Level/ProgressTrackingWidget.tsx

import React from 'react';

interface Progress {
    id: number;
    supervisor: string;
    progress: string;
    date: string;
}

interface ProgressTrackingWidgetProps {
    className?: string;
    color: string;
    title: string;
    description: string;
    progress: Progress[];
}

const ProgressTrackingWidget: React.FC<ProgressTrackingWidgetProps> = ({ className, color, title, description, progress }) => {
    return (
        <div className={`card ${className}`}>
            <div className={`card-header bg-${color} text-white`}>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-body">
                <ul>
                    {progress.map(prog => (
                        <li key={prog.id}>
                            <strong>{prog.supervisor}</strong> - {prog.progress} (Date: {prog.date})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProgressTrackingWidget;