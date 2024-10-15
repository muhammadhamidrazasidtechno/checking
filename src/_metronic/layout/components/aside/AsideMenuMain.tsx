import { useIntl } from "react-intl";
import { KTIcon } from "../../../helpers";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  const intl = useIntl();

  return (
    <>
      {/* <AsideMenuItem
        to="/employee-dashboard"
        icon="element-11"
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
      /> */}
      {/* <AsideMenuItemWithSub to='/super-supervisordashboard' title='Supervisor Dashboard' icon='dashboard'>
       <AsideMenuItem
                    to='/super-supervisordashboard'
                    title='Dashboard'
                    icon='element-11'
                />
                <AsideMenuItem
                    to='/super-schedulingmanagement'
                    title='Scheduling Management'
                    icon='calendar_today'
                />
                <AsideMenuItem
                    to='/super-taskassignment'
                    title='Task Assignment'
                    icon='assignment'
                />
                <AsideMenuItem
                    to='/super-medicationmanagement'
                    title='Medication Management'
                    icon='medication'
                />
                <AsideMenuItem
                    to='/super-reportreview'
                    title='Report Review'
                    icon='assessment'
                />
                <AsideMenuItem
                    to='/super-communicationtools'
                    title='Communication Tools'
                    icon='chat'
                />
                <AsideMenuItem
                    to='/super-CarePlansOversight'
                    title='Care Plans Oversight'
                    icon='medical_services'
                />
                <AsideMenuItem
                    to='/super-DoctorAppointments'
                    title='Doctor Appointments'
                    icon='event'
                />
                <AsideMenuItem
                    to='/super-ActivityScheduling'
                    title='Activity Scheduling'
                    icon='schedule'
                />
                <AsideMenuItem
                    to='/super-DocumentManagement'
                    title='Document Management'
                    icon='folder'
                />
                <AsideMenuItem
                    to='/super-EmployeeManagement'
                    title='Employee Management'
                    icon='people'
                />
                <AsideMenuItem
                    to='/super-PerformanceManagement'
                    title='Performance Management'
                    icon='star'
                />
                <AsideMenuItem
                    to='/super-Onboarding'
                    title='Onboarding'
                    icon='person_add'
                />
                <AsideMenuItem
                    to='/super-Reporting'
                    title='Reporting'
                    icon='report'
                />
            </AsideMenuItemWithSub> */}
      {/* <AsideMenuItem to='/builder' icon='switch' title='Layout Builder' /> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div> */}

      {/* <AsideMenuItemWithSub to='/crafted/pages' title='Pages' icon='gift'>
        <AsideMenuItem
          to='/crafted/pages/profile/projects'
          icon='briefcase'
          title='Projects'
        />
        <AsideMenuItem
          to='/crafted/pages/profile/tasks'
          icon='briefcase'
          title='Tasks'
        />
        <AsideMenuItem
          to='/employee-leaves'
          icon='briefcase'
          title='Leaves'
        />
        <AsideMenuItem
          to='/employee-totaldays'
          icon='briefcase'
          title='Total Days'
        />
        <AsideMenuItem
          to='/employee-assignmentspage'
          icon='briefcase'
          title='Assignments'
        />
        <AsideMenuItem
          to='/employee-absentpage'
          icon='briefcase'
          title='Total Absent'
        />
        <AsideMenuItem
          to='/employee-attendancepage'
          icon='briefcase'
          title='Total Attendances'
        />
        <AsideMenuItem
          to='/employee-reportspage'
          icon='briefcase'
          title='Reports'
        />
        <AsideMenuItem
          to='/employee-attendancepage'
          icon='briefcase'
          title='Launch Time'
        />
        <AsideMenuItem
          to='/employee-attendancepage'
          icon='briefcase'
          title='Regular Times'
        />
        <AsideMenuItem
          to='/employee-attendancepage'
          icon='Performance'
          title='Total Attendances'
        />
        <AsideMenuItem
          to='/employee-medicalreportspage'
          icon='briefcase'
          title='Medical Reports'
        />
      </AsideMenuItemWithSub> */}
      <AsideMenuItemWithSub to="/crafted/pages" title="Forms" icon="gift">
        <AsideMenuItemWithSub to="#" title="Complaint Forms" icon="briefcase">
          <AsideMenuItem
            to="/employee-contactform1"
            icon="briefcase"
            title="Complaint Form 1"
          />
          <AsideMenuItem
            to="/employee-contactform2"
            icon="briefcase"
            title="Complaint Form 2"
          />
          <AsideMenuItem
            to="/employee-contactform3"
            icon="briefcase"
            title="Complaint Form 3"
          />
          <AsideMenuItem
            to="/employee-contactform4"
            icon="briefcase"
            title="Complaint Form 4"
          />
        </AsideMenuItemWithSub>

        <AsideMenuItem
          to="/employee-disciplinaryactionform"
          icon="briefcase"
          title="Disciplinary Action Form"
        />
        <AsideMenuItem
          to="/employee-nominationform"
          icon="briefcase"
          title="Nomination Form"
        />
        <AsideMenuItem
          to="/employee-performancereviewform"
          icon="briefcase"
          title="Performance Review Form"
        />
        <AsideMenuItem
          to="/employee-recognitionform"
          icon="briefcase"
          title="Recognition Form"
        />
        <AsideMenuItem
          to="/employee-dailyroutinechecklist"
          icon="briefcase"
          title="Daily Routine Checklist"
        />
        <AsideMenuItem
          to="/employee-maintenancerequestform"
          icon="briefcase"
          title="Maintenance Request Form"
        />
        <AsideMenuItem
          to="/employee-managerdailychecklist"
          icon="briefcase"
          title="Manager Daily Checklist"
        />
        <AsideMenuItem
          to="/employee-ChoresDetailsSheet"
          icon="briefcase"
          title="Chores Details Sheet"
        />
        <AsideMenuItem
          to="/employee-ClientDailySupportPlanLog"
          icon="briefcase"
          title="Client Daily Support PlanLog"
        />
        <AsideMenuItem
          to="/employee-reportableeventsform"
          icon="briefcase"
          title="Reportable Events Form"
        />
        <AsideMenuItem
          to="/employee-PersonGoalTracking"
          icon="briefcase"
          title="Person Goal Tracking"
        />
        <AsideMenuItem
          to="/employee-TrainingSchedule"
          icon="briefcase"
          title="Training Schedule"
        />
        <AsideMenuItem
          to="/employee-PersonActivityLog"
          icon="briefcase"
          title="Person ActivityLog"
        />
        <AsideMenuItem
          to="/employee-detailedreportform"
          icon="briefcase"
          title="Detailed Report Form"
        />
        <AsideMenuItem
          to="/employee-reportableeventinformationform"
          icon="briefcase"
          title="Reportable Event Information Form"
        />
        <AsideMenuItem
          to="/employee-agencycontactfilerdetailsform"
          icon="briefcase"
          title="Agency Contact Filer Details Form"
        />
        <AsideMenuItem
          to="/employee-supervisorsignatureform"
          icon="briefcase"
          title="Supervisor Signature Form"
        />
        <AsideMenuItem
          to="/employee-competencyevaluationform"
          icon="briefcase"
          title="Competency Evaluation Form"
        />
        <AsideMenuItem
          to="/employee-roleandguardianform"
          icon="briefcase"
          title="Role and Guardian Form"
        />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub to="/crafted/pages" title="View Forms" icon="gift">
        <AsideMenuItemWithSub to="#" title="Complaint Forms" icon="briefcase">
          <AsideMenuItem
            to="/employee-viewcontactform1"
            icon="briefcase"
            title="Complaint Form 1 View"
          />
          <AsideMenuItem
            to="/employee-viewcontactform2"
            icon="briefcase"
            title="Complaint Form 2 View"
          />
          <AsideMenuItem
            to="/employee-viewcontactform3"
            icon="briefcase"
            title="Complaint Form 3 View"
          />
          <AsideMenuItem
            to="/employee-viewcontactform4"
            icon="briefcase"
            title="Complaint Form 4 View"
          />
        </AsideMenuItemWithSub>

        <AsideMenuItem
          to="/employee-viewdisciplinaryactionform"
          icon="briefcase"
          title="Disciplinary Action Form View"
        />
        <AsideMenuItem
          to="/employee-viewnominationform"
          icon="briefcase"
          title="Nomination Form View"
        />
        <AsideMenuItem
          to="/employee-viewperformancereviewform"
          icon="briefcase"
          title="Performance Review Form View"
        />
        <AsideMenuItem
          to="/employee-viewrecognitionform"
          icon="briefcase"
          title="Recognition Form View"
        />
        <AsideMenuItem
          to="/employee-viewdailyroutinechecklist"
          icon="briefcase"
          title="Daily Routine Checklist View"
        />
        <AsideMenuItem
          to="/employee-viewmaintenancerequestform"
          icon="briefcase"
          title="Maintenance Request Form View"
        />
        <AsideMenuItem
          to="/employee-viewmanagerdailychecklist"
          icon="briefcase"
          title="Manager Daily Checklist View"
        />
        <AsideMenuItem
          to="/employee-viewChoresDetailsSheet"
          icon="briefcase"
          title="Chores Details Sheet View"
        />
        <AsideMenuItem
          to="/employee-viewClientDailySupportPlanLog"
          icon="briefcase"
          title="Client Daily Support PlanLog View"
        />
        <AsideMenuItem
          to="/employee-viewreportableeventsform"
          icon="briefcase"
          title="Reportable Events Form View"
        />
        <AsideMenuItem
          to="/employee-viewPersonGoalTracking"
          icon="briefcase"
          title="Person Goal Tracking View"
        />
        {/* <AsideMenuItem
          to="/employee-TrainingSchedule"
          icon="briefcase"
          title="Training Schedule"
        /> */}
        <AsideMenuItem
          to="/employee-viewPersonActivityLog"
          icon="briefcase"
          title="Person Activity Log View"
        />
        <AsideMenuItem
          to="/employee-viewdetailedreportform"
          icon="briefcase"
          title="Detailed Report Form View"
        />
        <AsideMenuItem
          to="/employee-viewreportableeventinformationform"
          icon="briefcase"
          title="Reportable Event Information Form View"
        />
        <AsideMenuItem
          to="/employee-viewagencycontactfilerdetailsform"
          icon="briefcase"
          title="Agency Contact Filer Details Form View"
        />
        <AsideMenuItem
          to="/employee-viewsupervisorsignatureform"
          icon="briefcase"
          title="Supervisor Signature Form View"
        />
        <AsideMenuItem
          to="/employee-viewcompetencyevaluationform"
          icon="briefcase"
          title="Competency Evaluation Form View"
        />
        <AsideMenuItem
          to="/employee-viewroleandguardianform"
          icon="briefcase"
          title="Role and Guardian Form View"
        />
      </AsideMenuItemWithSub>

      {/* <AsideMenuItemWithSub to='/crafted/accounts' title='Accounts' icon='profile-circle'>
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      {/* <AsideMenuItemWithSub to='/error' title='Errors' icon='cross-circle'>
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      {/* <AsideMenuItemWithSub to='/crafted/widgets' title='Widgets' icon='element-plus'>
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Apps
          </span>
        </div>
      </div>
      {/* <AsideMenuItemWithSub to='/apps/chat' title='Chat' icon='message-text-2'>
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      <AsideMenuItem
        to="/apps/user-management/users"
        icon="shield-tick"
        title="User management"
      />
      <div className="menu-item">
        <div className="menu-content">
          <div className="separator mx-1 my-4"></div>
        </div>
      </div>
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={import.meta.env.VITE_APP_PREVIEW_DOCS_URL + '/changelog'}
        >
          <span className='menu-icon'>
            <KTIcon iconName='document' className='fs-2' />
          </span>
          <span className='menu-title'>Changelog {import.meta.env.VITE_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  );
}
