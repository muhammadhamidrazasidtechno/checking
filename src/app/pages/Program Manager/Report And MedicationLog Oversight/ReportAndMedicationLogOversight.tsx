// src/pages/ProgramManager/ReportAndMedicationLogOversight.tsx

import React from 'react';
import styled from 'styled-components';
import ReportWidget from '../../../../_metronic/layout/components/Program Manager Level/ReportWidget'
import MedicationLogWidget from '../../../../_metronic/layout/components/Program Manager Level/MessagingWidget'
const OversightContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
`;

const Header = styled.header`
    background-color: #007BFF;
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

const ReportAndMedicationLogOversight: React.FC = () => {
    const sampleReports = [
        { id: 1, title: 'Monthly Report', status: 'Pending', date: '2023-10-01' },
        { id: 2, title: 'Weekly Report', status: 'Approved', date: '2023-10-01' },
    ];

    const sampleMedicationLogs = [
        { id: 1, sender: 'John Doe', message: 'Aspirin', timestamp: '100mg'},
        { id: 2, sender: 'message Smith', message: 'Ibuprofen', timestamp: '200mg'},
    ];

    return (
        <OversightContainer>
            <Header>
                <h1>Report and Medication Log Oversight</h1>
            </Header>
            <Main>
                <div>
                    <h2>Reports</h2>
                    <ReportWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='primary'
                        title='Reports'
                        description='Ensure accuracy in reporting'
                        reports={sampleReports}
                    />
                </div>
                <div>
                    <h2>Medication Logs</h2>
                    <MedicationLogWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='info'
                        title='Medication Logs'
                        description='Ensure compliance in medication logs'
                        messages={sampleMedicationLogs}
                    />
                </div>
            </Main>
        </OversightContainer>
    );
};

export default ReportAndMedicationLogOversight;