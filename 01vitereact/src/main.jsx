import React from 'react'
import ReactDOM  from "react-dom/client";
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>This is custom App</h1>
        </div>
    )
}

// const reactElement = {
//     type : 'a',
//     props : {
//               href : 'https://google.com',
//               target : '_blank'
//             },
//     children : "Click me to the Visit Google",
// }

const anotherElement = (
    <a href="https://google.com" target = '_blank' >Vist google</a>
)

const anotherUser = "Chai Aur React"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target : '_blank'},
    'click me to visit google',
    anotherUser,
)

ReactDOM.createRoot(document.getElementById('root')).render(
    //    <>
    //     <App />
       reactElement
    //    </>

)
