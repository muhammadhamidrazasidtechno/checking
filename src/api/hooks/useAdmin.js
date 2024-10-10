import { useDispatch, useSelector } from "react-redux";
import { adminApi } from '../requests/admin';
import { saveDataToLocalStorage, clearLocalStorage } from '../../utils';
import { authentication as auth, clearToken, logOut, setToken } from "../../features/auth/authSlice";
import { IIMIIN_PREFIX } from "../../constants";
import { useEffect } from "react";

export const useAdmin = () => {

    useEffect(() => {
        const localStorageData = localStorage.getItem(IIMIIN_PREFIX);

        if (localStorageData) {
            const { token, user } = JSON.parse(localStorageData);
            
            if (token && user) {
                dispatch(auth(user));
                dispatch(setToken(token));
            }
        }

    }, []);
    
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const authentication = async (adminData) => {
        const authenticationResponse = await adminApi.logInAdmin(adminData);
        const { user, token } = authenticationResponse.data.data;

        saveDataToLocalStorage(IIMIIN_PREFIX, { user, 'token': token })
        dispatch(auth(user));
        dispatch(setToken(token))
    };

    const updateProfile = async (adminId, updatedData) => {
        const updateProfileResponse = await adminApi.updateAdmin(adminId, updatedData);
        console.log(updateProfileResponse);
        dispatch()
    };

    const handleUserLogOut = () => {
        dispatch(logOut());
        dispatch(clearToken());
        clearLocalStorage(IIMIIN_PREFIX);
    };

    return {
        user,
        isAuthenticated,
        authentication,
        handleUserLogOut,
        updateProfile,
    }
};