import React, { Component } from "react";
import "../scss/Content-detail.scss";
import { app } from "../actions";
import { connect } from "react-redux";

class ContentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideDetail: {},
    };
  }

  componentDidMount() {
    const { slideId } = this.props.location.state;
    this.props.dispatch(
      app.loadContentDetails(slideId, (state) => {
        let data = state.app[`content-${slideId}`];
        let backdropImage = data.images.find(
          (image) => image.type == "backdrop"
        );
        let squareImage = data.images.find(
          (image) => image.type == "square" || image.type == "medium"
        );

        this.setState({
          slideDetail: {
            id: data._id,
            title: data.title.original,
            description: data.description.plain.original,
            backdropImage: `https://mychannel.nunchee.tv/api/assets/images/view/${backdropImage._id}?type=backdrop`,
            // squareImage: squareImage
            //   ? `https://mychannel.nunchee.tv/api/assets/images/view/${squareImage._id}?type=square`
            //   : undefined,
            availableDate: data.available
              ? this.dateUtility(data.available.from)
              : null,
          },
        });
      })
    );
  }

  dateUtility = (date) => {
    return new Date(date)
      .toLocaleString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace(",", "");
  };

  render() {

    return (
      <section
        id="banner"
        className={"clearfix"}
        style={{ background: `url(${this.state.slideDetail.backdropImage})` }}
      >
        <div id="banner_content_wrapper">
          <div id="poster">
          {/* square images are missing for some items; using backdrop-image instead */}
            <img
              src={this.state.slideDetail.backdropImage}
              className={"featured_image"}
            />
            <img
              className={"play_button"}
              src="https://res.cloudinary.com/dw369yzsh/image/upload/v1470916845/play_button_ngnw1z.png"
              alt="Play Trailer"
              className={"play_button"}
            />
          </div>
          <div id="content">
            <h2 className={"title"}>{this.state.slideDetail.title}</h2>
            <p className={"description"}>{this.state.slideDetail.description}</p>
            <p className={"info"}>
              R <span>|</span> 108 min <span>|</span> Action, Adventure, Comedy{" "}
              <span>|</span> {this.state.slideDetail.availableDate}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ContentDetail);
