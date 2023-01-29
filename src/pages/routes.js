import Display from 'components/Display/Display';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Display/>}/>
      </Routes>
    </BrowserRouter>
  )
}