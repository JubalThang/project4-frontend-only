
import { useForm } from 'react-hook-form'

export default function Write({onSignIn}) {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        onSignIn(data)
    }
    return (
        <div className="w-full max-w-lg mx-auto mt-16">
            <h1 className='text-3xl font-extrabold text-center'>Sign In</h1>

            <form className="bg-white shadow-md rounded px-8 mt-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">username </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='username' {...register("username", {required:true})} />
                    {errors.password && <p className='text-red-400'>This is is required</p>}
                </div>

                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">password</label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='password' placeholder='*****' {...register("password", { required: true })} />
                    {errors.password && <p className='text-red-400'>This is is required</p>}
                </div>

                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit' value='Log In' />
                <a className="ml-6 font-bold text-sm text-blue-500 hover:text-blue-800" href="/signup">
                        Do not have account?
                 </a>
            </form>
        </div>

    )
}