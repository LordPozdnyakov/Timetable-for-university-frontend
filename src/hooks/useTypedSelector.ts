import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from '../Redux/Store';

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;