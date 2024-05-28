import React from 'react'

function Header() {

  return (

    <div>Header</div>

  )
}

export default Header



/*

=> hum 'a' tag use nhi krte, 'Link' tag use krte hai
- 'a' user krne me pura page refresh hota hai (browser to reload the entire page)
- 'Link' prevents the browser to from reloading the page

=> 'href' ki jagah 'to' use hota hai

//-----------------------------------

=> Page Reloads:

<a> Tag: Using an <a> tag for navigation causes the browser to reload the entire page. This results in a full page refresh and the entire JavaScript bundle being re-executed, which defeats the purpose of having a single-page application.
<Link> Component: The Link component from react-router-dom prevents the browser from reloading the page. Instead, it uses the History API to manipulate the URL and renders the appropriate component based on the route. This makes the navigation smoother and faster.

=> Client-Side Routing:

<a> Tag: By default, it performs a server-side navigation, which means the browser requests a new document from the server.
<Link> Component: Enables client-side routing, which means the navigation is handled within the application, and only the necessary components are re-rendered, keeping the application state intact.

=> State Management:

<a> Tag: Causes a full reload, which means any state in the application will be reset.
<Link> Component: Maintains the application's state as it navigates between different views.

*/