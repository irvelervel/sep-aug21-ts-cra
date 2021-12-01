import { useState, useEffect } from 'react'
import Book from '../interfaces/book'
import BookDetail from './BookDetail'
// import axios from 'axios'

const BookList = () => {
  const [books, setBook] = useState<Book[]>([])

  const getBooks = async () => {
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/food-books')
      // console.log(response)
      if (response.ok) {
        // grab the body out of the response
        let data: Book[] = await response.json()
        console.log(data)
        // you want probably here to set your state...
        setBook(data)
      } else {
        console.log("couldn't contact the server :(")
      }
      //   let { data } = await axios.get<Book[]>('https://striveschool-api.herokuapp.com/food-books')
      //   setBook(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  console.log(books)

  return (
    <div>
      {books.map((book) => (
        <BookDetail key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookList
