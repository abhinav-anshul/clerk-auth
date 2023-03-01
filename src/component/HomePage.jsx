import { UserButton, useUser } from "@clerk/clerk-react"

function HomePage() {
  const { user } = useUser()
  return (
    <div className="App-header">
      <UserButton />
      {user ? <h1>Hello, {user.firstName}!</h1> : null}
    </div>
  )
}

export default HomePage
