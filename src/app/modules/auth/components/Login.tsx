
import { useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { getUserByToken, login } from '../core/_requests'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'
import { useAuth } from '../core/Auth'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  role: Yup.string().required('User role is required'),
})

const initialValues = {
  role: '',
  email: 'admin@demo.com',
  password: 'demo',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      try {
        
        const { data: auth } = await login(values.role, values.email, values.password)
        console.log(auth);

        saveAuth(auth)
        const { data: user } = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })
  const labelStyle = {
    color: '#777771 !important',
    fontFamily: 'inherit !important',
    fontWeight: '700 !important',
    fontSize: '12px !important',
  };
  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      {/* <div className='text-center mb-11'>
        <h1 className='text-gray-900 fw-bolder mb-3'>Sign In</h1>
        <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div>
      </div> */}
      {/* begin::Heading */}

      {/* begin::Login options */}
      {/* <div className='row g-3 mb-9'> */}
        {/* begin::Col */}
        {/* <div className='col-md-6'> */}
          {/* begin::Google link */}
          {/* <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('media/svg/brand-logos/google-icon.svg')}
              className='h-15px me-3'
            />
            Sign in with Google
          </a> */}
          {/* end::Google link */}
        {/* </div> */}
        {/* end::Col */}

        {/* begin::Col */}
        {/* <div className='col-md-6'> */}
          {/* begin::Google link */}
          {/* <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('media/svg/brand-logos/apple-black.svg')}
              className='theme-light-show h-15px me-3'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('media/svg/brand-logos/apple-black-dark.svg')}
              className='theme-dark-show h-15px me-3'
            />
            Sign in with Apple
          </a> */}
          {/* end::Google link */}
        {/* </div> */}
        {/* end::Col */}
      {/* </div> */}
      {/* end::Login options */}

      {/* begin::Separator */}
      {/* <div className='separator separator-content my-14'>
        <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span> */}
      {/* </div> */}
      {/* end::Separator */}

      {/* {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
            continue.
          </div>
        </div>
      )} */}

      {/* begin::Form group */}
      <div className='fv-row mb-8' style={{textAlign:'center'}}>
      <img alt='Logo' src={toAbsoluteUrl('media/logos/Fav-icon-HCss.png')} className='h-75px' />

      </div>
      <div className='fv-row mb-8'>



        <label style={labelStyle} className='form-label '>Email</label>
        <input
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            { 'is-invalid': formik.touched.email && formik.errors.email },
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <label style={labelStyle} className='form-label'>Password</label>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}
      <div className='fv-row mb-8'>
        <label style={labelStyle} className='form-label '>User Role</label>
        <select
          {...formik.getFieldProps('role')}
          className={clsx(
            'form-select bg-transparent',
            { 'is-invalid': formik.touched.role && formik.errors.role },
            { 'is-valid': formik.touched.role && !formik.errors.role }
          )}
        >
          <option value=''>Select a role</option>
          <option value='User Roles and Responsibilities'>User Roles and Responsibilities</option>
          <option value='Supervisor Level'>Supervisor Level</option>
          <option value='Program Manager Level'>Program Manager Level</option>
          <option value='Area Director Level'>Area Director Level</option>
          <option value='Regional Director Level'>Regional Director Level</option>
          <option value='HR Assistant'>HR Assistant</option>
          <option value='HR Director'>HR Director</option>
          <option value='Finance Director'>Finance Director</option>
          <option value='CEO Level'>CEO Level</option>
        </select>
        {formik.touched.role && formik.errors.role && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.role}</span>
            </div>
          </div>
        )}
      </div>
      {/* begin::Wrapper */}
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />

        {/* begin::Link */}
        <Link to='/auth/forgot-password' style={{color:'green'}}>
          Forgot Password ?
        </Link>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className='d-grid mb-10'>

        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary custom-button'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}

      {/* <div className='text-gray-500 text-center fw-semibold fs-6'>
        Not a Member yet?{' '}
        <Link to='/auth/registration' className='link-primary'>
          Sign up
        </Link>
      </div> */}
    </form>
  )
}
