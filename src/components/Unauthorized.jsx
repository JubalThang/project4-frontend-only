import { HeartIcon } from '@heroicons/react/solid'

export default function Home() {
    return (
        <div className="container mx-auto m-16">
            <div className="flex flex-col">
                <div className="flex items-center">
                    <div className="rounded-full bg-orange-400 h-14 w-14"></div>
                    <div className="text-xl font-medium px-6">Author name</div>
                </div>

                <span className="text-2xl font-bold mt-6">Post: Title</span>
                <span className="text-xl font-bold mt-6">Post: Content</span>
                <div className="flex justify-end items-center">
                <span className='pr-2 text-xl'>12</span>
                <HeartIcon className='h-10 w-10 flex flex-end text-red-600'/>
                </div>
            </div>
            <hr className='mt-4'/>
        </div>
    )
}
