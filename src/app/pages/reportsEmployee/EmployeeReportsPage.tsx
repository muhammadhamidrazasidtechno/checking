import React from 'react';
import './WeeklySummaryReport.css';

export interface WeeklySummary {
  weekNumber: number;
  totalHours: number;
  completedTasks: number;
  pendingTasks: number;
  summary: string;
}

export interface EmployeeReport {
  employeeId: number;
  employeeName: string;
  weeklySummaries: WeeklySummary[];
}


interface WeeklySummaryReportProps {
  summary: WeeklySummary;
}

const WeeklySummaryReport: React.FC<WeeklySummaryReportProps> = ({ summary }) => {
  return (
    <div className="weekly-summary-report">
      <h3>Week {summary.weekNumber}</h3>
      <div className="summary-details">
        <p><strong>Total Hours:</strong> {summary.totalHours}</p>
        <p><strong>Completed Tasks:</strong> {summary.completedTasks}</p>
        <p><strong>Pending Tasks:</strong> {summary.pendingTasks}</p>
        <p><strong>Summary:</strong> {summary.summary}</p>
      </div>
    </div>
  );
};

export {WeeklySummaryReport};


interface EmployeeReportProps {
  report: EmployeeReport;
}

const EmployeeReport: React.FC<EmployeeReportProps> = ({ report }) => {
  return (
    <div className="employee-report">
      <h2>{report.employeeName}</h2>
      {report.weeklySummaries.map((summary) => (
        <WeeklySummaryReport key={summary.weekNumber} summary={summary} />
      ))}
    </div>
  );
};

export {EmployeeReport};


const employeeReports: EmployeeReport[] = [
  {
    employeeId: 1,
    employeeName: 'John Doe',
    weeklySummaries: [
      {
        weekNumber: 42,
        totalHours: 40,
        completedTasks: 15,
        pendingTasks: 5,
        summary: 'This week was productive with most tasks completed on time.',
      },
      {
        weekNumber: 43,
        totalHours: 38,
        completedTasks: 12,
        pendingTasks: 8,
        summary: 'A few tasks were delayed due to unforeseen issues.',
      },
    ],
  },
  {
    employeeId: 2,
    employeeName: 'Jane Smith',
    weeklySummaries: [
      {
        weekNumber: 42,
        totalHours: 45,
        completedTasks: 18,
        pendingTasks: 2,
        summary: 'Excellent performance with almost all tasks completed.',
      },
      {
        weekNumber: 43,
        totalHours: 40,
        completedTasks: 14,
        pendingTasks: 6,
        summary: 'Good performance, but some tasks were delayed.',
      },
    ],
  },
];

const EmployeeReportsPage: React.FC = () => {
  return (
    <div className="employee-reports-page">
      <h1>Employee Reports</h1>
      {employeeReports.map((report) => (
        <EmployeeReport key={report.employeeId} report={report} />
      ))}
    </div>
  );
};

export default EmployeeReportsPage;