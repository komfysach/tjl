import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '@material-ui/core/Button';

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
                    <label className="label">Email</label>
                    <FormInput
                        name='email'
                        type='email'
                        default value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <label className="label">Password</label>
                    <FormInput
                        name='password'
                        type='password'
                        default value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <Button className="btn" variant="outlined" color="primary" type='submit' value='Submit Form'> Sign In </Button>
                        <Button className="btn" variant="outlined" color="primary" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </Button>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignIn;