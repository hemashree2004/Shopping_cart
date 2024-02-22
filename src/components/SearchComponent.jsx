import React from 'react';

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>Manya's RoseGold Jewellery Collections</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="You are searching for?"
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
export default SearchComponent;