import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';
import SemanticGrid from './SemanticGrid'
import styled from 'styled-components'

import { Grid, Row, Col } from 'react-flexbox-grid';

// material-ui components
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const NavBar = styled.div`
background-color:rgb(161, 214, 188);
`

class LandingPage extends Component {

    render() {
        return (
            <Grid fluid>

                <Row>
                    <Col xs={12} md={12} style={{ 'textAlign': 'center' }}>
                      <Col xs={12} md={3} style={{ 'textAlign': 'center' }}>
                          <Card>
                              <CardTitle title="Register Face" />
                              <CardText>
                              </CardText>
                              <CardActions>
                                  <Link to={'/register'}><FlatButton className='flat-btn' label="REGISTER" /></Link>
                              </CardActions>
                          </Card>

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
                                  <Link to={'/recognize'}><FlatButton className='flat-btn' label="RECOGNIZE" /></Link>
                              </CardActions>
                          </Card>
                      </Col>
  <SemanticGrid/>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}>
                    </Col>


                </Row>
            </Grid>
        );
    }
}

export default LandingPage;
