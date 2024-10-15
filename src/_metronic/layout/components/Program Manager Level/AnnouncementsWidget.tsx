// src/components/widgets/AnnouncementsWidget.tsx

import React from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
`;

const WidgetHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.2em;
    color: #333;
`;

const Description = styled.p`
    margin: 0;
    font-size: 0.9em;
    color: #666;
`;

const AnnouncementList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const AnnouncementItem = styled.li`
    padding: 10px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
    }
`;

const AnnouncementTitle = styled.h4`
    margin: 0;
    font-size: 1em;
    color: #333;
`;

const AnnouncementContent = styled.p`
    margin: 5px 0 0;
    font-size: 0.9em;
    color: #666;
`;

const AnnouncementDate = styled.span`
    font-size: 0.8em;
    color: #999;
`;

interface Announcement {
    id: number;
    title: string;
    content: string;
    date: string;
}

interface AnnouncementsWidgetProps {
    className?: string;
    color?: string;
    title: string;
    description: string;
    announcements?: Announcement[];
}

const AnnouncementsWidget: React.FC<AnnouncementsWidgetProps> = ({ className, title, description, announcements = [] }) => {
    return (
        <WidgetContainer className={className}>
            <WidgetHeader>
                <Title>{title}</Title>
            </WidgetHeader>
            <Description>{description}</Description>
            <AnnouncementList>
                {announcements.map(announcement => (
                    <AnnouncementItem key={announcement.id}>
                        <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
                        <AnnouncementContent>{announcement.content}</AnnouncementContent>
                        <AnnouncementDate>{announcement.date}</AnnouncementDate>
                    </AnnouncementItem>
                ))}
            </AnnouncementList>
        </WidgetContainer>
    );
};

export default AnnouncementsWidget;