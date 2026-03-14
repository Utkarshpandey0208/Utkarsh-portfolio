"use client"

import { useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      // Prevent background scroll
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — click outside to close */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Resume Preview"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            // Stop click events from bubbling to backdrop
            onClick={(e) => e.stopPropagation()}
            className={[
              "fixed z-[101]",
              // Desktop: large centered panel
              "inset-4 sm:inset-8 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
              "md:w-[min(860px,90vw)] md:h-[min(92vh,920px)]",
              // Layout
              "flex flex-col",
              // Styling
              "bg-[#0f172a] border border-violet-500/20",
              "rounded-2xl shadow-2xl shadow-black/60",
              "overflow-hidden",
            ].join(" ")}
          >
            {/* ── Top bar ── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/40 flex-shrink-0 bg-[#0d1525]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-none">Resume</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Utkarsh Pandey</p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close resume preview"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/8 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── PDF iframe ── */}
            <div className="flex-1 bg-[#09111f] overflow-hidden min-h-0">
              <iframe
                src="/UtkarshPandey_Resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
                title="Utkarsh Pandey Resume"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* ── Bottom bar ── */}
            <div className="flex items-center justify-between px-5 py-3.5 border-t border-border/40 flex-shrink-0 bg-[#0d1525] gap-3 flex-wrap">
              <p className="text-xs text-muted-foreground">
                resume.pdf &nbsp;·&nbsp; Use the download button to save a copy
              </p>
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-violet-500/25 text-xs"
                asChild
              >
                <a href="/UtkarshPandey_Resume.pdf" download="Utkarsh_Pandey_Resume.pdf">
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
