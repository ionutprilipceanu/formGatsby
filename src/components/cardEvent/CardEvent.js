import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import imagesGalleryItems from "./generalItems"
import "./CardEvent.css"

const CardEvent = () => {
  const items = imagesGalleryItems
  return (
    <div className="containerPortfolio">
      {items.map(item => {
        return (
          <div key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.src} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Link activeClassName="is-active" to={`/${item.link}`}>
                  <div className="d-grid">
                    <Button variant="dark">Deschide</Button>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default CardEvent
