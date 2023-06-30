import './App.css'
import Flex from './components/Flex.jsx'
import Image from './components/Image'

const images = [
  {id: 1, url:'/image1.jpg', title:'풍경1'},
  {id: 2, url:'/image2.jpg', title:'풍경2'},
  {id: 3, url:'/image3.jpg', title:'풍경3'}
]

function App() {
  return (
    <>
      <Flex>
        {/* key값은 부모 태그에 넣어주기 */}
        {images.map(image => (
          <div key={image.id}>
            <Image url={image.url} title={image.title}/>
            <h2>{image.title}</h2>
          </div>
        ))}
      </Flex>
    </>
  )
}

export default App
