
const SearchBar = ({dataFilter}) => {

  const handleSearch = (event) => dataFilter.setFilter(event.target.value); 

  return (
    <div>
      <label>🔎</label><input type="text" onChange={handleSearch} />
    </div>
  )
}

export default SearchBar;