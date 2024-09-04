import { Link, useLocation, useNavigate } from "react-router-dom";
import bgiImg from '../../assets/Image/Login/login.jpg';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const { signIn, signInWithGoogle, user, loading } = useContext(AuthContext);
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])
    const from = location.state || '/'



    // Sign In With Email Password
    const onSubmit = async data => {
        try {
            const result = await signIn(data.email, data.password);
            console.log(result);
            navigate(from, { replace: true })
            toast.success('SignUp Successfull')
        } catch (err) {
            console.log(err);
            toast.error(err?.message)
        }

        reset();
    }


    if (user || loading) return;

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] md:my-4 lg:my-12'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${bgiImg})`,
                    }}
                ></div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>


                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Welcome back!
                    </p>

                    

                    <div className='divider'>
                  
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email  Field*/}
                        <div className='mt-2'>
                            <div className="flex justify-between">
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    Email Address
                                </label>
                            </div>
                            <input
                                {...register("email")}
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                            <div className="mt-2">
                            </div>
                        </div>

                        <div className='mt-4 relative'>
                            <div className='flex justify-between '>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                             {...register("password")}
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type={showPassword ? "text" : "password"}
                            />
                            <span className="absolute top-10 right-2" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>
                        <div className='mt-6'>
                            <input
                            value='Sign In'
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            />
                                
                        
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/signup'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign up
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login