
import './App.css'
import Sidebar from './components/Sidebar'
import SiteBody from './components/SiteBody'

function App() {


  return (
    <div className='p-3 flex min-h-screen gap-3 h-full'>
      <Sidebar />
      <SiteBody />
    </div> 
  )
}

export default App
