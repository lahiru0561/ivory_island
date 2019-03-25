import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      date: '',
      type: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit() {
    alert('submit');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12" style={{ padding: '0' }}>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                  {' '}
                  <img
                    src={require('../images/ivory_logo.jpg')}
                    alt="logo"
                    style={{ width: '40px', borderRadius: '20px' }}
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#link">Home</Nav.Link>
                    <Nav.Link href="#link">Services</Nav.Link>
                    <Nav.Link>
                      <Link to="/#section1">About Us</Link>
                    </Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                  <img
                    src={require('../images/ivory_logo.jpg')}
                    alt="logo"
                    style={{ width: '75px' }}
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Link
                      </a>
                    </li>
                  </ul>
                </div>
              </nav> */}
            </div>
          </div>
          <div className="row background-img-parallax img1">{/* img */}</div>
          <div
            id={'section1'}
            className="row detail-row  py-5 px-5"
            style={{ backgroundColor: '#cbe0da' }}
          >
            <div className="col-md-12 py-3 px-3">
              <div className="row py-2 px-2">
                <div className="col-md-12 text-center">
                  <h1 style={{ fontFamily: 'Srisakdi', fontSize: '5em' }}>
                    {' '}
                    Ivory Island, Kandy Sri Lanka
                  </h1>
                </div>
              </div>
              <div className="row py-5 px-5 ">
                <div className="col-md-12">
                  <span>
                    A place filled with tranquil, serene atmosphere. The best
                    medicine for your monotonous life. Satisfy all your taste
                    buds and feel like home with authentic food and other sapid,
                    redolent cuisine. Its simply a unique place to enjoy with
                    your loved ones. specially, for an outing or a Day trip.
                    Fascinating boat ride to the premises. If you are an
                    adventurous nature lover, this place is for you! Come, feel
                    the nature.. because now, The Nature has an Address
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row background-img-parallax img3">img</div> */}
          <div
            className="row py-5 px-5"
            style={{ backgroundColor: '#222222', color: '#fff' }}
          >
            <div className="offset-md-2 col-md-8 ">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>
                      <input
                        type="text"
                        placeholder="Date"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </label>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>
                      <input
                        type="text"
                        placeholder="Type"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </label>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </label>
                  </div>
                  <div className="col-md-6 form-group">
                    {' '}
                    <label>
                      <input
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                        className="form-control"
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <Button type="submit" value="Submit" variant="secondary">
                      Submit
                    </Button>
                  </div>
                </div>
                {/* <div className="row">
                <div className="col-md-12 text-center">View more...</div>
              </div> */}
              </form>
            </div>
          </div>
          <div className="row background-img-parallax img2">{/* img */}</div>
          <div className="row detail-row texture-2">
            <div className="col-md-12  px-5 py-5">
              <div className="row my-5">
                <div className="col-md-12 text-center">
                  <h1 style={{ fontFamily: 'Srisakdi', fontSize: '3em' }}>
                    {' '}
                    Our Services
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="offset-md-2 col-md-8">
                  <div className="row text-center">
                    <div className="col-md-4 ">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src={require('../images/service_1.jpg')}
                            alt="service 1"
                            className="services-img"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12  py-5">
                          <span>
                            The href attribute requires a valid value to be
                            accessible. Provide a valid, navigable address as
                            the href value. If you cannot provide a valid href,
                            but still need the element to resemble a link, use a
                            button and change it with appropriate styles.
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          {' '}
                          <span className="glyphicon glyphicon-arrow-right" />{' '}
                          &nbsp;
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="row">
                        <div className="col-md-12">
                          {' '}
                          <img
                            src={require('../images/service_2.jpg')}
                            alt="service 2"
                            className="services-img"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12  py-5">
                          <span>
                            The href attribute requires a valid value to be
                            accessible. Provide a valid, navigable address as
                            the href value. If you cannot provide a valid href,
                            but still need the element to resemble a link, use a
                            button and change it with appropriate styles.
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">&nbsp;</div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src={require('../images/service_3.jpg')}
                            alt="service 3"
                            className="services-img"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12  py-5">
                          <span>
                            The href attribute requires a valid value to be
                            accessible. Provide a valid, navigable address as
                            the href value. If you cannot provide a valid href,
                            but still need the element to resemble a link, use a
                            button and change it with appropriate styles.
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">&nbsp;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row final-img-paralax">
            <div className="col-md-12 py-5 px-5 final-detail-col items-center ">
              Beauty has an address...
            </div>
          </div>

          <div className="row footer-row">
            <div className="col-md-12 py-5 px-5 footer-col items-center ">
              <footer className="bg-dark text-white mt-5 p-4 text-center">
                Copyright &copy; {new Date().getFullYear()} Ivory Island
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
