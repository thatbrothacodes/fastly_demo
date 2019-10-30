import {
    ContactActionTypes,
    GET_CONTACTS_REQUEST,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
    GET_CONTACT_REQUEST,
    GET_CONTACT_SUCCESS,
    GET_CONTACT_FAILURE,
    GET_CONTACTS_SEARCH_REQUEST,
    GET_CONTACTS_SEARCH_SUCCESS,
    GET_CONTACTS_SEARCH_FAILURE
}  from "../actions/types";

interface IContactsState {
    readonly items: Record<number, any>;
    readonly loading: boolean;
    readonly count: number;
}

const initialState: IContactsState = {
    items: {},
    loading: false,
    count: 0
};

export default (state: IContactsState = initialState, action: ContactActionTypes): IContactsState => {
    switch (action.type) {
        case GET_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_CONTACTS_SUCCESS:
            const newContacts: Record<number, any> = {};
            action.payload.rows.forEach((i: any) => {
                newContacts[i.id] = i;
            });

            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    ...newContacts
                },
                count: action.payload.count
            };
        case GET_CONTACTS_FAILURE:
            return {
                ...state,
                loading: false
            }
        case GET_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    ...{
                        [action.payload.id]: action.payload
                    }
                },
            };
        case GET_CONTACT_FAILURE:
            return {
                ...state,
                loading: false
            }
        case GET_CONTACTS_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_CONTACTS_SEARCH_SUCCESS:
            const searchContacts: Record<number, any> = {};
            action.payload.rows.forEach((i: any) => {
                searchContacts[i.id] = i;
            });

            return {
                ...state,
                items: searchContacts,
                loading: false,
                count: action.payload.count
            }
        case GET_CONTACTS_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}
