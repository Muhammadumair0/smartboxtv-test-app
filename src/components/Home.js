import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../scss/Home.scss";
import { app } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class MoviesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = {
      activeSlide: -1,
      prevSlide: -1,
      sliderReady: false,
      contents: [],
    };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
    this.props.dispatch(app.loadContents((data, corsURL) => {
      const contents = data.data.items.map(item => {
        let imageObj = item.images.find(image => image.type == 'backdrop');
        return {
          id: item._id,
          title: item.title.original,
          description: item.description.plain.original,
          imageURL: `${corsURL}https://mychannel.nunchee.tv/api/assets/images/view/${imageObj._id}?type=backdrop`
        };
      });

      this.setState({ contents }, () => {
        console.log('this stat', this.state.contents)
      })
    }))
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.state.contents;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={classNames("slider", { "s--ready": sliderReady })}>
        <p className="slider__top-heading">Media Playlist</p>
        <div className="slider__slides">
          {this.state.contents.map((slide, index) => (
            <div
              className={classNames("slider__slide", {
                "s--active": activeSlide === index,
                "s--prev": prevSlide === index,
              })}
              key={slide.description}
            >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">
                  {slide.title || slide.description}
                </h3>
                <h2 className="slider__slide-heading">
                  {slide.description.split("").map((l) => (
                    <span>{l}</span>
                  ))}
                </h2>
                <p className="slider__slide-readmore">read more</p>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.imageURL})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="slider__control"
          onClick={() => this.changeSlides(-1)}
        />
        <div
          className="slider__control slider__control--right"
          onClick={() => this.changeSlides(1)}
        />
      </div>
    );
  }
}

const slides = [
  {
    city: "Paris",
    country: "France",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg",
  },
  {
    city: "Singapore",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg",
  },
  {
    city: "Prague",
    country: "Czech Republic",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg",
  },
  {
    city: "Moscow",
    country: "Russia",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg",
  },
];

const MoviesSliderWithSlides = (props) => {
  return <MoviesSlider {...props} slides={slides} />;
};

const mapStateToProps = (state) =>  {
 return { contents: state.app.contents }
};

export default connect(mapStateToProps)(MoviesSliderWithSlides);
