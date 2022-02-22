import { HeartIcon } from '@heroicons/react/solid'

export default function Home({posts}) {

    return (
        <>
        {posts.map(post =>
        <div key={post.id} className="container mx-auto m-16">
            <div className="flex flex-col">
                <div className="flex items-center">
                    <div className="rounded-full bg-orange-400 h-14 w-14"></div>
                    <div className="text-xl font-medium px-6">{post.user.username}</div>
                </div>

                <span className="text-2xl font-bold mt-6">{post.title}</span>
                <span className="text-xl font-bold mt-6">{post.content}</span>
                <div className="flex justify-end items-center">
                <span className='pr-2 text-xl'>{post.likes}</span>
                <HeartIcon className='h-10 w-10 flex flex-end text-red-600 hover:text-red-800 active:text-gray-800'/>
                </div>
            </div>
            <hr className='mt-4'/>
        </div>
        )}
        </>
    )
}
