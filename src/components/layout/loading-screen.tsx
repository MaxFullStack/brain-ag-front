import React from "react"

import { Icons } from "@/components/icons"

const LoadingScreen = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary backdrop-blur-sm">
        <div className="relative flex justify-center align-middle">
          <div className="absolute inline-flex animate-spin">
            <Icons.loader className="h-auto w-10 self-center text-white" />
          </div>

          <div className="mt-14 text-xl text-white">Carregando...</div>
        </div>
      </div>
    </>
  )
}

export default LoadingScreen
