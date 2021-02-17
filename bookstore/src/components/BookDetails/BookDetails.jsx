import React from 'react'

const BookDetails = ({title, year, author, src}) => {
    return (
        <>
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
        </>
    )
}

export default BookDetails
