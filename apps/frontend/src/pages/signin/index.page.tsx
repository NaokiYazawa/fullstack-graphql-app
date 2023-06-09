import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'ui'

import { Role } from '~/generated/graphql'

function SignIn() {
  const { loginWithRedirect } = useAuth0()

  const loginAsUser = () => {
    loginWithRedirect({
      role: Role.User,
    })
  }

  return (
    <div>
      <Button onClick={loginAsUser}>Sign in</Button>
      <div>
        if you don't have an account? then
        <Button className="ml-1" onClick={loginAsUser}>
          Sign up
        </Button>
      </div>
    </div>
  )
}

export default SignIn
