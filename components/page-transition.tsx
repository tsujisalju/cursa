"use client";

/**
 * PageTransition component
 *
 * This component wraps page content and enables smooth transitions using the View Transitions API.
 * The actual transition is triggered by the TransitionLink component when navigation occurs.
 *
 * The View Transitions API:
 * - Captures a snapshot of the current page state
 * - Updates the DOM
 * - Animates between old and new states
 *
 * CSS animations for the transition are defined in globals.css under ::view-transition-old/new
 * The view-transition-name is set via the .page-content-wrapper class
 *
 * Browser support: Chrome 111+, Edge 111+, Opera 97+ (Falls back gracefully in unsupported browsers)
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex grow rounded-lg overflow-x-hidden page-content-wrapper">
      {children}
    </div>
  );
}
