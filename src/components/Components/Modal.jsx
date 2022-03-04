export const Modal = ({showModal, setShowModal, showHideModal}) => {
    return(
        <>
        { 
        showModal && 
        <div className="h-screen w-screen fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center">
            <div className=" w-1/3 bg-white m-auto">

                <h1 className="text-center font-bold my-6">Are you sure to Log Out?</h1>
                <div className="flex p-6 justify-between">

                <button onClick={setShowModal} className=" text-green-800 px-4 py-2 border border-gray-700 ">YES</button>
                <button onClick={showHideModal} className='text-red-600 px-4 py-2 border border-gray-700'>CANCEL</button>
                </div>
            </div>
        </div>
        }
        </>
    )
}