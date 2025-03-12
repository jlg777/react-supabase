//import { supabase } from '@supabase/supabase-js'
//import { supabase } from '../db/db'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <li>
        <Link to="/login">login</Link>
      </li>
    </>
  )
}
export default Home
