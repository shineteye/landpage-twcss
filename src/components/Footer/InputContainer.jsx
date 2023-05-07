import React from 'react'

export default function InputContainer() {
    return (
        <div className='flex flex-col justify-between'>
            <form>
                <div className="flex space-x-3">
                    <input type="text"
                        className='flex-1 px-4 rounded-full focus:outline-none'
                        placeholder='updates into your inbox' />
                    <button className='px-6 py-2 text-white bg-red-500 rounded-full hover:bg-red-400 focus:outline-none'>
                        Go
                    </button>
                </div>
            </form>
            <div className='hidden text-white md:block'>
                Copyright &copy; 2023, All rights reserved
            </div>
        </div>
    )
}
