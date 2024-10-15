// src/_metronic/layout/components/Program Manager Level/ReportWidget.tsx

import React from 'react';

interface Report {
    id: number;
    title: string;
    status: string;
    date: string;
}

interface ReportWidgetProps {
    className?: string;
    color: string;
    title: string;
    description: string;
    reports: Report[];
}

const ReportWidget: React.FC<ReportWidgetProps> = ({ className, color, title, description, reports }) => {
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
                            <strong>{report.title}</strong> - {report.status} ({report.date})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ReportWidget;