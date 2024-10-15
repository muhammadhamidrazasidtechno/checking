import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Link, useNavigate } from 'react-router-dom';

import {
  ListsWidget1,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  MixedWidget10,
  MixedWidget11,
  MixedWidget2,
  StatisticsWidget5,
  TablesWidget10,
  TablesWidget5,
} from '../../../_metronic/partials/widgets'
import Announcement from '../../modules/profile/components/Announcement';



const DashboardPage = () => {
  const navigate = useNavigate();


 const goToProjects = (link:string) => {
    navigate(link);
  };

  // const goToProjects = (link) => {
  //   navigate(link);
    // /crafted/pages/profile/tasks
  // };

  return (
  <>
 <Announcement message="This is an important announcement! Stay tuned for more updates.This is an important announcement! Stay tuned for more updates.This is an important announcement! Stay tuned for more updates." />

    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
    <div onClick={() => goToProjects('/crafted/pages/profile/projects')} className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='briefcase'
            color='secondary'
            iconColor='primary'
            title='Projects'
            description='Total projects'
            titleColor='gray-900'
            descriptionColor='gray-400'
          />
        </div>

      <div onClick={() => goToProjects('/crafted/pages/profile/tasks')} className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='check-square'
          color='info'
          iconColor='white'
          title='Tasks'
          description='Total tasks assigned'
          titleColor='white'
          descriptionColor='white'
        />
      </div>

      <div onClick={() => goToProjects('/employee-leaves')} className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='calendar'
          color='warning'
          iconColor='black'
          title='Leaves'
          description='Total leave days'
          titleColor='black'
          descriptionColor='black'
        />
      </div>

      <div onClick={() => goToProjects('/employee-totaldays')} className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='calendar-2'
          color='success'
          iconColor='white'
          title='Total Days'
          description='Total working days'
          titleColor='white'
          descriptionColor='white'
        />
      </div>

      <div onClick={() => goToProjects('/employee-assignmentspage')} className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='bookmark-2'
          color='primary'
          iconColor='white'
          title='Assignments'
          description='Total assignments'
          titleColor='white'
          descriptionColor='white'
        />
      </div>

      <div onClick={() => goToProjects('/employee-absentpage')} className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='minus-folder'
          color='danger'
          iconColor='white'
          title='Total Absent'
          description='Days absent'
          titleColor='white'
          descriptionColor='white'
        />
      </div>

      <div onClick={() => goToProjects('/employee-attendancepage')} className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='check-square'
          color='info'
          iconColor='white'
          title='Total Attendances'
          description='Days present'
          titleColor='white'
          descriptionColor='white'
        />
      </div>

      <div onClick={() => goToProjects('/employee-reportspage')} className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='file'
          color='primary'
          iconColor='white'
          title='Reports'
          description='Generated reports'
          titleColor='white'
          descriptionColor='white'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='rocket'
          color='success'
          iconColor='white'
          title='Launch Time'
          description='Time to launch'
          titleColor='white'
          descriptionColor='white'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='timer'
          color='dark'
          iconColor='gray-100'
          title='Regular Times'
          description='Regular working hours'
          titleColor='gray-100'
          descriptionColor='gray-100'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='star'
          color='warning'
          iconColor='white'
          title='Performance'
          description='Performance ratings'
          titleColor='white'
          descriptionColor='white'
        />
      </div>
      
      <div  onClick={() => goToProjects('/employee-medicalreportspage')} className='col-xl-4'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='timer'
          color='danger'
          iconColor='gray-100'
          title='Medical Reports'
          description='Medical Reports Page'
          titleColor='gray-100'
          descriptionColor='gray-100'
        />
      </div>
    </div>



    {/* end::Row */}

    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      {/* begin::Col */}
      <div className='col-xl-4'>
        <ListsWidget1 className='card-xl-stretch mb-xl-8' />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xl-8'>
        <TablesWidget5 className='card-xl-stretch mb-5 mb-xl-8' />
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <MixedWidget2
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>
      <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div>
      <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
        <MixedWidget11
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
      </div>
    </div>
    {/* end::Row */}
  </>
)
}
const DashboardEmployeeWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardEmployeeWrapper }
