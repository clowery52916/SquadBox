import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';
import SemanticGrid from './SemanticGrid'

// images being used
// import detectImg from '../assets/images/detect-img.jpg';
// import registerImg from '../assets/images/register-img.jpg';
// import galleryImg from '../assets/images/gallery-img.jpg';

import { Grid, Row, Col } from 'react-flexbox-grid';

// material-ui components
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class LandingPage extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={12} style={{ 'textAlign': 'center' }}>
                        <h3>Squad Goals</h3>
                        <br />
                        <p><b>Real People. Real Life. Real Safe</b></p>
                        <br />

                    </Col>
                </Row>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col xs={12} md={3} style={{ 'textAlign': 'center' }}>

                        <Card>
                            <CardMedia
                            >
                            </CardMedia>
                            <CardTitle title="Recognize Face" />
                            <CardText>
                            </CardText>

                            <CardActions>
                                <Link to={'/recognize'}><FlatButton className='flat-btn' label="Login In" /></Link>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} style={{ 'textAlign': 'center' }}>
                        <Card>
                            <CardMedia
                            >
                            </CardMedia>
                            <CardTitle title="Register Face" />
                            <CardText>
                            </CardText>
                            <CardActions>
                                <Link to={'/register'}><FlatButton className='flat-btn' label="Sign Up" /></Link>
                            </CardActions>
                        </Card>
                        <SemanticGrid/>

                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default LandingPage;
