"use client"

/**
 * Thin client-only wrapper around react-github-calendar.
 *
 * Why a separate file?
 * Next.js dynamic() with ssr:false must resolve to a React component.
 * react-github-calendar may export as { default } or as the component
 * directly depending on bundler resolution. By importing it here with a
 * normal import and re-exporting a plain function component we guarantee
 * dynamic() in github-section.tsx always receives a valid element type.
 */
import { GitHubCalendar } from "react-github-calendar"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof GitHubCalendar>

export default function GitHubCalendarWrapper(props: Props) {
  return <GitHubCalendar {...props} />
}
