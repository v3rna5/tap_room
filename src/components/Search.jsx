import React from 'react'

function SearchBox(){
  return(
    <div>


      <h2>Search Button</h2>
      <form className="example" action="/action_page.php">
        <input type="text" placeholder="Search.." name="search"/>
        <button type="submit"><i class="fa fa-search">>></i></button>
      </form>
    </div>

  )
}

export default SearchBox
