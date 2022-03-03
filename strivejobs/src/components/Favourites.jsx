import React from "react";

import { connect } from "react-redux";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { removeFromFav } from "../store/actions";


const mapDispatchToProps = (dispatch) => ({
    removeFromFav: (fav)=> {dispatch(removeFromFav(fav))}
});

class Favourites extends React.Component {
  render() {

    return(
        <Container>
            <Row>
                <Col xs={12}>
                    <ListGroup>
                        {

                    this.props.favourites.map(fav=>(
                        <ListGroupItem>

                            <StarFill onClick={()=> this.props.removeFromFav(fav)}/>
                            <span>
                                { fav}
                            </span>
                        </ListGroupItem>
                    ))
                        }

                    </ListGroup>
                
                </Col>
            </Row>
        </Container>
    )
  }
}

export default connect((s) => s, mapDispatchToProps)(Favourites);
