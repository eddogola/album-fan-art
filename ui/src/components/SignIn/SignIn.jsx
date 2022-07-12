export default function SignIn({  }) {
    return (
        <div className="sign-in">
            <p>You are not logged in</p>
            <a href={ "/auth/login" }>
                Login Here
            </a>
        </div>
    )
}