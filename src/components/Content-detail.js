import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import '../scss/Content-detail.scss';
import { app } from "../actions";
import { connect } from "react-redux";

class ContentDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideDetail: {}
        }
    }

    componentDidMount() {
        const { slideId } = this.props.location.state;
        this.props.dispatch(app.loadContentDetails(slideId, (data, corsURL) => {
            let backdropImage = data.images.find(image => image.type == 'backdrop');
            let squareImage = data.images.find(image => image.type == 'square' || image.type == 'medium');

            this.setState({
                slideDetail: {
                    id: data._id,
                    title: data.title.original,
                    description: data.description.plain.original,
                    backdropImage: `${corsURL}https://mychannel.nunchee.tv/api/assets/images/view/${backdropImage._id}?type=backdrop`,
                    squareImage: squareImage ? `${corsURL}https://mychannel.nunchee.tv/api/assets/images/view/${squareImage._id}?type=backdrop` : undefined,
                    availableDate: data.available ? this.dateUtility(data.available.from): null
                }
            });

        }));
    }

    dateUtility = (date) => {
        return new Date(date).toLocaleString('en-us', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '');
    }

    render() {
        const pageClass = classNames('Page', {
            someStyle: true,
        })

        return (
            <section id="banner" class="clearfix" style={{ background: `url(${this.state.slideDetail.backdropImage})` }}>
                <div id="banner_content_wrapper">
                    <div id="poster">
                        <img src={this.state.slideDetail.backdropImage} class="featured_image" />
                        <img className={"play_button"} src="https://res.cloudinary.com/dw369yzsh/image/upload/v1470916845/play_button_ngnw1z.png" alt="Play Trailer" class="play_button" />
                    </div>
                    <div id="content">
                        <h2 class="title">{this.state.slideDetail.title}</h2>
                        <div class="ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star inactive"></i>
                        </div>

                        <p class="description">{this.state.slideDetail.description}</p>

                        <p class="info">R <span>|</span> 108 min <span>|</span> Action, Adventure, Comedy <span>|</span> {this.state.slideDetail.availableDate}</p>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ContentDetail);
