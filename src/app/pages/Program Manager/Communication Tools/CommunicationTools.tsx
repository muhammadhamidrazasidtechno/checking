// src/pages/ProgramManager/CommunicationTools.tsx

import React from 'react';
import styled from 'styled-components';
import MessagingWidget from '../../../../_metronic/layout/components/Program Manager Level/MessagingWidget';
import AnnouncementsWidget from '../../../../_metronic/layout/components/Program Manager Level/AnnouncementsWidget';
import NotificationsWidget from '../../../../_metronic/layout/components/Program Manager Level/NotificationsWidget';

const CommunicationContainer = styled.div`
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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
`;

const CommunicationTools: React.FC = () => {
    const sampleMessages = [
        { id: 1, sender: 'John Doe', message: 'Please review the latest report.', timestamp: '2023-10-01 10:00' },
        { id: 2, sender: 'Jane Smith', message: 'Meeting at 3 PM.', timestamp: '2023-10-01 09:00' },
    ];

    const sampleAnnouncements = [
        { id: 1, title: 'New Program Launch', content: 'We are excited to announce the launch of our new program.', date: '2023-10-01' },
        { id: 2, title: 'Holiday Schedule', content: 'Please note the holiday schedule for the upcoming month.', date: '2023-10-01' },
    ];

    const sampleNotifications = [
        { id: 1, text: 'Your task is due tomorrow.', date: '2023-10-01 08:00' },
        { id: 2, text: 'You have a new message from Jane Smith.', date: '2023-10-01 07:00' },
    ];

    return (
        <CommunicationContainer>
            <Header>
                <h1>Communication Tools</h1>
            </Header>
            <Main>
                <div>
                    <h2>Messaging</h2>
                    <MessagingWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='primary'
                        title='Messaging'
                        description='Communicate with supervisors'
                        messages={sampleMessages}
                    />
                </div>
                <div>
                    <h2>Announcements</h2>
                    <AnnouncementsWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='info'
                        title='Announcements'
                        description='Program-level announcements'
                        announcements={sampleAnnouncements}
                    />
                </div>
                <div>
                    <h2>Notifications</h2>
                    <NotificationsWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='warning'
                        title='Notifications'
                        description='Stay updated with notifications'
                        notifications={sampleNotifications}
                    />
                </div>
            </Main>
        </CommunicationContainer>
    );
};

export default CommunicationTools;