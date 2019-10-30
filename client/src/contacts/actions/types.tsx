export const GET_CONTACTS_REQUEST = "GET_CONTACTS_REQUEST";
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";
export const GET_CONTACTS_FAILURE = "GET_CONTACTS_FAILURE";

export const GET_CONTACT_REQUEST = "GET_CONTACT_REQUEST";
export const GET_CONTACT_SUCCESS = "GET_CONTACT_SUCCESS";
export const GET_CONTACT_FAILURE = "GET_CONTACT_FAILURE";

export const GET_CONTACTS_SEARCH_REQUEST = "GET_CONTACTS_SEARCH_REQUEST";
export const GET_CONTACTS_SEARCH_SUCCESS = "GET_CONTACTS_SEARCH_SUCCESS";
export const GET_CONTACTS_SEARCH_FAILURE = "GET_CONTACTS_SEARCH_FAILURE";

interface IGetContactsRequestAction {
    type: typeof GET_CONTACTS_REQUEST,
    page: number
}

interface IGetContactsSuccessAction {
    type: typeof GET_CONTACTS_SUCCESS,
    payload: any
}

interface IGetContactsFailureAction {
    type: typeof GET_CONTACTS_FAILURE
}

interface IGetContactRequestAction {
    type: typeof GET_CONTACT_REQUEST,
    id: number
}

interface IGetContactSuccessAction {
    type: typeof GET_CONTACT_SUCCESS,
    payload: any
}

interface IGetContactFailureAction {
    type: typeof GET_CONTACT_FAILURE
}

interface IGetContactsSearchRequestAction {
    type: typeof GET_CONTACTS_SEARCH_REQUEST,
    name: string,
    page: number
}

interface IGetContactsSearchSuccessAction {
    type: typeof GET_CONTACTS_SEARCH_SUCCESS,
    payload: any
}

interface IGetContactsSearchFailureAction {
    type: typeof GET_CONTACTS_SEARCH_FAILURE
}

export type ContactActionTypes = IGetContactsRequestAction |
    IGetContactsSuccessAction |
    IGetContactsFailureAction |
    IGetContactRequestAction |
    IGetContactSuccessAction |
    IGetContactFailureAction |
    IGetContactsSearchRequestAction |
    IGetContactsSearchSuccessAction |
    IGetContactsSearchFailureAction;
