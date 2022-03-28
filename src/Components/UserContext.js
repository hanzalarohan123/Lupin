import React from "react";
//every context method has a provider and a consumer
const UserContext=React.createContext('Ponka') //ponka will be displayed when the Parent component in app.js is not wrapped in the provider method.
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserConsumer,UserProvider}
