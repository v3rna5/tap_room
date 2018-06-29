import React from 'react'

function SearchBox(){
  return(
    <div>
      <style jsx>{`
        body {
            font-family: Arial;
        }
        * {
            box-sizing: border-box;
        }
        div{
          background-color:transparent;
          color:white;
        }
        form.example input[type=text] {
            padding: 10px;
            font-size: 17px;
            border: 1px solid grey;
            float: left;
            width: 80%;
            background: #f1f1f1;
        }
        form.example button {
            float: left;
            width: 20%;
            padding: 10px;
            background: #2196F3;
            color: white;
            font-size: 17px;
            border: 1px solid grey;
            border-left: none;
            cursor: pointer;
        }
        form.example button:hover {
            background: #0b7dda;
        }
        form.example::after {
            content: "";
            clear: both;
            display: table;
        }
       `} </style>
      <h2>Search Button</h2>
      <form className="example" action="/action_page.php">
        <input type="text" placeholder="Search.." name="search"/>
        <button type="submit"><i class="fa fa-search">>></i></button>
      </form>
    </div>

  )
}

export default SearchBox
