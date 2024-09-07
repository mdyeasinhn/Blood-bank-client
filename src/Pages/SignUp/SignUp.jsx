import { useContext, useEffect, useState } from "react";
import bgiImg from '../../assets/Image/Login/login.jpg';
import { Link, useLocation, useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { imageUploadFn } from "../../Utils";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, updateUserProfile, user, loading, setLoading } = useContext(AuthContext);
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])
    const from = location.state || '/'

    // post user form db
    const { mutateAsync } = useMutation({
        mutationFn: async user => {
            const { data } = await axiosPublic.put(`/user`, user)
            return data
        },
        onSuccess: () => {
            console.log('Data save at Mongodb');



        }
    })



    // Sign In With Email Password
    const handleSubmit = async e => {
        setLoading(true)
        // 1. upload image url get img url 
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const image = form.image.files[0];
        const bloodGroup = form.blood.value;
        const upazila = form.upazila.value;
        const district = form.district.value;
        const userInfo = {
            role: "volunteer",
            status: "active"
        }
        try {
        const imageUrl = await imageUploadFn(image)


            const user = {
                email, name,  bloodGroup, upazila, district, imageUrl, userInfo
            }




          
            const result = await createUser(email, password);

            console.log(result);


            // 3. Update profile user name and photo in firebase
            await updateUserProfile(name, imageUrl);
            navigate(from, { replace: true })

            toast.success('SignUp Successfull')


            await mutateAsync(user)
        } catch (err) {
            console.log(err);
            toast.error(err?.message)
        }




        // reset();
    }


    if (user || loading) return
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-4'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Get Your Free Account Now.
                    </p>
                    <div className='divider'></div>
                    <form onSubmit={handleSubmit}>
                        {/* User Name Field */}
                        <div className='mt-4'>
                            <div className="flex justify-between">
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    User Name
                                </label>
                            </div>
                            <input

                                id='name'
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                            <div className="mt-2">

                            </div>
                        </div>
                        {/* Photo url  Field*/}
                        <div className=' bg-white w-full  m-auto rounded-lg'>
                            <div className="flex justify-between">
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    Photo
                                </label>
                            </div>
                            <div className='file_upload px-1 py-2 relative border-2 border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input


                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-red-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-red-500'>
                                            Upload Image
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>



                        {/* District  Field*/}
                        <div className='mt-2'>
                            <div className="flex justify-between">
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    District
                                </label>
                            </div>
                            <select

                                name='district'
                                id='district'
                                className='border p-2 rounded-md w-full'
                            >
                                <option disabled value='default' selected>Select Your District </option>
                                <option value='Barishal'>Barishal</option>
                                <option value='Chittagong'>Chittagong</option>
                                <option value='Dhaka'>Dhaka</option>
                                <option value='Mymensingh'>Mymensingh</option>
                                <option value='Khulna'>Khulna</option>
                                <option value='Rajshahi'>Rajshahi</option>
                                <option value='Rangpur'>Rangpur</option>
                                <option value='Sylhet'>Sylhet</option>
                            </select>
                            <div className="mt-2">
                                {/* {errors.district && <span className="text-red-600 ">District  is required</span>} */}
                            </div>
                        </div>
                        {/* upazila   Field*/}
                        <div className='mt-2'>
                            <div className="flex justify-between">
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    Upazila
                                </label>
                            </div>
                            <input

                                id='upazila'
                                autoComplete='upazila'
                                name='upazila'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                            <div className="mt-2">
                                {/* {errors.district && <span className="text-red-600 ">District  is required</span>} */}
                            </div>
                        </div>
                        {/*  Blood Group Field*/}
                        <div className='flex flex-col gap-2 '>
                            <div className="flex justify-between">
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='blood'>
                                    Blood Group
                                </label>
                            </div>
                            <select

                                name='blood'
                                id='blood'
                                className='border p-2 rounded-md'
                            >
                                <option disabled value='default'>Select Your Group  </option>
                                <option value='A+'>A+</option>
                                <option value='A-'>A-</option>
                                <option value='B+'>B+</option>
                                <option value='B-'>B-</option>
                                <option value='AB+'>AB-+</option>
                                <option value='AB-'>AB-</option>
                                <option value='O+'>O+</option>
                                <option value='O-'>O-</option>
                            </select>
                        </div>
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

                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                            <div className="mt-2">

                            </div>
                        </div>
                        {/* Password  Field*/}
                        <div className='mt-2 relative'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input

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
                            <div className="mt-2">

                            </div>
                        </div>
                        {/* Submit From */}
                        <div className='mt-4'>
                            <input
                                value='Sign Up'
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            />

                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${bgiImg})`,
                    }}
                >

                </div>
            </div>
        </div>
    )
}

export default SignUp;