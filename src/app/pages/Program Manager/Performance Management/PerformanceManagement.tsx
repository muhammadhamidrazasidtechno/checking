// src/pages/ProgramManager/PerformanceManagement.tsx

import React from 'react';
import styled from 'styled-components';
import PerformanceReportsWidget from '../../../../_metronic/layout/components/Program Manager Level/PerformanceReportsWidget';
import GoalSettingWidget from '../../../../_metronic/layout/components/Program Manager Level/GoalSettingWidget';
import ProgressTrackingWidget from '../../../../_metronic/layout/components/Program Manager Level/ProgressTrackingWidget';

const ManagementContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
`;

const Header = styled.header`
    background-color: #007bff;
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

const PerformanceManagements: React.FC = () => {
    const samplePerformanceReports = [
        { id: 1, name: 'John Doe', report: 'Exceeded expectations', date: '2023-10-01' },
        { id: 2, name: 'Jane Smith', report: 'Met expectations', date: '2023-10-01' },
    ];

    const sampleGoals = [
        { id: 1, supervisor: 'John Doe', goal: 'Increase team productivity by 10%', dueDate: '2023-12-31' },
        { id: 2, supervisor: 'Jane Smith', goal: 'Improve customer satisfaction by 15%', dueDate: '2023-12-31' },
    ];

    const sampleProgress = [
        { id: 1, supervisor: 'John Doe', progress: '50%', date: '2023-10-10' },
        { id: 2, supervisor: 'Jane Smith', progress: '30%', date: '2023-10-10' },
    ];

    return (
        <ManagementContainer>
            <Header>
                <h1>Performance Management</h1>
            </Header>
            <Main>
                <div>
                    <h2>Performance Reports</h2>
                    <PerformanceReportsWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='primary'
                        title='Performance Reports'
                        description='Review performance reports'
                        reports={samplePerformanceReports}
                    />
                </div>
                <div>
                    <h2>Goal Setting</h2>
                    <GoalSettingWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='success'
                        title='Goal Setting'
                        description='Set goals for supervisors'
                        goals={sampleGoals}
                    />
                </div>
                <div>
                    <h2>Progress Tracking</h2>
                    <ProgressTrackingWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='info'
                        title='Progress Tracking'
                        description='Track progress'
                        progress={sampleProgress}
                    />
                </div>
            </Main>
        </ManagementContainer>
    );
};

export default PerformanceManagements;