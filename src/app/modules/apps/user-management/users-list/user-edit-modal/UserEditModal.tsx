import { useEffect, useState } from 'react';
import { UserEditModalHeader } from './UserEditModalHeader';
import { UserEditModalFormWrapper } from './UserEditModalFormWrapper';

const UserEditModal = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  // You can use this effect to determine if you should be in edit mode based on some condition.
  // For example, if there's a userId passed, you could set isEditMode to true.
  // Example:
  // useEffect(() => {
  //   if (someCondition) {
  //     setIsEditMode(true);
  //   }
  // }, [someCondition]);


  const EditMode = (editMode : any) => {
    setIsEditMode(editMode)
  }

  return (
    <>
      <div
        className='modal fade show d-block'
        id='kt_modal_add_user'
        role='dialog'
        tabIndex={-1}
        aria-modal='true'
      >
        {/* begin::Modal dialog */}
        <div className='modal-dialog modal-dialog-centered mw-650px'>
          {/* begin::Modal content */}
          <div className='modal-content'>
            <UserEditModalHeader isEditMode={isEditMode} />
            {/* begin::Modal body */}
            <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
              <UserEditModalFormWrapper EditMode={EditMode} /> {/* Pass isEditMode directly */}
            </div>
            {/* end::Modal body */}
          </div>
          {/* end::Modal content */}
        </div>
        {/* end::Modal dialog */}
      </div>
      {/* begin::Modal Backdrop */}
      <div className='modal-backdrop fade show'></div>
      {/* end::Modal Backdrop */}
    </>
  );
};

export { UserEditModal };
