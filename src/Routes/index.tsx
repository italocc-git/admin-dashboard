import {BrowserRouter , Route} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard'
import {EditPage} from '../pages/EditPage'
import {CreatePage} from '../pages/CreatePage'


function Routes() {
    return(
        <BrowserRouter>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/createUser' component={CreatePage}/>
            <Route path='/editUser/:id' component={EditPage}/>
        </BrowserRouter>
    )
   
}

export default Routes