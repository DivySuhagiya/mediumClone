import BlogContent from './components/blog/BlogContent'
import CommentSection from './components/CommentSection'
import Footer from './components/Footer'
import Header from './components/header/Header'
import Recommendations from './components/Recommendations'

function App() {

  return (
    <>
    <div>
      <Header/>
      <BlogContent/>
      <CommentSection/>
      <Recommendations/>
      <Footer/>
    </div>
    </>
  )
}

export default App
