import React, {useState, useEffect} from 'react'
import { search } from "../../services"
import BookCardComponent from '../BookCardComponent/BookCardComponent'
import Pagination from '../Pagination/Pagination'
import SearchComponent from '../SearchComponent/SearchComponent'
import "./HomePageComponentStyles.css"

const HomePageComponent = () => {
    const [searchState,setSearchState] = useState("")
    const [posts,setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage,setPostsPerPage] = useState(5)
    const [book, setBook] = useState("")

    useEffect(() => {
        search(searchState).then(async (res) => {
            setPosts(await res.data.docs.filter((el, i) => i < 100))
        })
    },[searchState])

    const lastIndex = currentPage * postsPerPage
    const firstIndex = lastIndex - postsPerPage
    const currentPost = posts.slice(firstIndex, lastIndex)

   console.log(currentPost)

   const paginate = (pageNumber) => {
       setCurrentPage(pageNumber)
   }

   const handleClick = (el) => {
    setBook(el.key)
    console.log(book)
   }
 
    return (
        <div>
            <SearchComponent setSearchState = {setSearchState} />
            <div className = "homePageDiv">
            {currentPost ? currentPost.map(el => {
               return   <BookCardComponent  onClick = {handleClick} title = {el.title} key = {el.key} year = {el.publish_year ? el.publish_year[0]: null} author = {el.author_name ? el.author_name[0]: null} src = {el.isbn ? el.isbn[0] : null} worksId = {el.lending_edition_s ? el.lending_edition_s : null}/> 
            }): <div> No Results </div>  }
            </div>
             <Pagination postsPerPage ={postsPerPage} totalPosts = {posts.length} paginate = {paginate} />
        </div>
    )
}

export default HomePageComponent
