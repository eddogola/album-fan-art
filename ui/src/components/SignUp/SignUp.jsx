import React from 'react';

export default function SignUp({}) {
    return (
        <div className="sign-up">
            <SignUpForm />
        </div>
    )
}

export function SignUpForm({}) {
    return (
        <div className="sign-up-form">
            <form action="" method="post">
                <input type="text" name="name" id="name" placeholder="John Doe" />
                <input type="email" name="email" id="email" placeholder='johndoe@email.com' />
                <input type="password" name="password1" id="password1" placeholder='Password' />
                <input type="password" name="password2" id="password2" placeholder='Confirm password' />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}