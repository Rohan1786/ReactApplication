import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me you get to now'
}
function MyApp(){
    return(
        <div>
            <h1>Custome React app</h1>
        </div>
    )
}
const value=(
    <a href="https://google.com">
        <h1>your going to gooogle</h1>
    </a>
)

const reactAnother=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'hello click me for google'
)


createRoot(document.getElementById('root')).render(
//  <MyApp/>
<App/>

// value
// reactAnother

 
)
