import React from 'react'
import { Link } from "react-router-dom"


const BookCardComponent = ({title, year, author, src, worksId}) => {
    return (
        <>
        <Link style = {{margin: "20px"}} to = {`/book/${worksId}`}>
        <div>
        Author : {author}
        </div>
        <div>
         Title :{title}  
        </div>
        <div>
         Published: {year} 
        </div>
        <img src={`http://covers.openlibrary.org/b/isbn/${src}-M.jpg`} />
        </Link>
        </>
    )
}

export default BookCardComponent
