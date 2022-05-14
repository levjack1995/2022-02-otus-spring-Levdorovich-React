import React, {useEffect, useState} from 'react'
import * as api from '../api/book'
import '../style.css'
import Book from "../components/book/book";

export default function () {
    let [books, setBooks] = useState([]);
    let onBookRemove = api.remove;

    useEffect(() => {
        console.log('effect in Books')
        api.getAll().then(b => {
            console.log(b)
            setBooks(b)
        })
        console.log(books,'books after use Effect')
    }, []);

    return <table className="authors-table">
        <caption className="authors-table--caption">Authors</caption>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {books.map((book) =>
            <Book id={book.id}
                  name={book.name}
                  authorName={book.authorName}
                  genreName={book.genreName}
                  onRemove={() => onBookRemove(book.id)}
                  key={book.id}/>)
        }
        </tbody>
    </table>

};