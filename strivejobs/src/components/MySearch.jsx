import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import uniqId from "uniqid";
import JobResult from "./JobResult";


export default class MySearch extends React.Component {
  state = {
    query: "",
    jobs: [],
  };

  enpoint = `https://strive-jobs-api.herokuapp.com/jobs?search=`;

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(this.enpoint + this.state.query + `&limit=10`);
    if (!response.ok) {
      console.log("error fetching");
    }
    const { data } = await response.json();
    this.setState({ jobs: data });
  };
  render() {
    return (
      <Container>
        <Col xs={10}>
          <h2>Jobs Search</h2>
          <Link to="/favourites" className="btn btn-primary">FAV</Link>
        </Col>
        <Row>
          <Col xs={10} className="m-2">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
              />
            </Form>
          </Col>
          <Col xs={10}>
            {this.state.jobs.map((jobData) => (
              <JobResult key={uniqId()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
