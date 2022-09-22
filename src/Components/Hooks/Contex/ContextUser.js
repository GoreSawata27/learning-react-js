import React from "React";

const ContextUser = React.createContext() 

const UserProvider = ContextUser.Provider ;
const UserConsumer = ContextUser.Consumer ;

export{UserProvider , UserConsumer }