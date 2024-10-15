import React, { useState } from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import 'antd/dist/reset.css'; // For Ant Design styles
import dayjs from 'dayjs';
import { StatisticsWidget5 } from '../../../_metronic/partials/widgets';

// Dummy Data
// Dummy Data
const dummyAbsenceData = {
  totalAbsentDays: 15,
  absentDaysThisMonth: 5,
  absentDaysThisYear: 20,
  absenceRecords: [
    { date: '2024-09-01', reason: 'Sick Leave' },
    { date: '2024-09-03', reason: 'Personal Leave' },
    { date: '2024-09-10', reason: 'Vacation' },
    // Add more records as needed
  ]
};

const dummyEmployee = {
  employeeName: "Jane Smith",
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const DateRangePicker = styled(DatePicker.RangePicker)`
  margin-right: 10px;
`;

const StatsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const TableHeadCell = styled.th`
  padding: 15px;
  text-align: left;
  font-size: 16px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: left;
  font-size: 14px;
`;


const Colx = styled.div`
          width: 32%;
`

interface AbsenceRecord {
  date: string;
  reason: string;
}

interface AbsenceData {
  totalAbsentDays: number;
  absentDaysThisMonth: number;
  absentDaysThisYear: number;
  absenceRecords: AbsenceRecord[];
}



const EmployeePage = () => {
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);

  const handleDateRangeChange = (dates: [dayjs.Dayjs, dayjs.Dayjs] | null, dateStrings: [string, string]) => {
    setDateRange(dates);
    // You can filter or fetch data based on the selected date range here
  };

  return (
    <Container>
      <Header>
        <Title>Employee Absence Overview</Title>
        <Subtitle>View detailed absence data for {dummyEmployee.employeeName}.</Subtitle>
      </Header>

      <FilterSection>
        <DateRangePicker
          onChange={() => handleDateRangeChange}
          placeholder={['Start Date', 'End Date']}
        />
      </FilterSection>

      <StatsSection>
      <Colx className=''>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='calendar-2'
          color='primary'
          iconColor='white'
          title='Total Absent Days'
          description={`Total absent days: ${dummyAbsenceData.totalAbsentDays}`}
          titleColor='white'
          descriptionColor='white'
        />
        </Colx>
      <Colx className='col-xl-4'>

        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='calendar-2'
          color='dark'
          iconColor='gray-100'
          title='Absent Days This Month'
          description={`Days this month: ${dummyAbsenceData.absentDaysThisMonth}`}
          titleColor='white'
          descriptionColor='white'
        />
        </Colx>
        <Colx className='col-xl-4'>

        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='calendar-2'
          color='danger'
          iconColor='white'
          title='Absent Days This Year'
          description={`Days this year: ${dummyAbsenceData.absentDaysThisYear}`}
          titleColor='white'
          descriptionColor='white'
        />
        </Colx>

      </StatsSection>

      <Table>
        <TableHead>
          <tr>
            <TableHeadCell>Date</TableHeadCell>
            <TableHeadCell>Reason</TableHeadCell>
          </tr>
        </TableHead>
        <tbody>
          {dummyAbsenceData.absenceRecords.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.reason}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Using default props for demonstration


export default EmployeePage;