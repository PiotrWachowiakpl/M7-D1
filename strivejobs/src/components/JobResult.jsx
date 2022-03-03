import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons"
import { addToFav, removeFromFav } from "../store/actions";
import {connect} from "react-redux"

const mapStateToProps = s =>s

const mapDispatchToProps = (dispatch)=>({

  addToFavourites: (company)=> dispatch(addToFav(company)),
  removeFromFavourites: (company)=> dispatch(removeFromFav(company))
})



function JobResult({ data, favourites, addToFavourites, removeFromFavourites })  {

  const isFav = favourites.includes(data.company_name)
  const toggleFav = ()=>{
    isFav
    ? removeFromFavourites(data.company_name)
    : addToFavourites(data.company_name)

  }
return(

  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>

      {
        isFav 
        ? <StarFill className="mr-3" onClick={toggleFav}/>
        : <Star className="mr-3" onClick={toggleFav}/>

      }
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
)};

export default connect(mapStateToProps, mapDispatchToProps)(JobResult);
