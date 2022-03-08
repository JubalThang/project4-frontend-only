import { HeartIcon, TrashIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('/home')
        .then(res => {
            if(res.ok) {
                res.json().then(posts => setPosts(posts))
            }
        })
    },[])

    function handleDelete() {
        alert("Only the post owner can perform this action!")
    }

    function handleLikes() {
        alert("You must logged In to perform this action!")
    }

    return (
        <div className='max-w-6xl mx-auto'>
            {posts.map(post =>
                <div key={post.id} className="container mx-auto m-16 bg-gray-200 p-6 rounded-lg shadow-xl">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                            <div className='flex items-center'>
                                <div className="rounded-full bg-orange-400 h-14 w-14"></div>
                                <div className="text-xl font-medium px-6">@{post.user.username}</div>
                            </div>
                            <TrashIcon onClick={() => handleDelete(post.id)} className='h-10 w-10 cursor-pointer hover:text-red-500' />
                        </div>

                        <span className="text-2xl font-bold mt-6">{post.title}</span>
                        <span className="text-xl font-bold mt-6">{post.content}</span>
                        <div className="flex justify-end items-center">
                            <span className='pr-2 text-xl'>{post.likes}</span>
                            <HeartIcon onClick={() => handleLikes(post.id)} className='h-10 w-10 flex flex-end text-red-600 hover:text-red-800 active:text-gray-800' />
                        </div>
                    </div>
                    <hr className='mt-4' />
                </div>
            )}
        </div>
    )
}
