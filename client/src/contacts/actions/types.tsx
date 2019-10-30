export const GET_CONTACTS_REQUEST = "GET_CONTACTS_REQUEST";
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";
export const GET_CONTACTS_FAILURE = "GET_CONTACTS_FAILURE";

export const GET_CONTACT_REQUEST = "GET_CONTACT_REQUEST";
export const GET_CONTACT_SUCCESS = "GET_CONTACT_SUCCESS";
export const GET_CONTACT_FAILURE = "GET_CONTACT_FAILURE";

export const GET_CONTACTS_SEARCH_REQUEST = "GET_CONTACTS_SEARCH_REQUEST";
export const GET_CONTACTS_SEARCH_SUCCESS = "GET_CONTACTS_SEARCH_SUCCESS";
export const GET_CONTACTS_SEARCH_FAILURE = "GET_CONTACTS_SEARCH_FAILURE";

interface GetContactsRequestAction {
    type: typeof GET_CONTACTS_REQUEST,
    page: number
}

interface GetContactsSuccessAction {
    type: typeof GET_CONTACTS_SUCCESS,
    payload: any
}

interface GetContactsFailureAction {
    type: typeof GET_CONTACTS_FAILURE
}

interface GetContactRequestAction {
    type: typeof GET_CONTACT_REQUEST,
    id: number
}

interface GetContactSuccessAction {
    type: typeof GET_CONTACT_SUCCESS,
    payload: any
}

interface GetContactFailureAction {
    type: typeof GET_CONTACT_FAILURE
}

interface GetContactsSearchRequestAction {
    type: typeof GET_CONTACTS_SEARCH_REQUEST,
    name: string,
    page: number
}

interface GetContactsSearchSuccessAction {
    type: typeof GET_CONTACTS_SEARCH_SUCCESS,
    payload: any
}

interface GetContactsSearchFailureAction {
    type: typeof GET_CONTACTS_SEARCH_FAILURE
}

export type ContactActionTypes = GetContactsRequestAction |
    GetContactsSuccessAction |
    GetContactsFailureAction |
    GetContactRequestAction |
    GetContactSuccessAction |
    GetContactFailureAction |
    GetContactsSearchRequestAction |
    GetContactsSearchSuccessAction |
    GetContactsSearchFailureAction;
