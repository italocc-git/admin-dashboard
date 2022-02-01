import Routes from "./Routes";
import {Provider} from 'react-redux'
import store from './store'
import GlobalStyles from "./style/global";
import {UsersProvider} from './hooks/useUsers'
function App() {
  return (
    <UsersProvider>
      <Provider store={store}>
        <Routes/>
        <GlobalStyles/>
      </Provider>  
    </UsersProvider>
  );
}

export default App;
 