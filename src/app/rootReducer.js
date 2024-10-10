import { combineReducers } from "redux";
import authReducer from '../features/auth/authSlice'
import usersReducer from '../features/users/usersSlice';
import adminReducer from '../features/admin/adminSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import sellersReducer from '../features/sellers/sellersSlice';
import celebritiesReducer from '../features/celebrities/celebritiesSlice';
import productsReducer from '../features/products/productsSlice';
import reportsSlice from "../features/reports/reportsSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    admin: adminReducer,
    dashboard: dashboardReducer,
    sellers: sellersReducer,
    celebrities: celebritiesReducer,
    products: productsReducer,
    reports: reportsSlice,
});

export default rootReducer
