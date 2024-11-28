import { useState } from "react";
import axios from "axios";
import PasswordNotMatch from "./PasswordNotMatch";
const Singup = () => {
  const URL = "http://localhost:3000/user/singup";
  const [initialLoginData, setInitialData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inistalpasswordState, setpasswordState] = useState(false);
  const onChangeHandleData = (e) => {
    const { name, value } = e.target;
    setInitialData((preData) => ({ ...preData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (initialLoginData.password !== initialLoginData.confirmPassword) {
      setpasswordState(true);
    } else {
      setpasswordState(false);
      try {
        const response = await axios.post(URL, initialLoginData, {
          withCredentials: true,
        });
        console.log("user created successfully", response.data);
        setInitialData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (err) {
        console.log("there is some issue with data posting", err);
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign UP
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* insome case if required  action="#" method="POST"  */}
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={onSubmitHandler}
          >
            {/* full name Start here  */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullName"
                  type="text"
                  required
                  value={initialLoginData.fullName}
                  onChange={onChangeHandleData}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* full name end here */}

            {/* Email address starting here  */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={initialLoginData.email}
                  required
                  onChange={onChangeHandleData}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Email address End here  */}
            {/* password Start here  */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={initialLoginData.password}
                  required
                  onChange={onChangeHandleData}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* password end here  */}
            {/* confirm password start  */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={initialLoginData.confirmPassword}
                  type="Password"
                  required
                  onChange={onChangeHandleData}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {inistalpasswordState ? <PasswordNotMatch /> : <p></p>}
            </div>
            {/* confirm password end here  */}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sing In
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Singup;
