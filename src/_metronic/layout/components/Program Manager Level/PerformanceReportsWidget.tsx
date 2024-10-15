// src/_metronic/layout/components/Program Manager Level/PerformanceReportsWidget.tsx

import React from 'react';

interface PerformanceReport {
    id: number;
    name: string;
    report: string;
    date: string;
}

interface PerformanceReportsWidgetProps {
    className?: string;
    color: string;
    title: string;
    description: string;
    reports: PerformanceReport[];
}

const PerformanceReportsWidget: React.FC<PerformanceReportsWidgetProps> = ({ className, color, title, description, reports }) => {
    return (
        <div className={`card ${className}`}>
            <div className={`card-header bg-${color} text-white`}>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-body">
                <ul>
                    {reports.map(report => (
                        <li key={report.id}>
                            <strong>{report.name}</strong> - {report.report} (Date: {report.date})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PerformanceReportsWidget;