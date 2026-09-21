'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ProjectImage } from '@/types/project'

interface ImageGalleryProps {
  images: ProjectImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openModal = (index: number) => setSelectedIndex(index)
  const closeModal = () => setSelectedIndex(null)

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrevious()
  }

  if (!images || images.length === 0) return null

  return (
    <>
      <div className={`grid gap-4 ${
        images.length === 1 ? 'grid-cols-1' :
        images.length === 2 ? 'grid-cols-2' :
        images.length === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
        images.length === 4 ? 'grid-cols-1 md:grid-cols-2' :
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {images.map((image, index) => (
          <figure key={index} className="space-y-2">
            <div
              className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            {image.caption && (
              <figcaption className="text-sm text-gray-400 text-center italic truncate">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
            className="absolute top-4 right-4 z-20 w-12 h-12 flex items-center justify-center text-white text-4xl leading-none hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            ×
          </button>

          {/* Previous button */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 z-20 w-12 h-12 flex items-center justify-center text-white text-4xl leading-none hover:text-gray-300 transition-colors"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Next button */}
          {selectedIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 z-20 w-12 h-12 flex items-center justify-center text-white text-4xl leading-none hover:text-gray-300 transition-colors"
              aria-label="Next image"
            >
              ›
            </button>
          )}

          {/* Caption */}
          {images[selectedIndex].caption && (
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm bg-black bg-opacity-50 inline-block px-4 py-2 rounded">
                {images[selectedIndex].caption}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ImageGallery
