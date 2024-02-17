import React from 'react';

const SearchBox = ({searchfield, searchChange}) => 
{
	return (
		<div>
			<input onChange={searchChange} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Serch robots" />
		</div>
	);
}
export default SearchBox;