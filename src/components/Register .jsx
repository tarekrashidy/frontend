import axios from 'axios';
import {React,useState} from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import registerImage from '../assets/Image2.png'
import { ErrorMessage } from '@hookform/error-message';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, watch, getValues } = useForm();
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [Confirmpassword, setConfirmpassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (data,e) => {
        e.preventDefault();
        setEmail(data.email)
        setPassword(data.Password)
        setUsername(data.Username)
        setConfirmpassword(data.Confirmpassword)
        console.log(data);

        axios.post('https://dummyjson.com/auth/register', {
            // email: email,
            // Password: Password
            username: 'kminchelle',
            password: '0lelplR',
        })
            .then(function (response) {

            let token=response.data.token;
            localStorage.setItem('token',token);
                navigate("/");

                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
  
    }


    return (



   <div className="hero min-h-screen  bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-400 via-gray-300 to-blue-500">
        
          <div className="hero-content gap-10 flex-col md:flex-row bg-white rounded-md  p-14 drop-shadow-lg

">
                <img src={registerImage} className="max-w-sm rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="text-black text-4xl py-3">Create Account</h1>
                    <p className="text-black text-1xl py-3">Go ahead and sign up, let everyone <br/> know how awesome you are!</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-[26rem]     min-w-[22rem] max-w-[28rem]'>


                        <div class=" Username mb-3">
                            <input type="text" placeholder="Username" className="input input-bordered border-gray-200 w-full "{...register("Username", { required: "This is required.", maxLength: 15, minLength: 5, pattern: /[^a-z0-9]/gi })} />
                   
                       </div>


                        {errors.Username?.type === 'required' && <p className='text-rose-600'
                                                                                  role="alert">First name is required</p> }
                        {errors.Username?.type === 'minLength' && <p className='text-rose-600'
                            role="alert">First name min Length is 5</p> }
                        {errors.Username?.type === 'maxLength' && <p className='text-rose-600'
                            role="alert">First name max Length is 15</p> }

                        <div class=" Email mb-3">
                            <input type="email"  placeholder="Email" className="input input-bordered border-gray-200 w-full "{...register("Email", {
                                required: true, maxLength: 20, pattern: /^\S+@\S+\.\S+$/
 })} />
                   
                        </div>
                        {errors.Email && <span className='text-rose-600'> Email field maxLength: 20</span>}

                        <div class="Password mb-3">
                            <input type="password" placeholder="Password" className="input input-bordered border-gray-200 w-full "{...register("Password", { required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} />
                   
                          </div>
                        {errors.Password && <span className='text-rose-600'> Password field maxLength: 20</span>}

                        <div class="Confirmpassword mb-3">
                            <input type="password" placeholder="Confirmpassword" className="input input-bordered border-gray-200 w-full "{...register("Confirmpassword", { required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} />
                   
                         </div>
              
                        {errors.Confirmpassword && <span className='text-rose-600'>This field is required</span>}


                        {watch("Confirmpassword") !== watch("password") &&
                            getValues("Confirmpassword") ? (
                                <p className='text-rose-600'>password not match</p>
                        ) : null}
                        <button className="btn btn-info w-full">Create Account</button>
            </form>
                  
                  </div>
              </div>
       
      </div>













       
    );
}

export default Register
