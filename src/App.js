import './App.css';

import React  from 'react'
import Addition from './Components/Addition';

import ContextOne from './Components/ContextOne';
import { UserProvider } from './Components/ContextUser';
import Conditionalrendering from './Components/Conditionalrendering';
import Eventtextchange from './Components/Eventtextchange';
import FetchAxiosUseEffect from './Components/FetchAxiosUseEffect';
import Handelstatebind from './Components/Handelstatebind';
import HookUseEffect from './Components/HookUseEffect';

function App() {

  return (

    < >

      <div className="Appp">

        <Addition />
        <UserProvider value='Gore'>
          <Conditionalrendering />
        <ContextOne />
        </UserProvider>
        <Eventtextchange />
        <FetchAxiosUseEffect />
        <Handelstatebind />
        <HookUseEffect/>
       
      </div>
      

    </>

  )
}

export default App;