import "./SearchBar.css"

const SearchBar = ({dataFilter}) => {

  const handleSearch = (event) => dataFilter.setFilter(event.target.value); 

  return (
    <div className="searchBar">
      <label className="mi-outlined">search</label><input type="text" onChange={handleSearch} placeholder="Filtre su objetivo" />
    </div>
  )
}

export default SearchBar;