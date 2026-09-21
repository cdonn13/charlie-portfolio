'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import dynamic from 'next/dynamic'

// pdf.js touches browser-only APIs, so load the viewer client-side only
const PdfViewer = dynamic(() => import('@/components/PdfViewer'), { ssr: false })

interface PdfModalProps {
  src: string
  label?: string
}

const PdfModal = ({ src, label = 'View full case deck' }: PdfModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  // Portal target is only available on the client
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    document.addEventListener('keydown', handleKeyDown)
    // Prevent background scroll while the modal is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const modal = (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col overflow-hidden">
      {/* Toolbar — always on top of the PDF, clearly closable */}
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 shrink-0 bg-gray-900 border-b border-white/10">
        <span className="text-white text-sm font-medium truncate min-w-0">{label}</span>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-sm font-medium px-3 py-1.5 rounded border border-white/20 hover:border-white/40 transition-colors whitespace-nowrap"
          >
            <span className="hidden sm:inline">Open in new tab</span>
            <span className="sm:hidden">Open</span>
          </a>
          <button
            onClick={close}
            className="flex items-center gap-1.5 text-white text-sm font-semibold px-3 py-1.5 rounded border border-white/25 hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Close
          </button>
        </div>
      </div>

      {/* Rendered with pdf.js so it works inline on iOS Safari (which can't embed PDFs in an iframe) */}
      <PdfViewer src={src} />
    </div>
  )

  return (
    <>
      {/* Sidebar trigger button */}
      <button
        onClick={open}
        aria-label={label}
        className="w-full flex items-center justify-center gap-2 border border-white/25 text-white px-4 py-3 rounded-lg text-sm font-semibold tracking-wide hover:bg-white hover:text-gray-900 transition-colors"
      >
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {label}
      </button>

      {/* Rendered to <body> so it escapes the sticky sidebar's stacking context */}
      {mounted && isOpen && createPortal(modal, document.body)}
    </>
  )
}

export default PdfModal
