import axios from "axios";
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import registerImage from "../assets/Image2.png";
import { ErrorMessage } from "@hookform/error-message";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
  } = useForm();
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setEmail(data.email);
    setPassword(data.Password);
    setUsername(data.Username);
    setPassword_confirmation(data.password_confirmation);
    console.log(data);
    // "https://dummyjson.com/auth/register"
    axios.post("https://goldblv.com/api/hiring/tasks/register", {

      "username": username,
      "email": email,
      "password": Password , 
      "password_confirmation":password_confirmation
      // username: 'kminchelle',
      // password: '0lelplR',
      })
      .then(function (response) {
        let token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/");

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen  bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-400 via-gray-300 to-blue-500">
      <div
        className="hero-content flex-col gap-10 rounded-md p-14 drop-shadow-lg sm:bg-transparent md:flex-row md:bg-white lg:bg-white

"
      >
        <img
          src={registerImage}
          className="lg:w-90 max-w-sm rounded-lg shadow-2xl max-[480px]:w-60"
        />
        <div>
          <h1 className="py-3 text-4xl text-black">Create Account</h1>
          <p className="text-1xl py-3 text-black">
            Go ahead and sign up, let everyone <br /> know how awesome you are!
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-w-[10rem]  max-w-[28rem]   max-[480px]:w-[15rem] lg:w-[26rem]"
          >
            <div class=" Username mb-3">
              <input
                type="text"
                placeholder="Username"
                className="input-bordered input w-full border-gray-200 "
                {...register("Username", {
                  required: "This is required.",
                  maxLength: 15,
                  minLength: 5,
                  pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
                })}
              />{" "}
            </div>

            {errors.Username?.type === "required" && (
              <p className="text-rose-600" role="alert">
                First name is required
              </p>
            )}
            {errors.Username?.type === "minLength" && (
              <p className="text-rose-600" role="alert">
                First name min Length is 5
              </p>
            )}
            {errors.Username?.type === "maxLength" && (
              <p className="text-rose-600" role="alert">
                First name max Length is 15
              </p>
            )}
            {errors.Username?.type === "pattern" && (
              <p className="text-rose-600" role="alert">
                only letters and numbers are allowed
              </p>
            )}

            <div class=" Email mb-3">
              <input
                type="email"
                placeholder="Email"
                className="input-bordered input w-full border-gray-200 "
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />
            </div>
            {errors.Email?.type === "required" && (
              <span className="text-rose-600"> Email field is required</span>
            )}
            {errors.Email?.type === "pattern" && (
              <p className="text-rose-600" role="alert">
                enter valid email
              </p>
            )}

            <div class="Password mb-3">
              <input
                type="password"
                placeholder="Password"
                className="input-bordered input w-full border-gray-200 "
                {...register("Password", {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                })}
              />
            </div>
            {errors.Password?.type === "required" && (
              <span className="text-rose-600"> Password field is required</span>
            )}
            {errors.Password?.type === "pattern" && (
              <p className="text-rose-600" role="alert">
                Enter valid Password
              </p>
            )}
            {errors.Password?.type === "minLength" && (
              <p className="text-rose-600" role="alert">
                Password must be at least 8 characters
              </p>
            )}

            <div class="password_confirmation mb-3">
              <input
                type="password"
                placeholder="password_confirmation"
                className="input-bordered input w-full border-gray-200 "
                {...register("password_confirmation", {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                })}
              />
            </div>

            {watch("password_confirmation") !== watch("Password") &&
            getValues("password_confirmation") ? (
              <p className="text-rose-600">password not match</p>
            ) : null}
            <button className="btn w-full border-0 bg-gradient-to-tl from-sky-400 to-blue-500">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
