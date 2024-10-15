// src/_metronic/layout/components/Program Manager Level/MedicationLogWidget.tsx

import React from 'react';

interface MedicationLog {
    id: number;
    patientName: string;
    medication: string;
    dosage: string;
    date: string;
}

interface MedicationLogWidgetProps {
    className?: string;
    color: string;
    title: string;
    description: string;
    medicationLogs: MedicationLog[];
}

const MedicationLogWidget: React.FC<MedicationLogWidgetProps> = ({ className, color, title, description, medicationLogs }) => {
    return (
        <div className={`card ${className}`}>
            <div className={`card-header bg-${color} text-white`}>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-body">
                <ul>
                    {medicationLogs.map(log => (
                        <li key={log.id}>
                            <strong>{log.patientName}</strong> - {log.medication} ({log.dosage}) on {log.date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MedicationLogWidget;