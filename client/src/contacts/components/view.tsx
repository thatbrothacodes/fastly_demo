import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { getContact } from '../actions';

interface IComponentProps extends RouteComponentProps {
    contact: any,
    getContact: (id: number) => void
}

function ContactView (props: IComponentProps) {
    React.useEffect(() => {
        const contactId: string = props.location.pathname.split('/')[2];
        
        if(contactId) {
            props.getContact(parseInt(contactId));
        }
    },[]);

    return (
        props.contact && 
            <div>
                <h1>{props.contact.name}</h1>
                <div key="1">
                    <img src={props.contact.image} alt="" height="238" />
                </div>
                <div key="2">
                    <span>Net ID: &nbsp;</span>
                    <span>{props.contact.net_id}</span>
                </div>
                <div key="3">
                    <span>Title: &nbsp;</span>
                    <span>{props.contact.title}</span>
                </div>
                <div key="4">
                    <span>Department: &nbsp;</span>
                    <span>{props.contact.department}</span>
                </div>
                <div key="5">
                    <span>Role: &nbsp;</span>
                    <span>{props.contact.role}</span>
                </div>
                <div key="6">
                    <span>Birthday: &nbsp;</span>
                    <span>{props.contact.birthday}</span>
                </div>
                <div key="7">
                    <span>Slack: &nbsp;</span>
                    <span>{props.contact.slack}</span>
                </div>
                <div key="8">
                    <span>Phone: &nbsp;</span>
                    <span>{props.contact.phone}</span>
                </div>
                <div key="9">
                    <span>Created: &nbsp;</span>
                    <span>{props.contact.created}</span>
                </div>
                <div key="10">
                    <span>Updated: &nbsp;</span>
                    <span>{props.contact.updated}</span>
                </div>
                <div key="11">
                    <span>Url: &nbsp;</span>
                    <span>{props.contact.url}</span>
                </div>
                {props.contact.address &&
                    <div key="12">
                        <h3>Address(es)</h3>
                        {props.contact.address.map((i: any) => {
                            return(
                                <div key="13">
                                    <div key="14">
                                        <span>Email: &nbsp;</span>
                                        <span>{i.email}</span>
                                    </div>
                                    <div key="15">
                                        <span>Visibility: &nbsp;</span>
                                        <span>{i.visible}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
    );
};

const mapStateToProps = (state: any, ownProps: IComponentProps) => {
    const contactId: string = ownProps.location.pathname.split('/')[2];
    
    if(Object.values(state.contacts.items).length > 0) {
        const contact = state.contacts.items[contactId];
        
        if(!contact) {
            const correctContact: any = Object.values(state.contacts.items)[0];
            ownProps.history.push(`/contacts/${correctContact.id}`);
            return {
                contact: {}
            }
        } else {
            return {
                contact
            }
        }
    } else {
        return {
            contact: {}
        }
    }
};

export default connect(mapStateToProps, { getContact })(withRouter(ContactView));
