export default function SignIn(props) {
    const handleLogin = async googleData => {
        console.log(googleData)
        const response = await fetch("http://localhost:3001/api/v1/auth/google", {
          method: "POST",
          body: JSON.stringify({
            token: googleData.tokenId
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await response.json()
        // store returned user
    };

    return (
        <div className="sign-in">
            {/* normal db sign in */}
            <SignInForm />
        </div>
    )
}

export function SignInForm(props) {
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