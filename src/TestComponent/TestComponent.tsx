import './TestComponent.scss'

interface ITestComponentProps {
  name: string
}

export function TestComponent( { name }: ITestComponentProps ) {
  return (
    <form>
      <h1>{name}</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" className="input__name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" className="input__email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" className="input__password" />
      <button type="submit" className="formBtn">
        Submit
      </button>
    </form>
  )
}