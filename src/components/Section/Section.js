import React from 'react'
import styles from './Section.module.scss'
import { Container, Row, Col, Spinner } from 'react-bootstrap'


export default function Section(props) {
  return (
    <Container
      fluid
      className={
        [styles.section, props.className].join(' ')
      }
    >
      <div>
        <h1>THIS IS A CUSTOM CONTAINER FOR NICHOLAS J</h1>
      </div>
      <Row>
        <Col>
          <div className="d-flex align-items-center mb-3">
            <h1>{props.title}</h1>
            { props.loading && <Spinner animation="border" variant="primary" style={{width:'2rem', height:'2rem',borderWidth:'2px',marginLeft:'2rem'}} />}
          </div>
          
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}
