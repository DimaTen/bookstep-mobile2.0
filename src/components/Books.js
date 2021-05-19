import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Button from './Button';

export default function Books() {
  const url = 'books.json';
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.book);
      setBooks(response.data.book);
    });
  }, [url]);

  if (books) {
    return (
      <div className="book-wrapper">
        <div className="bookContent-wrapper">
          <header>
            <h4>Senast tillagda</h4>
          </header>
          <div class="bookList-wrapper">
            <div class="cards-left">
              <Card>
                <Card.Img variant="top" src="bookCoverCake.svg" />
                <Card.Body>
                  <Card.Title>Boktitel</Card.Title>
                  <Button>Klicka</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="bookCoverCake.svg" />
                <Card.Body>
                  <Card.Title>Boktitel</Card.Title>
                  <Button>Klicka</Button>
                </Card.Body>
              </Card>
            </div>
            <div class="cards-right">
              <Card>
                <Card.Img variant="top" src="bookCoverMoby-Dick.svg" />
                <Card.Body>
                  <Card.Title>Boktitel</Card.Title>
                  <Button>Klicka</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="bookCoverMoby-Dick.svg" />
                <Card.Body>
                  <Card.Title>Boktitel</Card.Title>
                  <Button>Klicka</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          {/* {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))} */}
          <Button>Se alla 30 000 böcker</Button>
        </div>
      </div>
    );
  }
  return <div></div>;
}
