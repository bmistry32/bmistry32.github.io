import React from "react";
import { Component } from "react";
import SkyLight from 'react-skylight';


class PortfolioCard extends Component {
  constructor(props) {
    super(props)
    this.simpleDialog = React.createRef()
    this.link = "https://dl.dropboxusercontent.com/s/" + props.img + ".jpg?dl=0";
    if (props.modal_img) {
      this.modal_link = "https://dl.dropboxusercontent.com/s/" + props.modal_img + "?dl=0";
    } else {
      this.modal_link = this.link
    }
    this.defTools = false
    if ('tools' in props){
      this.defTools = true
      this.tools = 'Tools:' + props.tools
    }
    this.defUrl = false
    if ('url' in props){
      this.defUrl = true
      this.url = <a href={props.url}>URL</a>
    }
  }

  render() {
    return (
      <div className={this.props.filters}>
        <a class="portfolio-link" href="#" onClick={() => this.simpleDialog.show()}>
          <div className="caption-port"></div>
          <img className="img-fluid" src={this.link}></img>
          {/* Modal */}
          <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title={this.props.title}>
            <div className="row">
              <div className="col-md-6" style={{ textAlign: "left" }}>
                <img className="img-fluid img-centered" src={this.modal_link}></img>
                <br /><br />
                <span style={{ fontSize: "small"}}>
                  Date: <strong>{this.props.date}</strong><br />
                  {this.defTools ? this.tools : null}<br />
                  <strong>{this.defUrl ? this.url : null}</strong>
                </span>
              </div>
              <div className="col-md-6" style={{ textAlign: "left" }}>
                  {this.props.text}
                  <hr />
                  <i style={{ fontSize: "small" }}>{this.props.subtext}</i><br />
              </div>
            </div>
          </SkyLight>
        </a>
      </div>
    )
  }
}
export default PortfolioCard;