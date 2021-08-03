import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        // e.preventDefault();

        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='h2'>I already have an account</h2>
                <span className='span'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        default value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}

                    />
                    <FormInput
                        name='password'
                        type='password'
                        default value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}

                    />
                    <CustomButton type='submit' value='Submit Form'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        {' '}
                        Sign In With Google
                        {' '}
                    </CustomButton>

                </form>
            </div>

        )
    }
}

export default SignIn;