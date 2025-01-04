import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import { LuMessageSquareMore } from 'react-icons/lu';
import { MdOutlineManageSearch } from 'react-icons/md';

// Highlight section an extra section for the home page
const HighlightSection = () => {
    return (
        <div className='bg-gray-800 mb-5'>
            <div className='w-11/12 mx-auto py-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                <div className='flex gap-3'>
                    <h1 className='text-6xl text-yellow-400'><MdOutlineManageSearch /></h1>
                    <div>
                        <h1 className='text-2xl mb-2'>Powerful Learning Management System</h1>
                        <p>Outstanding features for highly customizable Courses, Units, Lessons, and Quizzes</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <h1 className='text-4xl mt-2 text-yellow-400'><AiFillLike /></h1>
                    <div>
                        <h1 className='text-2xl mb-2'>Effortlessly Manage Courses</h1>
                        <p>User-friendly Course Management Powered by Masterstudy LMS Plugin</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <h1 className='text-4xl mt-2 text-yellow-400'><IoMdSettings /></h1>
                    <div>
                        <h1 className='text-2xl mb-2'>Easily Sell Courses Online</h1>
                        <p>Enjoy the flexibility of education WordPress theme and easily manage online sales.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <h1 className='text-4xl mt-2 text-yellow-400'><LuMessageSquareMore /></h1>
                    <div>
                        <h1 className='text-2xl mb-2'>24/7 Professional Support</h1>
                        <p>We care about our customers and provide free 24/7 support. Ask your questions via Ticket System.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HighlightSection;