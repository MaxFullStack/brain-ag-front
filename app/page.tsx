import React from "react"
import {
  businessRequirements,
  businessRequirementsTitle,
  pageTitle,
  producerFields,
  technicalRequirements,
  technicalRequirementsTitle,
  testObjective,
} from "@/constants/test-info"

import FooterSection from "@/components/layout/footer-section"
import { SiteHeader } from "@/components/layout/site-header"

const IndexPage = () => {
  return (
    <>
      <SiteHeader />
      <main id="solutions" className="px-8 py-8 md:px-12 md:py-10">
        <h1 className="mb-8 text-center text-3xl font-bold">{pageTitle}</h1>
        <p className="mb-2">{testObjective}</p>
        <ul className="mb-8 list-inside list-disc">
          {producerFields.map((field: string, index: number) => (
            <li key={index}>{field}</li>
          ))}
        </ul>
        <h2 className="mb-2 text-2xl font-bold">{businessRequirementsTitle}</h2>
        <ul className="mb-8 list-inside list-disc">
          {businessRequirements.map((requirement: string, index: number) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
        <h2 className="mb-4 text-2xl font-bold">
          {technicalRequirementsTitle}
        </h2>
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-bold">Front-end:</h3>
          <ul className="mb-8 list-inside list-disc">
            {technicalRequirements.frontEnd.map(
              (req: string, index: number) => (
                <li key={index}>{req}</li>
              )
            )}
          </ul>
          <h3 className="mb-2 text-xl font-bold">Back-end:</h3>
          <ul className="mb-8 list-inside list-disc">
            {technicalRequirements.backEnd.map((req: string, index: number) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
          <h3 className="mb-2 text-xl font-bold">Desejável:</h3>
          <ul className="mb-8 list-inside list-disc">
            {technicalRequirements.desirable.map(
              (req: string, index: number) => (
                <li key={index}>{req}</li>
              )
            )}
          </ul>
          <h3 className="mb-2 text-xl font-bold">Bônus:</h3>
          <ul className="mb-8 list-inside list-disc">
            {technicalRequirements.bonus.map((req: string, index: number) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <p className="mb-4">{technicalRequirements.fullStack}</p>
      </main>
      <FooterSection />
    </>
  )
}

export default IndexPage
