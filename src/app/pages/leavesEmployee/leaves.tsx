import { FC } from 'react'
import { KTIcon,toAbsoluteUrl } from '../../../_metronic/helpers';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaFileAlt, FaPlane, FaCogs } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useIntl } from 'react-intl';
import { PageTitle } from '../../../_metronic/layout/core';
import { StatisticsWidget5 } from '../../../_metronic/partials/widgets';

// Simulating a logged-in employee's name (this would typically come from authentication or API)

// Updated Leave Records - Filter based on current employee

type Props = {
  className: string
}

const leaveRecords = [
  { type: 'Annual Leave', status: 'Approved', startDate: '2024-07-15', endDate: '2024-07-18' },
  { type: 'Sick Leave', status: 'Pending', startDate: '2024-08-10', endDate: '2024-08-12' },
  // Add more records as needed
];

const LeaveRecord: FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Leave Records</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Detailed records of leave requests</span>
        </h3>
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_1'
              >
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_2'
              >
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_3'
              >
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tab pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 min-w-150px'>Type</th>
                    <th className='p-0 min-w-150px'>Status</th>
                    <th className='p-0 min-w-150px'>Start Date</th>
                    <th className='p-0 min-w-150px'>End Date</th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {leaveRecords.map((record, index) => (
                    <tr key={index}>
                      <td className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>{record.type}</td>
                      <td>
                        <span className={`badge badge-light-${record.status === 'Approved' ? 'success' : 'warning'}`}>
                          {record.status}
                        </span>
                      </td>
                      <td className='text-end'>{new Date(record.startDate).toLocaleDateString()}</td>
                      <td className='text-end'>{new Date(record.endDate).toLocaleDateString()}</td>
                      <td className='text-end'>
                        <a
                          href='#'
                          className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                        >
                          <KTIcon iconName='arrow-right' className='fs-2' />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tab pane */}
          {/* begin::Tab pane */}
          <div className='tab-pane fade' id='kt_table_widget_5_tab_2'>
            {/* Replace with relevant records for the Week tab */}
          </div>
          {/* end::Tab pane */}
          {/* begin::Tab pane */}
          <div className='tab-pane fade' id='kt_table_widget_5_tab_3'>
            {/* Replace with relevant records for the Day tab */}
          </div>
          {/* end::Tab pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export { LeaveRecord }
// Updated Leave Summary
const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Card = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: #343a40;
  margin-bottom: 10px;
`;

const CardValue = styled.h1`
  font-size: 48px;
  color: #007bff;
`;
// Simulated Holiday Data - This can remain the same as holidays are public for everyone
const holidays = [
  { date: 'July 09, 2024', name: 'Arafat Day' },
  { date: 'July 10, 2024', name: 'Eid al-Adha' },
];

// Holiday List Component
const HolidayContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const HolidayItem = styled.div`
  font-size: 16px;
  margin: 10px 0;
`;

const HolidayList: React.FC = () => {
  return (
    <HolidayContainer>
      <h3>Upcoming Public Holidays</h3>
      {holidays.map((holiday, index) => (
        <HolidayItem key={index}>
          {holiday.date} - {holiday.name}
        </HolidayItem>
      ))}
    </HolidayContainer>
  );
};

export { HolidayList };

// Team Availability Component - Shows all team members' availability
const AvailabilityContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TeamMember = styled.li`
  margin: 10px 0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

// const TeamAvailability: React.FC = () => {
//   const teamData = [
//     { name: 'Benny Chagur', status: 'Available' },
//     { name: 'Irshad Meer', status: 'Annual Leave' },
//   ];

//   return (
//     <AvailabilityContainer>
//       <h3>Team Availability</h3>
//       <TeamList>
//         {teamData.map((member, index) => (
//           <TeamMember key={index}>
//             <span>{member.name}</span>
//             <span>{member.status}</span>
//           </TeamMember>
//         ))}
//       </TeamList>
//     </AvailabilityContainer>
//   );
// };

// export { TeamAvailability };

// Leave Summary Component - Shows summary only for the current employee


const DashboardPage = () => {
  const annualLeaveRemaining = 15;  // Placeholder data, replace with dynamic data
  const sickLeaveTaken = 2;
  const otherLeaveTaken = 3;

  return (
    <>
      {/* begin::Row */}
      <div className="row g-5 g-xl-8">
        {/* Annual Leave Remaining */}
        <div className="col-xl-4">
          <StatisticsWidget5
            className="card-xl-stretch mb-5 mb-xl-8"
            svgIcon="calendar"
            color="warning"
            iconColor="black"
            title="Annual Leave Remaining"
            description={`${annualLeaveRemaining} days left`}
            titleColor="black"
            descriptionColor="black"
          />
        </div>

        {/* Sick Leave Taken */}
        <div className="col-xl-4">
          <StatisticsWidget5
            className="card-xl-stretch mb-5 mb-xl-8"
            svgIcon="check-square"
            color="info"
            iconColor="white"
            title="Sick Leave Taken"
            description={`${sickLeaveTaken} days`}
            titleColor="white"
            descriptionColor="white"
          />
        </div>

        {/* Other Leave Taken */}
        <div className="col-xl-4">
          <StatisticsWidget5
            className="card-xl-stretch mb-5 mb-xl-8"
            svgIcon="minus-folder"
            color="danger"
            iconColor="white"
            title="Other Leave Taken"
            description={`${otherLeaveTaken} days`}
            titleColor="white"
            descriptionColor="white"
          />
        </div>
      </div>
      {/* end::Row */}
    </>
  );
};

const LeaveSummary = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DASHBOARD' })}
      </PageTitle>
      <DashboardPage />
    </>
  );
};

export { LeaveSummary };



// Calendar Section - Can remain as is
const CalendarContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const CalendarSection: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <CalendarContainer>
      <h3>Leave Calendar</h3>
      <Calendar value={date} onChange={()=>handleDateChange} />
    </CalendarContainer>
  );
};

export { CalendarSection };

// Main Dashboard
const DashboardContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  background-color: #f8f9fa;
  padding: 40px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const LeaveDashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <MainContent>
        <Section>
          <LeaveSummary />
        </Section>
        <Section>
          <CalendarSection />
        </Section>
        {/* <Section>
          <TeamAvailability />
        </Section> */}
        <Section>
          <HolidayList />
        </Section>
        <Section>
          <LeaveRecord className='ok'/>
        </Section>
      </MainContent>
    </DashboardContainer>
  );
};

export default LeaveDashboard;
