// src/pages/ProgramManager/PerformanceMetrics.tsx

import React from 'react';
import styled from 'styled-components';
import { StatisticsWidget5 } from '../../../../_metronic/partials/widgets';

const MetricsContainer = styled.div`
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

const PerformanceMetrics: React.FC = () => {
    return (
        <MetricsContainer>
            <Header>
                <h1>Performance Metrics</h1>
            </Header>
            <Main>
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='check-circle'
                    color='primary'
                    iconColor='gray-100'
                    title='Task Completion Rate'
                    description='85% of tasks completed on time'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='medkit'
                    color='danger'
                    iconColor='gray-100'
                    title='Medication Management Accuracy'
                    description='98% accuracy in medication management'
                    titleColor='gray-100'
                    descriptionColor='gray-100'
                />
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
                
            </Main>
        </MetricsContainer>
    );
};

export default PerformanceMetrics;