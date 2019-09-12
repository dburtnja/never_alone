import React from 'react';
import './Login.css';
import GoogleLogin from 'react-google-login';

export default class Login extends React.Component{

    render() {
        return (
            <div className={'login-part'}>
                <h3 id={'sign-in-text'} className={'text-center'}> Sign in </h3>
                <GoogleLogin
                    id={'sign-in-button'}
                    onSuccess={(response) => console.log(response)}
                    onFailure={() => alert('Failure')}
                    clientId={"462660016574-il9iogu20ltdqar1q7lulveka6lua3cb.apps.googleusercontent.com"}
                />
            </div>
        );
    }

}