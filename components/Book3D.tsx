'use client'

import React from 'react'
import Image from 'next/image'

interface Book {
  title: string
  cover: string
}

interface BookItemProps {
  title: string
  cover: string
}

interface BooksGridProps {
  books: Book[]
}

function BookItem({ title, cover }: BookItemProps) {
  return (
    <div className="book-container">
      <div className="book">
        <div className="book-cover book-front">
          <Image src={cover} alt={title} fill className="object-cover" />
        </div>
        <div className="book-spine">
          <span className="book-spine-text">{title}</span>
        </div>
        <div className="book-back"></div>
        <div className="book-top"></div>
        <div className="book-bottom"></div>
        <div className="book-pages"></div>
      </div>
      <h3 className="book-title">{title}</h3>
    </div>
  )
}

export default function BooksGrid({ books }: BooksGridProps) {
  return (
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl font-bold text-gray-200 mb-8 text-left">
          Currently Reading
        </h2>
        <div className="books-grid">
          {books.map((book, index) => (
            <BookItem key={index} title={book.title} cover={book.cover} />
          ))}
        </div>
      </div>
    </div>
  )
}
