import React from 'react'

const Search = ({ showCourses, handleShowCoursesChange }) => {
  return (
    <div className='py-20 flex flex-col gap-8 justify-center items-center'>
      <h2 className='text-slate-100 font-bold text-3xl tracking-widest'>
        SEARCH A COURSE
      </h2>
      <input className='p-4 outline-none h-12 w-[400px] sm:w-[500px] md:w-[650px] lg:w-[800px] rounded-3xl bg-zinc-400 focus:bg-green-50/90 transition-all duration-150' type="text" value={showCourses} onChange={handleShowCoursesChange} />
    </div>
  )
}

export default Search