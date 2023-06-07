import { AnimatePresence } from 'framer-motion'
import * as React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Basic from './Pages/Basic/Basic'
import Basic2 from './Pages/Basic2/Basic2'

interface RouterProps {

}

const Router: React.FC<RouterProps> = ({ }: RouterProps) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} key='/' />
        <Route path='/basic' element={<Basic />} key='/basic' />
        <Route path='/basic2' element={<Basic2 />} key='/basic2' />
      </Routes>
    </AnimatePresence>)
}

export default Router
