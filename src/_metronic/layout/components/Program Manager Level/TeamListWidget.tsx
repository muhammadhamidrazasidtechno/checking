// src/_metronic/layout/components/Program Manager Level/TeamListWidget.tsx

import React from 'react';

interface Team {
    id: number;
    name: string;
    members: number;
}

interface TeamListWidgetProps {
    className?: string;
    color: string;
    title: string;
    description: string;
    teams: Team[];
}

const TeamListWidget: React.FC<TeamListWidgetProps> = ({ className, color, title, description, teams }) => {
    return (
        <div className={`card ${className}`}>
            <div className={`card-header bg-${color} text-white`}>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-body">
                <ul>
                    {teams.map(team => (
                        <li key={team.id}>
                            <strong>{team.name}</strong> - {team.members} members
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TeamListWidget;