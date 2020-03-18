import React from "react";
import * as hospital_index from "../data/hospital_index";
import * as needTypes from "../data/needTypes";
import { withRouter } from "react-router-dom";

class Hospital extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needs: []
    };
  }

  getUserData = () => {
    let db = this.props.db;
    db.collection("need")
      .where("location_id", "==", this.props.match.params.id)
      .get()
      .then(snapshot => {
        let data = snapshot.docs.map(d => {
          var dict = d.data();
          dict["id"] = d.id;
          return dict;
        });
        console.log(data);
        this.setState({ needs: data });
      })
      .catch(console.log);
  };

  handleChange(event) {}

  handleSubmit(event) {}

  componentDidUpdate() {}

  componentDidMount() {
    this.getUserData();
  }

  render() {
    const hospital = hospital_index.index.id_index[this.props.match.params.id];

    return (
      <div className="">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1" id="hospitalname">
            <b>{hospital.name}</b> in {hospital.city}
          </span>
          <a href="#" className="navbar-brand mb-0 h1 logored">
            hospital.community
          </a>
        </nav>
        <div className="content">
          <div className="panel">
            <h3>Needs</h3>
            <span className="group" id="needslist">
              {needTypes.needTypes.map(needType => {
                return (
                  <div>
                    <h3 className="group-label">{needType.name}</h3>
                    <ul className="list-group">
                      {this.state.needs.map(need => {
                        if (need.kind === needType.id) {
                          return (
                            <li className="list-group-item needoffer">
                              <div>
                                <b>{need.subject}</b>
                              </div>
                              <div>{need.comments}</div>
                            </li>
                          );
                        } else {
                          return "";
                        }
                      })}
                    </ul>
                    <button className="addbutton btn btn-secondary" onClick="">
                      Add
                    </button>
                  </div>
                );
              })}
            </span>
          </div>
          <div className="panel">
            <h3>Offers for Help</h3>
            <span className="group">
              {needTypes.offerTypes.map(offerType => {
                return (
                  <div>
                    <h3 className="group-label">{offerType.name}</h3>
                    <ul className="list-group"></ul>
                    <button className="addbutton btn btn-secondary">Add</button>
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Hospital);
