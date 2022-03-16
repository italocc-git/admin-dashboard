import Routes from './Routes';
import {Provider} from 'react-redux'
import store from './store'
import GlobalStyles from './style/global';
function App() {
  return (
   
      <Provider store={store}>
        <Routes/>
        <GlobalStyles/>
      </Provider>  
   
  );
}

export default App;
 