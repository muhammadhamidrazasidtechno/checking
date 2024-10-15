// src/pages/ProgramManager/ProgramManagerDashboard.tsx

import React from 'react';
import styled from 'styled-components';
import { StatisticsWidget5 } from '../../../../_metronic/partials/widgets';

const DashboardContainer = styled.div`
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

const ProgramManagerDashboard: React.FC = () => {
    return (
        <DashboardContainer>
            <Header>
                <h1>Program Manager Dashboard</h1>
            </Header>
            <Main>
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='timer'
                    color='danger'
                    iconColor='gray-100'
                    title='Performance Metrics'
                    description='Task Completion: 85%'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='calendar'
                    color='primary'
                    iconColor='gray-100'
                    title='Scheduling and Task Management'
                    description='Next Task: Team Meeting at 3 PM'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='heart'
                    color='success'
                    iconColor='gray-100'
                    title='Care Plans Management'
                    description='Active Care Plans: 12'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='message'
                    color='info'
                    iconColor='gray-100'
                    title='Communication Tools'
                    description='New Messages: 5'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='file'
                    color='warning'
                    iconColor='gray-100'
                    title='Report and Medication Log Oversight'
                    description='Medical Reports Page'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='group'
                    color='danger'
                    iconColor='gray-100'
                    title='Team Management'
                    description='Teams Managed: 3'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='star'
                    color='dark'
                    iconColor='gray-100'
                    title='Performance Management'
                    description='Performance Reviews: 2 Pending'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='user-plus'
                    color='dark'
                    iconColor='gray-100'
                    title='Onboarding'
                    description='New Hires: 1'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='file-alt'
                    color='danger'
                    iconColor='gray-100'
                    title='Documentation'
                    description='Documents Updated: 4'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='chart-bar'
                    color='primary'
                    iconColor='gray-100'
                    title='Reporting'
                    description='Reports Generated: 3'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='address-book'
                    color='success'
                    iconColor='gray-100'
                    title='Directory'
                    description='Total Employees: 25'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
            </Main>
        </DashboardContainer>
    );
};

export default ProgramManagerDashboard;