// src/components/widgets/MessagingWidget.tsx

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

const MessageList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const MessageItem = styled.li`
    padding: 10px 0;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
    }
`;

const MessageSender = styled.span`
    font-size: 1em;
    color: #333;
    font-weight: bold;
`;

const MessageContent = styled.p`
    margin: 5px 0 0;
    font-size: 0.9em;
    color: #666;
`;

const MessageTimestamp = styled.span`
    font-size: 0.8em;
    color: #999;
`;

interface Message {
    id: number;
    sender: string;
    message: string;
    timestamp: string;
}

interface MessagingWidgetProps {
    className?: string;
    color?: string;
    title: string;
    description: string;
    messages?: Message[];
}

const MessagingWidget: React.FC<MessagingWidgetProps> = ({ className, title, description, messages = [] }) => {
    return (
        <WidgetContainer className={className}>
            <WidgetHeader>
                <Title>{title}</Title>
            </WidgetHeader>
            <Description>{description}</Description>
            <MessageList>
                {messages.map(message => (
                    <MessageItem key={message.id}>
                        <MessageSender>{message.sender}</MessageSender>
                        <MessageContent>{message.message}</MessageContent>
                        <MessageTimestamp>{message.timestamp}</MessageTimestamp>
                    </MessageItem>
                ))}
            </MessageList>
        </WidgetContainer>
    );
};

export default MessagingWidget;