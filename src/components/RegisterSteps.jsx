import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterSteps = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    country: '',
    state: '',
    city: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData) // Aquí puedes enviar los datos a tu backend
  }

  return (
    <div className="h-screen">
      <div className="flex items-start w-full">
        <Link
          to={"/"}
          className="fixed text-2xl font-bold "
          style={{
            padding: '20px'
          }}
        >
          SPAZYO
        </Link>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="mb-10">
          <h1 className="mx-2 text-4xl font-light text-center">
            Create an account
          </h1>

          {/* Step 1 */}
          {step === 1 && (
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 mt-5"
            >
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
                className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                placeholder="Email"
              />
              <button
                className="py-3 text-sm font-medium text-center text-white bg-black border cursor-pointer rounded-xl"
                onClick={() => setStep(2)}
                type="button"
              >
                Continue
              </button>
              <Link to={"/"} className="text-sm text-center cursor-pointer">Go back</Link>
            </form>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 mt-5"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300 bg-neutral-200"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                placeholder="Password"
              />
              <div className="flex flex-col gap-2 p-3 border rounded-sm border-neutral-300">
                <p className="text-sm text-neutral-500">
                  Your password must contain:
                </p>
                <li className="text-sm text-neutral-500">
                  <p className="text-sm text-neutral-500">
                    At least 12 characters
                  </p>
                </li>
              </div>
              <button
                className="py-3 text-sm font-medium text-center text-white bg-black border cursor-pointer rounded-xl"
                onClick={() => setStep(3)}
                type="button"
              >
                Continue
              </button>
              <div
                className="text-sm text-center cursor-pointer"
                onClick={() => setStep(1)}
              >
                Go back
              </div>
            </form>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                placeholder="Name"
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                placeholder="Country"
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                placeholder="State"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                placeholder="City"
              />
              <button
                className="py-3 text-sm font-medium text-center text-white bg-black border cursor-pointer rounded-xl"
                type="submit"
              >
                Continue
              </button>
              <div
                className="text-sm text-center cursor-pointer"
                onClick={() => setStep(2)}
              >
                Go back
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="flex items-end justify-center w-full">
        <div
          className="fixed flex gap-3 text-xs font-light cursor-pointer text-neutral-600"
          style={{
            padding: '20px'
          }}
        >
          <span className="border-b hover:text-blue-500">Terms of Use</span>|
          <span className="border-b hover:text-blue-500">Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default RegisterSteps
