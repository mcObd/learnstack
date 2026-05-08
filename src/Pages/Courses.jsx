import { useEffect } from 'react'
import { supabase } from '../Services/supabase'

export default function Courses() {
  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from('courses').select('*')
      console.log('courses:', data)
      console.log('error:', error)
    }
    fetchCourses()
  }, [])

  return <h1>Courses Page</h1>
}
