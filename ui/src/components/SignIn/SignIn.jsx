export default function SignIn({}) {
    return (
        <div className="sign-in">
            {/* normal db sign in */}
            <SignInForm />
        </div>
    )
}

export function SignInForm({}) {
    return (
        <div className="signin-form">
            <form action="" method="post">
                <input type="email" name="email" id="email" placeholder="john.doe@email.com" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}