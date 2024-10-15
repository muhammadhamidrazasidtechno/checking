// src/components/widgets/NotificationsWidget.tsx

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

const NotificationList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const NotificationItem = styled.li`
    padding: 10px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
    }
`;

const NotificationText = styled.span`
    font-size: 1em;
    color: #333;
`;

const NotificationDate = styled.span`
    font-size: 0.9em;
    color: #999;
    float: right;
`;

interface Notification {
    id: number;
    text: string;
    date: string;
}

interface NotificationsWidgetProps {
    color:string;
    className?: string;
    title: string;
    description: string;
    notifications?: Notification[];
}

const NotificationsWidget: React.FC<NotificationsWidgetProps> = ({ color,className, title, description, notifications = [] }) => {
    return (
        <WidgetContainer className={className}>
            <WidgetHeader>
                <Title>{title}</Title>
            </WidgetHeader>
            <Description>{description}</Description>
            <NotificationList>
                {notifications.map(notification => (
                    <NotificationItem key={notification.id}>
                        <NotificationText>{notification.text}</NotificationText>
                        <NotificationDate>{notification.date}</NotificationDate>
                    </NotificationItem>
                ))}
            </NotificationList>
        </WidgetContainer>
    );
};

export default NotificationsWidget;