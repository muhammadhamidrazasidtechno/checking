import { useQuery } from 'react-query';
import { UserEditModalForm } from './UserEditModalForm';
import { isNotEmpty, QUERIES } from '../../../../../../_metronic/helpers';
import { useListView } from '../core/ListViewProvider';
import { getUserById } from '../core/_requests';

type UserEditModalFormWrapperProps = {
  EditMode: any; // Define the prop type here
};

const UserEditModalFormWrapper: React.FC<UserEditModalFormWrapperProps> = ({ EditMode }) => {
  const { itemIdForUpdate, setItemIdForUpdate } = useListView();
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate);

  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => getUserById(itemIdForUpdate),
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined);
        console.error(err);
      },
    }
  );

  // If no user is selected for editing
  if (!itemIdForUpdate) {
    return <UserEditModalForm isUserLoading={isLoading} user={{ id: undefined }} EditMode={EditMode} />;
  }

  // If user data is successfully fetched
  if (!isLoading && !error && user) {
    return <UserEditModalForm isUserLoading={isLoading} user={user} EditMode={EditMode} />;
  }

  // Return null while loading or if there is an error
  return null;
};

export { UserEditModalFormWrapper };
