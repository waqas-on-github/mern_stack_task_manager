import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Layout from './components/genrelui/Layout'
import Tasks from './components/tasksui/Tasks'
import PostTask from './components/forms/PostTask'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes> 
       <Route path='/'  element ={<Layout/>}>
        <Route index element={<PostTask/>}/>
        <Route path='tasks'  element={<Tasks/>} />
      </Route>
   </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
