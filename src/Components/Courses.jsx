import React from 'react'

const Courses = ({ courses, setCourses, showCourses }) => {

  const coursesToShow = courses.filter(course => course.name.startsWith(showCourses))
  console.log(coursesToShow)
  if (coursesToShow.length > 50) {
    return (
      <div className='flex items-center justify-center text-lg font-bold tracking-wide'>
        <p>Too many matched, narrow down your search</p>
      </div>
    )
  }
  else if (coursesToShow.length <= 50) {
    return (
      <div className=''>
        {coursesToShow.map(course => 
          <div key={course.number}>
            {course.name}{course.number}
          </div> 
        )}
      </div>
    )
  }
}

export default Courses