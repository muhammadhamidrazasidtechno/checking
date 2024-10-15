
import {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10'>
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}

        {/* begin::Footer */}
       
        {/* end::Footer */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div className='d-flex w-lg-50 order-lg-2 flex-center'>
      <div
        className='flex-lg-row-fluid bgi-size-cover w-100 bgi-position-center '
        style={{backgroundImage: `url(${toAbsoluteUrl('media/logos/HgTAWZ.jpg')})`, height:'70vh'}}
      >
        {/* begin::Content */}
        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
          {/* begin::Logo */}
          
          {/* end::Logo */}

          {/* begin::Image */}
        
          {/* end::Text */}
        </div>
        {/* end::Content */}
      </div>
      </div>
      
      {/* end::Aside */}
    </div>
  )
}

export {AuthLayout}
