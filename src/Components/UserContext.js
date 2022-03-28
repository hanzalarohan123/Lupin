import React from "react";
//every context method has a provider and a consumer
const UserContext=React.createContext()
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserConsumer,UserProvider}
