import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostList from './components/PostList'
import PostDetails from './components/PostDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/placeholder-rtk/" element={<PostList />} />
        <Route path="/placeholder-rtk/posts/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  )
}

export default App

