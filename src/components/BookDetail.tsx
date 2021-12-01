import Book from '../interfaces/book'

interface BookDetailProps {
  book: Book
}

const BookDetail = ({ book }: BookDetailProps) => (
  <div>
    <h1>{book.title}</h1>
    <p>{book.description}</p>
    <img src={book.imageUrl} alt='book-cover' />
    <p>{book.price}</p>
  </div>
)

export default BookDetail
