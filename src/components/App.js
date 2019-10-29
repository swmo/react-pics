import React from 'react'
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = {
        images: []
    }

    //callback Function from SearchbarComponent
    onSearchSubmit =  async (term) => {

        const response = await unsplash.get('/search/photos',{
            params: {
                query: term
            }
        });

        this.setState({
            images: response.data.results
        });
        
        console.log("async");
    }

 /*
    onSearchSubmit(term){

        // Axios is a promise, deshalb hat es .then Statement:
       
        axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID 82440269018abcac9749aac57a4b77a1aa8c239214934214a53ffa7fadb66b7a'
            },
            params: {
                query: term
            }
        }).then((response) => {
            console.log(response.data.results);
        });
        */

        /*
        not sure if this would work also..
        this.setState({
            imageData: 
                axios.get('https://api.unsplash.com/search/photos',{
                headers: {
                    Authorization: 'Client-ID 82440269018abcac9749aac57a4b77a1aa8c239214934214a53ffa7fadb66b7a'
                },
                params: {
                    query: term
                }
            })
        }); 

        */
 

    searchPhotos(){

    }

    render(){
        return (
        <div className="ui container" style={{marginTop: '10px'}} >
            <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
            <ImageList images={this.state.images}></ImageList>
       
        </div>
        );
    }
}

export default App;