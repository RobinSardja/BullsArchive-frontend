import { useState, useEffect } from 'react'
import './index.css'
import Nav from "./Components/Nav"
import Tile from "./Components/Tile"
import Search from './Components/Search'
import Courses from './Components/Courses'
import axios from 'axios'

function App() {

  const [showCourses, setShowCourses] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/courses')
      .then(response => {
        setCourses(response.data)
      })
  }, []);

  const handleShowCoursesChange = (event) => {
    setShowCourses(event.target.value)
  }

  return (
    <div className="bg-emerald-800 w-auto h-screen flex flex-col">
      <Nav />
      <Courses courses={courses} setCourses={setCourses} showCourses={showCourses} />
      <Tile />
    </div>
  )
}

export default App