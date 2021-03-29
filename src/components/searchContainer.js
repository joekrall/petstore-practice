const SearchContainer = (props) => {

  const updateSearch = (event) => {
    props.setSearchTerm(event.target.value);
  }

  return(<><input
    value={props.searchTerm}
    onChange={updateSearch}
  >
  </input></>)
}

export default SearchContainer;