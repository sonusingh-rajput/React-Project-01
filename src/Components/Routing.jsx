import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Details from './Details'


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />}/>
    </Routes>
  )
}

export default Routing