'use client'

import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

// Serve the worker from /public so the version always matches pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

interface PdfViewerProps {
  src: string
}

// Cap page width so pages don't get gigantic on desktop
const MAX_PAGE_WIDTH = 900

const PdfViewer = ({ src }: PdfViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [numPages, setNumPages] = useState(0)
  const [width, setWidth] = useState(0)

  // Track the container width so each page renders fit-to-width (responsive)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const update = () => {
      // Leave a little horizontal padding on each side
      const available = el.clientWidth - 24
      setWidth(Math.min(available, MAX_PAGE_WIDTH))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex-1 w-full overflow-y-auto overflow-x-hidden bg-gray-100 flex justify-center"
    >
      <Document
        file={src}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="text-gray-500 text-sm py-16">Loading deck…</div>
        }
        error={
          <div className="text-gray-500 text-sm py-16 px-6 text-center">
            Couldn&apos;t load the PDF here.{' '}
            <a href={src} target="_blank" rel="noopener noreferrer" className="underline">
              Open it in a new tab
            </a>
            .
          </div>
        }
        className="flex flex-col items-center gap-4 py-4"
      >
        {width > 0 &&
          Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={width}
              className="shadow-lg"
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={
                <div
                  className="bg-white shadow-lg"
                  style={{ width, height: width * 1.29 }}
                />
              }
            />
          ))}
      </Document>
    </div>
  )
}

export default PdfViewer
