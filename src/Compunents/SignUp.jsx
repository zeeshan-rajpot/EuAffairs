import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userApi } from '../api';

const SignUp = ({ toggle }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!checked) {
      setError("You must agree to the Terms & Conditions and Privacy Policy");
      setLoading(false);
      return;
    }

    const credentials = {
      firstName,
      lastName,
      email,
      password
    }

    try {
      const userData = await userApi.signup(credentials);
      setSuccess(true);
      // Optionally, you can handle redirect or other actions upon successful signup here
    } catch (error) {
      setError("Error signing up: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <div
        id="default-modal"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="relative w-full max-w-md bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center p-4">
            <h3></h3>
            <button
              onClick={toggle}
              className="text-gray-400 hover:text-gray-600"
            >
              <span className="sr-only">Close modal</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9.293l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 9.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 pt-1 space-y-4 text-center">
            <h3 className='text-xl md:text-3xl font-semibold'>EU AFFAIRS</h3>
            <p className="text-lg text-gray-500 font-semibold">
              Sign Up
            </p>
            <div className="input-container shadow mt-3 rounded-3xl bg-[#fafafa]">
              <img src="/Frame 33.png" className="w-6" alt="Email Icon" />
              <input
                type="text"
                name='firstName'

                placeholder="First Name"

                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#fafafa] "
              />
            </div>

            <div className="input-container shadow mt-3 rounded-3xl bg-[#fafafa]">
              <img src="/Frame 33.png" className="w-6" alt="Email Icon" />
              <input
                type="text"
                name='lastName'
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#fafafa] "
              />
            </div>
            <div className="input-container shadow mt-3 rounded-3xl bg-[#fafafa]">
              <img src="/Frame 33.png" className="w-6" alt="Email Icon" />
              <input
                type="email"
                name='email'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#fafafa] "
              />
            </div>
            <div className="input-container shadow mt-3 rounded-3xl bg-[#fafafa]">
              <img src="/Frame 34.png" className="w-6" alt="Password Icon" />
              <input
                type="password"
                name='password'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#fafafa] "
              />
            </div>
            <div className="input-container shadow mt-3 rounded-3xl bg-[#fafafa]">
              <img src="/Frame 34.png" className="w-6" alt="Confirm Password Icon" />
              <input
                type="password"
                name='confirmPassword'
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-[#fafafa] "
              />
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <span className='ms-1'>
                I agree with the <Link to='/Terms' className='text-theme mx-1'>
                  Term & Conditions
                </Link>
                and <Link to='/PrivacyPolicy' className='text-theme mx-1'>
                  Privacy Policy
                </Link>
              </span>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">Sign up successful!</p>}

            <button
              type="submit"
              className="w-[75%] m-auto my-5 mt-10 text-theme bg-secColor font-medium rounded-3xl text-lg px-5 py-2.5 text-center  hover:bg-transparent hover:text-login duration-200 border border-secColor"
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
