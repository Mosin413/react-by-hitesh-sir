import React from 'react'

// function Card(props) {

function Card({username, btnText = "Default 2"}){     // directly destructuring instead of props

    // console.log("props", props)

    // console.log(props.username)  // no need to use props (bcz, destructuring)

    console.log(username)


    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
            {/* <h1 className="text-lg font-semibold text-white">{username? username : "Default 3"}</h1> */}
            <h1 className="text-lg font-semibold text-white">
                {username || "ABCD"}
            </h1>
            <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                {/* {btnText || "Default 1"} → */}
                {btnText} →
            </button>
            </div>
        </div>
    )
}

export default Card


// FOR KNOWLEDGE OF SYNTAX


// Method 0

// declare at the time of argument passing
// function Card({username, btnText = "Default 2"}){


// Method 1

{/* <h1 className="text-lg font-semibold text-white">
  {default || "mosin"}
</h1> */}


// Method 2

{/* <h1 className="text-lg font-semibold text-white">
  {default || "mosin"}
</h1> */}


// Method 3

{/* <h1 className="text-lg font-semibold text-white">
  {condition1 ? (
    // Render content if condition1 is true
    content1
  ) : condition2 ? (
    // Render content if condition2 is true
    content2
  ) : condition3 ? (
    // Render content if condition3 is true
    content3
  ) : (
    // Default content if none of the conditions are true
    defaultContent
  )}
</h1> */}