import React, { ReactElement, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ContactMeProps } from '../../types/app'
import axios from 'axios'
import './styles/contactMe.scss'
import * as AppActions from '../../actions/app';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

function mapDispatchToProps(dispatch: Function) {
    return {
        setEmailSender: (sender: string) => dispatch(AppActions.setEmailSender(sender)),
        setEmailMessage: (message: string) => dispatch(AppActions.setEmailMessage(message)),
        setEmailResponse: (response: Record<string, any>) => dispatch(AppActions.setEmailResponse(response))
    };
}

function mapStateToProps({ app }) {
    return {
        emailSender: app.emailSender,
        emailMessage: app.emailMessage,
        emailResponse: app.emailResponse
    };
}

const ContactMe: React.FC<ContactMeProps> = (props): ReactElement => {
    var template_params = {
        'from_name': props.emailSender,
        'message_from_site': props.emailMessage
    }

    const sendEmail = () => {
        axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: 'default_service',
            template_id: 'template_QdWhihKe',
            user_id: 'user_yZGR5TfmtBi8UhvbzYccn',
            template_params: template_params
        })
            .then(res => {
                console.log(res)
                props.setEmailSender('')
                props.setEmailMessage('')
                props.setEmailResponse(res)
            })
            .catch(err => console.log(err))
    }

    const clearInputs = () => {
        props.setEmailSender('')
        props.setEmailMessage('')
        props.setEmailResponse(null)
    }

    return (
        <Fragment>
            {props.emailResponse === null ?
                <div className='contactMePage'>
                    <div className='sender'>
                        <TextField
                            id="sender"
                            label="Who Are You?"
                            margin="normal"
                            InputLabelProps={{ className: 'overrideColor' }}
                            InputProps={{ className: 'overrideColor', disableUnderline: true }}
                            value={props.emailSender}
                            onChange={(event) => props.setEmailSender(event.target.value)}
                        />
                    </div>
                    <div className='message'>
                        <TextField
                            id="message"
                            label="Send Me A Message"
                            margin="normal"
                            multiline
                            fullWidth
                            rowsMax='10'
                            InputLabelProps={{ className: 'overrideColor' }}
                            InputProps={{ className: 'overrideColor', disableUnderline: true }}
                            value={props.emailMessage}
                            onChange={(event) => props.setEmailMessage(event.target.value)}
                        />
                    </div>
                    <div onClick={() => sendEmail()}>
                        <Fab variant="extended" color="primary" aria-label="add">
                            <span className='send'>Send Message</span><i className="fas fa-paper-plane"></i>
                        </Fab>
                    </div>
                </div> :
                <div className='contactMePage'>
                    {props.emailResponse.status === 200 ?
                        <div className='responseMessage'>
                            <div>I got your message!</div>
                            <div>I promise... see here's your response code</div>
                            <div className='responseData'>
                                <div>Data: {props.emailResponse.data}</div>
                                <div>Status: {props.emailResponse.status}</div>
                            </div>
                        </div> :
                        <div className='responseMessage'>
                            Uh oh... I didn't get that
                        </div>
                    }
                </div>
            }

            <NavLink to='/home' className='bottomPanel' onClick={() => clearInputs()}>
                Home
            </NavLink>
        </Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactMe)