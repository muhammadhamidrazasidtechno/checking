// src/pages/ProgramManager/TeamManagement.tsx

import React from 'react';
import styled from 'styled-components';
import TeamListWidget from '../../../../_metronic/layout/components/Program Manager Level/TeamListWidget';
import SupervisorActionsWidget from '../../../../_metronic/layout/components/Program Manager Level/SupervisorActionsWidget';
import TeamAssignmentsWidget from '../../../../_metronic/layout/components/Program Manager Level/TeamAssignmentsWidget';

const ManagementContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
`;

const Header = styled.header`
    background-color: #28a745;
    color: white;
    padding: 10px 0;
    text-align: center;
`;

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
`;

const TeamManagement: React.FC = () => {
    const sampleTeams = [
        { id: 1, name: 'Team A', members: 10 },
        { id: 2, name: 'Team B', members: 8 },
    ];

    const sampleSupervisorActions = [
        { id: 1, action: 'Approved Leave for John', date: '2023-10-01' },
        { id: 2, action: 'Reviewed Performance of Jane', date: '2023-10-01' },
    ];

    const sampleTeamAssignments = [
        { id: 1, teamName: 'Team A', task: 'Project X', dueDate: '2023-10-10' },
        { id: 2, teamName: 'Team B', task: 'Project Y', dueDate: '2023-10-15' },
    ];

    return (
        <ManagementContainer>
            <Header>
                <h1>Team Management</h1>
            </Header>
            <Main>
                <div>
                    <h2>Teams</h2>
                    <TeamListWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='success'
                        title='Teams'
                        description='Oversee multiple teams'
                        teams={sampleTeams}
                    />
                </div>
                <div>
                    <h2>Supervisor Actions</h2>
                    <SupervisorActionsWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='warning'
                        title='Supervisor Actions'
                        description='Approve supervisor actions'
                        actions={sampleSupervisorActions}
                    />
                </div>
                <div>
                    <h2>Team Assignments</h2>
                    <TeamAssignmentsWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='info'
                        title='Team Assignments'
                        description='Manage team assignments'
                        assignments={sampleTeamAssignments}
                    />
                </div>
            </Main>
        </ManagementContainer>
    );
};

export default TeamManagement;