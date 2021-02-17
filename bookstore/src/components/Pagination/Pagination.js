import React from 'react'
import "./Pagination.css"
const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    
    return (
        <nav style={{height: "30px"}}>
          <ul className="pagination">
              {pageNumbers.map(el => {
                return(
                <li key = {el} className = "li">
                    <a href = "!#" onClick = {(e) =>{
                        e.preventDefault() 
                        paginate(el)}} 
                        className = "link"> {el} </a>
                </li>
                  )
              })}
          </ul>
        </nav>
    )
}

export default Pagination
