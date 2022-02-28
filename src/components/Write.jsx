import { useForm } from 'react-hook-form'

export default function Write({ isLoggedIn, handlePost }) {
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data)
        // if (currentUser.id) {
            // const post = {...data, "user_id" : currentUser.id}
        //     const post = {...data, "user":{ "id" : currentUser.id, "username" : currentUser.username}}
        //     handlePost(post)
        // } else {
        //     console.log("No logged in user!")
        // }
        handlePost(data)
    }

    return (
        <>
            {isLoggedIn ?
                <div className="w-full max-w-4xl mx-auto mt-16">
                    <h1 className='text-3xl font-extrabold text-center'>Write A Post</h1>

                    <form className="bg-white shadow-md rounded px-8 mt-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Post Title</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("title", { required: true })} />
                            {errors.password && <p className='text-red-400'>This is is required</p>}
                        </div>

                        <div className='mb-4'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Post Content</label>
                            <textarea className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='text' {...register("content", { required: true })} />
                            {errors.password && <p className='text-red-400'>This is is required</p>}
                        </div>

                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit' value='Post' />

                    </form>
                </div>
                // <div className='mt-16'>
                //     <h1 className='text-5xl font-extrabold text-center'>Write a post</h1>
                //     <form className='max-w-4xl mx-auto mt-6' onSubmit={handleSubmit(onSubmit)}>
                //         <Input type='text' placeholder='Title' {...register("title", {required:true})}></Input>
                //         <TextArea type='text' placeholder='Post goes here!' {...register("content")}></TextArea>
                //         <Button className='px-16 py-4 mt-4 rounded-lg bg-green-700 font-bold text-white'>POST</Button>
                //     </form>
                // </div>
                :
                <div className='w-full text-center font-black mt-10 text-4xl text-red-600'>
                    <h1>You must sign in to create a post!</h1>
                </div>
            }
        </>
    )
}
