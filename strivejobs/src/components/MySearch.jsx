import React from "react";
import {Container, Row, Col, Form, FormControl} from "react-bootstrap"


export default class MySearch extends React.Component {
state = {
    query: ""
}


enpoint = `https://strive-jobs-api.herokuapp.com/jobs?search=`
handleChange = (e) =>{
    this.setState({query: e.target.value})
}
render(){
    return(
        <Container>
            <Row>
                <Col>
                <Form>
                    <Form.Control type="search" value={this.state.query} onChange={this.handleChange}/>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

}