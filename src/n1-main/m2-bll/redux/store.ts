import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk"
import { loginReducer } from "./login-reduser";
import { profileReducer } from "./profile-reduser";
import { recoverPasswordReducer } from "./recover-password-reduser";
import { registrationReducer } from "./registration-reduser";


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    profilePage: profileReducer,
	 loginPage: loginReducer,
	 recoverPassword: recoverPasswordReducer,
	 registration: registrationReducer
   


})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
//export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
//export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
//export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
//export type ThunkApp = ThunkAction<void, AppRootStateType, unknown, AnyAction>


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
export default store;