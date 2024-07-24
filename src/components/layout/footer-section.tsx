import React from "react"

const FooterSection = () => {
  return (
    <div className="z-20 w-full bg-background/95 py-4 text-center shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <p>© {new Date().getFullYear()} Max Vinicius IT.</p>
    </div>
  )
}

export default FooterSection
