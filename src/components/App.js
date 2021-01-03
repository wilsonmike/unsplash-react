import React from 'react';
import axios from 'axios'; 
import SearchBar from './SearchBar'; 


class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID CGDnN_lOXjyVkuwKo0FQ5JJytPb8Q4L1xVi6GM4tn-8'
            }
        })
        console.log(response.data.results); 
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>    
        )
    }
}

export default App; 