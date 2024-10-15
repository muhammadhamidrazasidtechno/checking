import React, { useState } from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import 'antd/dist/reset.css'; // For Ant Design styles
import dayjs from 'dayjs';

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
`;

const TabButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#007bff' : '#e9ecef')};
  color: ${({ active }) => (active ? '#fff' : '#495057')};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#d6d6d6')};
  }
`;

const StyledDateRangePicker = styled(DatePicker.RangePicker)`
  margin-right: 10px;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatBox = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 48%;
  text-align: center;
`;

const StatTitle = styled.h3`
  font-size: 18px;
  color: #333;
`;

const StatValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const TableHeadCell = styled.th`
  padding: 15px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: left;
`;

interface Record {
  date: string;
  type: string;
  status: string;
  hours: number;
  minutes: number;
}

const TotalDaysPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'month' | 'week' | 'day'>('month');
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);

  const handleTabClick = (tab: 'month' | 'week' | 'day') => {
    setActiveTab(tab);
  };

  // Update this function to match the expected signature
  const handleDateRangeChange = (dates: [dayjs.Dayjs, dayjs.Dayjs] | null, dateStrings: [string, string]) => {
    setDateRange(dates);
  };

  // Mock Data
  const totalDays = 30;
  const totalWorkingDays = 22;
  const totalWorkingHours = 176; // Example total hours
  const totalWorkingMinutes = 20; // Example total minutes

  const records: Record[] = [
    { date: '2024-09-01', type: 'Working', status: 'Present', hours: 8, minutes: 0 },
    { date: '2024-09-02', type: 'Weekend', status: 'N/A', hours: 0, minutes: 0 },
    { date: '2024-09-03', type: 'Working', status: 'Absent', hours: 7, minutes: 30 },
    // More records
  ];

  return (
    <Container>
      <Header>
        <Title>Total Days and Working Days</Title>
        <Subtitle>Select a period to view details.</Subtitle>
      </Header>

      <FilterSection>
        <TabButton active={activeTab === 'month'} onClick={() => handleTabClick('month')}>Monthly</TabButton>
        <TabButton active={activeTab === 'week'} onClick={() => handleTabClick('week')}>Weekly</TabButton>
        <TabButton active={activeTab === 'day'} onClick={() => handleTabClick('day')}>Daily</TabButton>

        <StyledDateRangePicker
          onChange={() => handleDateRangeChange}
        />
      </FilterSection>

      <StatsSection>
        <StatBox>
          <StatTitle>Total Days</StatTitle>
          <StatValue>{totalDays}</StatValue>
        </StatBox>
        <StatBox>
          <StatTitle>Total Working Days</StatTitle>
          <StatValue>{totalWorkingDays}</StatValue>
        </StatBox>
        <StatBox>
          <StatTitle>Total Working Hours</StatTitle>
          <StatValue>{totalWorkingHours} Hours</StatValue>
        </StatBox>
        <StatBox>
          <StatTitle>Total Working Minutes</StatTitle>
          <StatValue>{totalWorkingMinutes} Minutes</StatValue>
        </StatBox>
      </StatsSection>

      <Table>
        <TableHead>
          <tr>
            <TableHeadCell>Date</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell>Hours</TableHeadCell>
            <TableHeadCell>Minutes</TableHeadCell>
          </tr>
        </TableHead>
        <tbody>
          {records.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.type}</TableCell>
              <TableCell>{record.status}</TableCell>
              <TableCell>{record.hours}</TableCell>
              <TableCell>{record.minutes}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TotalDaysPage;
