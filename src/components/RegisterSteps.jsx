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
    city: '',
    nameShop: '',
    category: '',
    style: ''
  })

  const styles = ['classic', 'modern']

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData) // Aquí puedes enviar los datos a tu backend
  }

  const handleStyleSelect = (style) => {
    setFormData((prev) => ({ ...prev, style }))
  }

  return (
    <div className="h-screen">
      <div className="flex items-start w-full">
        <Link
          to={'/'}
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
          {/* Step 1 */}
          {step === 1 && (
            <>
              <h1 className="mx-2 text-4xl font-light text-center">
                Create an account
              </h1>
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
                <Link
                  to={'/login'}
                  className="text-sm text-center cursor-pointer"
                >
                  Log in
                </Link>
              </form>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <h1 className="mx-2 text-4xl font-light text-center">
                Create an account
              </h1>
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
                <div
                  className={`flex flex-col gap-2 p-3 border rounded-xl  ${
                    formData.password.length >= 8
                      ? 'bg-green-500 border-green-500'
                      : formData.password.length > 0
                      ? 'bg-red-500 border-red-500'
                      : 'bg-white border-neutral-300'
                  }`}
                >
                  <p
                    className={`text-sm  ${
                      formData.password.length >= 8
                        ? 'text-white'
                        : formData.password.length > 0
                        ? 'text-white'
                        : 'text-neutral-500'
                    }`}
                  >
                    Your password must contain:
                  </p>
                  <div className="ml-5">
                    <li
                      className={`text-sm  ${
                        formData.password.length >= 8
                          ? 'text-white'
                          : formData.password.length > 0
                          ? 'text-white'
                          : 'text-neutral-500'
                      }`}
                    >
                      <p
                        className={`text-sm  ${
                          formData.password.length >= 8
                            ? 'text-white'
                            : formData.password.length > 0
                            ? 'text-white'
                            : 'text-neutral-500'
                        }`}
                      >
                        At least 12 characters
                      </p>
                    </li>
                  </div>
                </div>
                <button
                  className="py-3 text-sm font-medium text-center text-white bg-black border cursor-pointer rounded-xl"
                  onClick={() => {
                    if (formData.password.length >= 8) {
                      setStep(3)
                    } else {
                      alert('Password must be at least 12 characters long')
                    }
                  }}
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
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <h1 className="mx-2 text-4xl font-light text-center">
                Create an account
              </h1>
              <form className="flex flex-col gap-3 mt-5">
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
                  onClick={() => {
                    setStep(4)
                  }}
                  type="button"
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
            </>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="flex items-center gap-20">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 mt-5 w-[30vw]"
              >
                <h1 className="mx-2 mb-5 text-4xl font-light text-center">
                  Create an Shop
                </h1>
                <input
                  type="text"
                  name="nameShop"
                  value={formData.nameShop}
                  onChange={handleChange}
                  required
                  className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                  placeholder="Name shop"
                />
                <input
                  type="text"
                  name="nameShop"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                  placeholder="Category"
                />

                <button
                  className="py-3 mt-5 text-sm font-medium text-center text-white bg-black border cursor-pointer rounded-xl"
                  type="sumbit"
                >
                  Continue
                </button>
                <div
                  className="text-sm text-center cursor-pointer"
                  onClick={() => setStep(3)}
                >
                  Go back
                </div>
              </form>
              <div className="w-[35vw] flex gap-5 flex-col">
                <h1 className="text-lg font-light text-center">
                  Select your style
                </h1>
                {styles.map((styleOption, index) => (
                  <div
                    key={index}
                    className={`w-[35vw] h-[25vh] rounded-xl bg-black/5 cursor-pointer transition-all border-2 ${
                      formData.style === styleOption
                        ? 'border-black-500 scale-105'
                        : 'border-transparent'
                    }`}
                    onClick={() => {
                      handleStyleSelect(styleOption)
                    }}
                  ></div>
                ))}
              </div>
            </div>
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
