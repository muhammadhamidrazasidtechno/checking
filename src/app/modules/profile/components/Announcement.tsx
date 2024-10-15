// Announcement.tsx
import React from 'react';
import './Announcement.css';

interface AnnouncementProps {
  message: string;
}

const Announcement: React.FC<AnnouncementProps> = ({ message }) => {
  return (
    <div className="announcement-container">
      <div className="announcement-message">
        {message}
      </div>
    </div>
  );
};

export default Announcement;