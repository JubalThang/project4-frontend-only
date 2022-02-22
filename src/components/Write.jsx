import { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Write({currentUser}) {
    const Input = styled.input`
    width: 100%;
        padding: 1rem 2rem;
        border: 1px solid lightgray;
        margin: 16px 0;
    `

    const TextArea = styled.textarea`
         width: 100%;
        padding: 1rem 2rem;
        border: 1px solid lightgray;
        margin: 16px 0;
    `
    const Button = styled.button`
        :hover {
            background-color: lightgray;
            color: #202020;
        }
    `
    return (
        <>
        {currentUser ?  
        <div className='mt-16'>
            <h1 className='text-5xl font-extrabold text-center'>Write a post</h1>
            <form className='max-w-4xl mx-auto mt-6'>
                <Input type='text' placeholder='Title'></Input>
                <TextArea type='text' placeholder='Post goes here!'></TextArea>
                <Button className='px-16 py-4 mt-4 rounded-lg bg-green-700 font-bold text-white'>POST</Button>
            </form>
        </div>
        :
        <div className='w-full text-center font-black mt-10 text-4xl text-red-600'>
            <h1>You must sign in to create a post!</h1>
        </div>
    }
        </>
    )
}
