import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    render(){
        const images = this.props.images.map(({id,description,urls}) => {
            return (
                <div>
                    <img key={id} alt={description} src={urls.small} />
                    <ImageCard />
                </div>
            )
        });
        return (
            <div>
                 Found: {this.props.images.length} images
                 <div className="image-list">
                    {images}
                 </div>
            </div>
        );
    }
}

export default ImageList;