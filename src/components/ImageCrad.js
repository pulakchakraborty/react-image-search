import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setUpSpans);
    }

    setUpSpans = () => {
        const imageHeight = this.imageRef.current.clientHeight;
        const spans = Math.ceil(imageHeight / 10 + 1);
        this.setState({ spans: spans });   // => ES6 syntax this.setState({ spans })
    }

    render() {

        const { description, urls } = this.props.image;

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>    {/* "span" number of cells for each image */}
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;
