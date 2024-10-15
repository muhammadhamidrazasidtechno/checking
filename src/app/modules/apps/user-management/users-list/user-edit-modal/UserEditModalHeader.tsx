import { KTIcon } from '../../../../../../_metronic/helpers';
import { useListView } from '../core/ListViewProvider';

type UserEditModalHeaderProps = {
  isEditMode: boolean; // Prop to determine if in edit mode
};

const UserEditModalHeader: React.FC<UserEditModalHeaderProps> = ({ isEditMode }) => {
  const { setItemIdForUpdate } = useListView();

  return (
    <div className='modal-header'>
      {/* begin::Modal title */}
      <h2 className='fw-bolder check-update-or-add'>
        {isEditMode ? 'Update User' : 'Add User'}
      </h2>
      {/* end::Modal title */}

      {/* begin::Close */}
      <div
        className='btn btn-icon btn-sm btn-active-icon-primary'
        data-kt-users-modal-action='close'
        onClick={() => setItemIdForUpdate(undefined)}
        style={{ cursor: 'pointer' }}
      >
        <KTIcon iconName='cross' className='fs-1' />
      </div>
      {/* end::Close */}
    </div>
  );
};

export { UserEditModalHeader };