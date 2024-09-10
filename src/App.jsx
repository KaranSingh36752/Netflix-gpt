import { Provider } from 'react-redux'
import Body from './components/Body'
import appstore from './utilis/appStore'


function App() {
 

  return (
    <div className=''>
      <Provider store={appstore}>
        <Body />
      </Provider>
      
    </div>
  )
}

export default App
