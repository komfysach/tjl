import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import Button from '@material-ui/core/Button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = async e => {
        // e.preventDefault();

        const { name, value } = e.target;

        this.setState({ [name]: value });


    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('passwords do no match');
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);

        }

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='h2'> I do not have an account </h2>
                <span className="span">Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <label className="label">Name</label>
                    <FormInput
                        name='displayName'
                        type='text'
                        default value={displayName}
                        handleChange={this.handleChange}
                    />
                    <label className="label">Email</label>
                    <FormInput
                        name='email'
                        type='email'
                        default value={email}
                        handleChange={this.handleChange}
                    />
                    <label className="label">Password</label>
                    <FormInput
                        name='password'
                        type='password'
                        default value={password}
                        handleChange={this.handleChange}
                    />
                    <label className="label">Confirm Password</label>
                    <FormInput
                        name='confirmPassword'
                        type='Password'
                        default value={confirmPassword}
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <Button className="btn" variant="outlined" color="primary" type='submit' value='Submit Form'> Sign Up </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;