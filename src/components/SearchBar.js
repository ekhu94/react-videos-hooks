import React, { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('');

    const onFormSubmit = e => {
        e.preventDefault();
        console.log(term)
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label htmlFor="input">
                        Video Search
                    </label>
                    <input
                        type="text"
                        id="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </form>

        </div>
    );
};

export default SearchBar;