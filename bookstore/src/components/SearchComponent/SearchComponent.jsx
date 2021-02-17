import React from 'react'

const SearchComponent = ({setSearchState}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const [input] = e.target.children
        setSearchState(input.value)

      }

    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" name = "input" placeholder = "search"></input>
            <input type = "submit" name = "submit" value = "Search"></input>
        </form>
    )
}

export default SearchComponent
