import React, { Component } from "react";
export default class ImgUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
        this.onImageChange = this.onImageChange.bind(this);
    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };



    render() {

        return (
            <div>
                <div>
                    <div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img style={{ height: "100px", width: "100px" }} src={this.state.image} />
                        </div>
                        <h1>Select Image</h1>
                        <input type="file" name="myImage" onChange={this.onImageChange} />
                    </div>
                </div>
            </div>
        );
    }
}
