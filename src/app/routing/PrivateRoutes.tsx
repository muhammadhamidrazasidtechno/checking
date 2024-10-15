import { FC, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";
import { DashboardEmployeeWrapper } from "../pages/dashboardEmployee/DashboardWrapper";
import LeavesPage from "../pages/leavesEmployee/leaves";
import TotalDaysPage from "../pages/totalEmployeeDays/totalDays";
import AssignmentsPage from "../pages/AssignmentsEmployee/Assignment";
import EmployeePage from "../pages/employeeAbsentDays/Absent";
import AttendancePage from "../pages/attendanceEmployee/AttendancePage";
import EmployeeReportsPage from "../pages/reportsEmployee/EmployeeReportsPage";
import MedicalReportsPage from "../pages/medicalEmployee/MedicalReportsPage";
import PerformancePage from "../pages/PerfomanceEmployee/Perfomance";
import ContactForm from "../pages/Complaint Form 1/ContactForm";
import ConfidentialityForm from "../pages/Complaint Form 2/ConfidentialityForm";
import FacilityComplaintForm from "../pages/Complaint Form 3/FacilityComplaintForm";
import IncidentDetailsForm from "../pages/Complaint Form 4/IncidentDetailsForm";
import DisciplinaryActionForm from "../pages/Employee disciplinary form/DisciplinaryActionForm";
import EmployeeNominationForm from "../pages/Employee of the month/EmployeeNominationForm";
import EmployeePerformanceReviewForm from "../pages/Employee performance review/EmployeePerformanceReviewForm";
import EmployeeRecognitionForm from "../pages/Employee recognition award/EmployeeRecognitionForm";
import DailyRoutineChecklist from "../pages/Daily Routine Checklist/DailyRoutineChecklist";
import MaintenanceRequestForm from "../pages/Maintenance Request form/MaintenanceRequestForm";
import ManagerDailyChecklist from "../pages/Manager daily checklist/ManagerDailyChecklist";
import ReportableEventsForm from "../pages/Reportable Events Form 1/ReportableEventsForm";
import DetailedReportForm from "../pages/Reportable Events Form 2/DetailedReportForm";
import ReportableEventInformationForm from "../pages/Reportable Events Form 3/ReportableEventInformationForm";
import AgencyContactFilerDetailsForm from "../pages/Reportable Events Form 4/AgencyContactFilerDetailsForm";
import SupervisorSignatureForm from "../pages/Supervisor Signature Form/SupervisorSignatureForm";
import CompetencyEvaluationForm from "../pages/Competency Evaluation Form/CompetencyEvaluationForm";
import RoleAndGuardianForm from "../pages/Reportable Events Form 5/RoleAndGuardianForm";
import SupervisorDashboard from "../pages/SuperVisior/supervisor dashboard/SupervisorDashboard";
import SchedulingManagement from "../pages/SuperVisior/Scheduling-Management/SchedulingManagement";
import TaskAssignment from "../pages/SuperVisior/Task Assignment/TaskAssignment";
import MedicationManagement from "../pages/SuperVisior/Medication Management/MedicationManagement";
import ReportReview from "../pages/SuperVisior/Report Review/ReportReview";
import CommunicationTools from "../pages/SuperVisior/Communication Tool/CommunicationTool";
import CarePlansOversight from "../pages/SuperVisior/Care Plans Oversight/CarePlansOversight";
import DoctorAppointments from "../pages/SuperVisior/Doctor Appointments/DoctorAppointments";
import ActivityScheduling from "../pages/SuperVisior/Activity Scheduling/ActivityScheduling";
import DocumentManagement from "../pages/SuperVisior/Document Management/DocumentManagement";
import EmployeeManagement from "../pages/SuperVisior/Employee Management/EmployeeManagement";
import PerformanceManagement from "../pages/SuperVisior/Performance Management/PerformanceManagement";
import Onboarding from "../pages/SuperVisior/Onboarding/Onboarding";
import Reporting from "../pages/SuperVisior/Reporting/Reporting";
import ProgramManagerDashboard from "../pages/Program Manager/Dashboard/Dashboard";
import PerformanceMetrics from "../pages/Program Manager/Performance Metrics/PerformanceMetrics";
import SchedulingTaskManagement from "../pages/Program Manager/Scheduling Task Management/SchedulingTaskManagement";
import CarePlansManagement from "../pages/Program Manager/CarePlans Management/CarePlansManagement";
import ReportAndMedicationLogOversight from "../pages/Program Manager/Report And MedicationLog Oversight/ReportAndMedicationLogOversight";
import TeamManagement from "../pages/Program Manager/TeamManagement/TeamManagement";
import PerformanceManagements from "../pages/Program Manager/Performance Management/PerformanceManagement";
import ChoresDetailsSheet from "../pages/ChoresDetailsSheet/ChoresDetailsSheet";
import ClientDailySupportPlanLog from "../pages/ClientDailySupportPlanLog/ClientDailySupportPlanLog";
import PersonActivityLog from "../pages/PersonActivityLog/PersonActivityLog";
import PersonGoalTracking from "../pages/PersonGoalTracking/PersonGoalTracking";
import TrainingSchedule from "../pages/TrainingSchedule/TrainingSchedule";
import ViewContactAllForm from "../pages/Complaint Form 1/ViewAllForm";
import ViewAllConfidentialityForm from "../pages/Complaint Form 2/ViewAllForm";
import ViewAllFacilityComplaintForm from "../pages/Complaint Form 3/ViewAllForm";
import ViewAllFacilityComplaints from "../pages/Complaint Form 4/ViewAllForm";
import DisciplinaryActionAllForm from "../pages/Employee disciplinary form/ViewAllForm";
import ViewAllNominations from "../pages/Employee of the month/ViewAllForm";
import ViewAllEmployeePerformanceReviewForm from "../pages/Employee performance review/ViewAllForm";
import ViewAllRecognitionAll from "../pages/Employee recognition award/ViewAllForm";
import ViewAllRoleAndGuardianForm from "../pages/Reportable Events Form 5/ViewAllForm";
import ViewCompetencyEvaluationAllForm from "../pages/Competency Evaluation Form/ViewAllForm";
import ViewSupervisorSignatureFormAllForm from "../pages/Supervisor Signature Form/ViewAllForm";
import ViewAgencyContactFilerDetailsFormAllForm from "../pages/Reportable Events Form 4/ViewAllForm";
import ViewReportableEventInformationFormAllForm from "../pages/Reportable Events Form 3/ViewAllForm";
import ViewDetailedReportFormAllForm from "../pages/Reportable Events Form 2/ViewAllForm";
import ViewPersonActivityLogAllForm from "../pages/PersonActivityLog/ViewAllForm";
import ViewPersonGoalTracking from "../pages/PersonGoalTracking/ViewAllForm";
import ViewReportableEvents from "../pages/Reportable Events Form 1/ViewAllForm";
import ViewClientDailySupportPlanLogs from "../pages/ClientDailySupportPlanLog/ViewAllForm";
import ChoresAllDetailsSheet from "../pages/ChoresDetailsSheet/ViewAllForm";
import ViewChoresDetailsAllForm from "../pages/ChoresDetailsSheet/ViewAllForm";
import ViewManagerChecklistForm from "../pages/Manager daily checklist/ViewAllForm";
import ViewMaintenanceRequests from "../pages/Maintenance Request form/ViewAllForm";
import ViewAllDailyRoutineChecklist from "../pages/Daily Routine Checklist/ViewAllForm";

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"));
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const UsersPage = lazy(
    () => import("../modules/apps/user-management/UsersPage")
  );

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/employee-dashboard" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route
          path="employee-dashboard"
          element={<DashboardEmployeeWrapper />}
        />
        <Route path="employee-leaves" element={<LeavesPage />} />
        <Route path="employee-totaldays" element={<TotalDaysPage />} />
        <Route path="employee-assignmentspage" element={<AssignmentsPage />} />
        <Route path="employee-attendancepage" element={<AttendancePage />} />
        <Route path="employee-reportspage" element={<EmployeeReportsPage />} />
        <Route
          path="employee-medicalreportspage"
          element={<MedicalReportsPage />}
        />
        <Route path="employee-performancepage" element={<PerformancePage />} />
        <Route path="employee-absentpage" element={<EmployeePage />} />
        <Route
          path="employee-ChoresDetailsSheet"
          element={<ChoresDetailsSheet />}
        />
        <Route
          path="employee-viewChoresDetailsSheet"
          element={<ViewChoresDetailsAllForm />}
        />
        <Route
          path="employee-ClientDailySupportPlanLog"
          element={<ClientDailySupportPlanLog />}
        />
        <Route
          path="employee-viewClientDailySupportPlanLog"
          element={<ViewClientDailySupportPlanLogs />}
        />
        <Route
          path="employee-PersonGoalTracking"
          element={<PersonGoalTracking />}
        />
        <Route
          path="employee-viewPersonGoalTracking"
          element={<ViewPersonGoalTracking />}
        />
        <Route
          path="employee-TrainingSchedule"
          element={<TrainingSchedule />}
        />
        <Route
          path="employee-PersonActivityLog"
          element={<PersonActivityLog />}
        />
        <Route
          path="employee-viewPersonActivityLog"
          element={<ViewPersonActivityLogAllForm />}
        />
        <Route path="employee-contactform1" element={<ContactForm />} />
        <Route
          path="employee-viewcontactform1"
          element={<ViewContactAllForm />}
        />
        <Route path="employee-contactform2" element={<ConfidentialityForm />} />
        <Route
          path="employee-viewcontactform2"
          element={<ViewAllConfidentialityForm />}
        />
        <Route
          path="employee-contactform3"
          element={<FacilityComplaintForm />}
        />
        <Route
          path="employee-viewcontactform3"
          element={<ViewAllFacilityComplaintForm />}
        />
        <Route path="employee-contactform4" element={<IncidentDetailsForm />} />
        <Route
          path="employee-viewcontactform4"
          element={<ViewAllFacilityComplaints />}
        />
        <Route
          path="employee-disciplinaryactionform"
          element={<DisciplinaryActionForm />}
        />
        <Route
          path="employee-viewdisciplinaryactionform"
          element={<DisciplinaryActionAllForm />}
        />
        <Route
          path="employee-nominationform"
          element={<EmployeeNominationForm />}
        />
        <Route
          path="employee-viewnominationform"
          element={<ViewAllNominations />}
        />
        <Route
          path="employee-performancereviewform"
          element={<EmployeePerformanceReviewForm />}
        />
        <Route
          path="employee-viewperformancereviewform"
          element={<ViewAllEmployeePerformanceReviewForm />}
        />
        <Route
          path="employee-recognitionform"
          element={<EmployeeRecognitionForm />}
        />
        <Route
          path="employee-viewrecognitionform"
          element={<ViewAllRecognitionAll />}
        />
        <Route
          path="employee-dailyroutinechecklist"
          element={<DailyRoutineChecklist />}
        />
        <Route
          path="employee-viewdailyroutinechecklist"
          element={<ViewAllDailyRoutineChecklist />}
        />
        <Route
          path="employee-maintenancerequestform"
          element={<MaintenanceRequestForm />}
        />
        <Route
          path="employee-viewmaintenancerequestform"
          element={<ViewMaintenanceRequests />}
        />
        <Route
          path="employee-managerdailychecklist"
          element={<ManagerDailyChecklist />}
        />
        <Route
          path="employee-viewmanagerdailychecklist"
          element={<ViewManagerChecklistForm />}
        />
        <Route
          path="employee-reportableeventsform"
          element={<ReportableEventsForm />}
        />
        <Route
          path="employee-viewreportableeventsform"
          element={<ViewReportableEvents />}
        />
        <Route
          path="employee-detailedreportform"
          element={<DetailedReportForm />}
        />
        <Route
          path="employee-viewdetailedreportform"
          element={<ViewDetailedReportFormAllForm />}
        />
        <Route
          path="employee-reportableeventinformationform"
          element={<ReportableEventInformationForm />}
        />
        <Route
          path="employee-viewreportableeventinformationform"
          element={<ViewReportableEventInformationFormAllForm />}
        />
        <Route
          path="employee-agencycontactfilerdetailsform"
          element={<AgencyContactFilerDetailsForm />}
        />
        <Route
          path="employee-viewagencycontactfilerdetailsform"
          element={<ViewAgencyContactFilerDetailsFormAllForm />}
        />
        <Route
          path="employee-supervisorsignatureform"
          element={<SupervisorSignatureForm />}
        />
        <Route
          path="employee-viewsupervisorsignatureform"
          element={<ViewSupervisorSignatureFormAllForm />}
        />
        <Route
          path="employee-competencyevaluationform"
          element={<CompetencyEvaluationForm />}
        />
        <Route
          path="employee-viewcompetencyevaluationform"
          element={<ViewCompetencyEvaluationAllForm />}
        />
        <Route
          path="employee-roleandguardianform"
          element={<RoleAndGuardianForm />}
        />
        <Route
          path="employee-viewroleandguardianform"
          element={<ViewAllRoleAndGuardianForm />}
        />
        <Route
          path="super-supervisordashboard"
          element={<SupervisorDashboard />}
        />
        <Route
          path="super-schedulingmanagement"
          element={<SchedulingManagement />}
        />
        <Route path="super-taskassignment" element={<TaskAssignment />} />
        <Route
          path="super-medicationmanagement"
          element={<MedicationManagement />}
        />
        <Route path="super-reportreview" element={<ReportReview />} />
        <Route
          path="super-communicationtools"
          element={<CommunicationTools />}
        />
        <Route
          path="super-CarePlansOversight"
          element={<CarePlansOversight />}
        />
        <Route
          path="super-DoctorAppointments"
          element={<DoctorAppointments />}
        />
        <Route
          path="super-ActivityScheduling"
          element={<ActivityScheduling />}
        />
        <Route
          path="super-DocumentManagement"
          element={<DocumentManagement />}
        />
        <Route
          path="super-EmployeeManagement"
          element={<EmployeeManagement />}
        />
        <Route
          path="super-PerformanceManagement"
          element={<PerformanceManagement />}
        />
        <Route path="super-Onboarding" element={<Onboarding />} />
        <Route path="super-Reporting" element={<Reporting />} />
        <Route
          path="/program-manager-dashboard"
          element={<ProgramManagerDashboard />}
        />
        <Route path="/performance-metrics" element={<PerformanceMetrics />} />
        <Route
          path="/scheduling-task-management"
          element={<SchedulingTaskManagement />}
        />
        <Route
          path="/care-plans-management"
          element={<CarePlansManagement />}
        />
        <Route path="/communication-tools" element={<CommunicationTools />} />
        <Route
          path="/report-medication-log-oversight"
          element={<ReportAndMedicationLogOversight />}
        />
        <Route path="/team-management" element={<TeamManagement />} />
        <Route
          path="/performance-management"
          element={<PerformanceManagements />}
        />
        {/*<Route path="/onboarding" element={<Onboarding />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/directory" element={<Directory />} /> */}

        <Route
          path="builder"
          element={
            <SuspensedView>
              <BuilderPageWrapper />
            </SuspensedView>
          }
        />
        <Route path="menu-test" element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/wizards/*"
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/widgets/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/user-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
