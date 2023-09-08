import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Layout from './components/appui/Layout'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes> 

       <Route path='/'  element ={<Layout/>}>
       
         

       </Route>
       
    </Routes>




    </BrowserRouter>
    </>
  )
}

export default App
