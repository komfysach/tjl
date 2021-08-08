import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '@material-ui/core/Button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }
    };

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
                        required
                    />
                    <label className="label">Password</label>
                    <FormInput
                        name='password'
                        type='password'
                        default value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <Button className="btn" variant="outlined" color="primary" type='submit' value='Submit Form'> Sign In </Button>
                        <Button className="btn" variant="outlined" color="primary" type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            <img className='img' src="https://img.icons8.com/fluency/20/000000/google-logo.png" alt='Google' /> Sign In
                        </Button>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignIn;