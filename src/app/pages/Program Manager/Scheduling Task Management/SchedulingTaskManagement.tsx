// src/pages/ProgramManager/SchedulingTaskManagement.tsx

import React from 'react';
import styled from 'styled-components';
import { StatisticsWidget5, TaskListWidget } from '../../../../_metronic/partials/widgets';

const ManagementContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
`;

const Header = styled.header`
    background-color: #4CAF50;
    color: white;
    padding: 10px 0;
    text-align: center;
`;

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
`;

const SchedulingTaskManagement: React.FC = () => {
    const sampleTasks: any[] = [
        { id: 1, name: 'Task 1', status: 'pending' },
        { id: 2, name: 'Task 2', status: 'completed' },
        { id: 3, name: 'Task 3', status: 'pending' },
    ];

    return (
        <ManagementContainer>
            <Header>
                <h1>Scheduling and Task Management</h1>
            </Header>
            <Main>
                <div>
                    <h2>Scheduler</h2>
                    <StatisticsWidget5
                        className='card-xl-stretch mb-5 mb-xl-8'
                        svgIcon='chart-line'
                        color='success'
                        iconColor='gray-100'
                        title='Overall Program Effectiveness'
                        description='Overall effectiveness: 90%'
                        titleColor='gray-100'
                        descriptionColor='gray-100'
                    />
                </div>
                <div>
                    <h2>Task List</h2>
                    <TaskListWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='success'
                        title='Task Assignments'
                        description='View and manage task assignments'
                        tasks={sampleTasks}
                    />
                </div>
            </Main>
        </ManagementContainer>
    );
};

export default SchedulingTaskManagement;