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
} from './types';
import axios from 'axios';
import { Dispatch } from 'redux';

const requestContacts = () => ({
    type: GET_CONTACTS_REQUEST
});

const handleContactsSuccess = (data: Array<any>) => ({
    type: GET_CONTACTS_SUCCESS,
    payload: data
});

const handleContactsFailure = () => ({
    type: GET_CONTACTS_FAILURE
});

export const getContacts = (page: number = 1) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(requestContacts());

        axios.get(`/contacts?page=${page}`)
            .then(res => dispatch(handleContactsSuccess(res.data)))
            .catch(dispatch(handleContactsFailure));
    };
};

const requestContact = (id: number) => ({
    type: GET_CONTACT_REQUEST,
    id
});

const handleContactSuccess = (data: any) => ({
    type: GET_CONTACT_SUCCESS,
    payload: data
});

const handleContactFailure = () => ({
    type: GET_CONTACT_FAILURE
});

export const getContact = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(requestContact(id));

        axios.get(`/contacts/${id}`)
            .then(res => dispatch(handleContactSuccess(res.data)))
            .catch(dispatch(handleContactFailure));
    };
};

const requestContactsSearch = (name: string, page: number) => ({
    type: GET_CONTACTS_SEARCH_REQUEST,
    name,
    page
});

const handleContactsSearchSuccess = (data: any) => ({
    type: GET_CONTACTS_SEARCH_SUCCESS,
    payload: data
});

const handleContactsSearchFailure = () => ({
    type: GET_CONTACTS_SEARCH_FAILURE
});

export const getContactsSearch = (name: string, page: number = 1) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(requestContactsSearch(name, page));

        axios.get(`/contacts/search?name=${name}&page=${page}`)
            .then(res => dispatch(handleContactsSearchSuccess(res.data)))
            .catch(dispatch(handleContactsSearchFailure));
    };
};
