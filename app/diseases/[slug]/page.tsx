import { notFound } from "next/navigation"
import { DiseaseConsultationForm } from "@/components/disease-consultation-form"

// This would typically come from a database or API
const diseasesData = {
  "chronic-diseases": {
    title: "Chronic Diseases",
    description: "Effective treatment for long-term health conditions",
    longDescription: "Chronic diseases are long-term medical conditions that typically progress slowly over time. Our homeopathic approach focuses on treating the root cause while providing symptomatic relief...",
    symptoms: [
      "Persistent fatigue",
      "Recurring pain",
      "Sleep disturbances",
      "Digestive issues"
    ],
    treatments: [
      "Individualized homeopathic remedies",
      "Lifestyle modifications",
      "Dietary recommendations",
      "Holistic healing approaches"
    ]
  },
  "skin-disorders": {
    title: "Skin Disorders",
    description: "Natural solutions for various skin conditions",
    longDescription: "Skin disorders can be both physically uncomfortable and emotionally distressing. Our natural treatments address both the external symptoms and internal causes...",
    symptoms: [
      "Rashes",
      "Itching",
      "Inflammation",
      "Dryness"
    ],
    treatments: [
      "Constitutional homeopathic treatment",
      "Topical applications",
      "Dietary guidelines",
      "Lifestyle changes"
    ]
  },
  "digestive-issues": {
    title: "Digestive Issues",
    description: "Holistic treatment for digestive system problems",
    longDescription: "Digestive issues can significantly impact quality of life. Our holistic approach helps restore balance to your digestive system...",
    symptoms: [
      "Bloating",
      "Acid reflux",
      "Irregular bowel movements",
      "Abdominal pain"
    ],
    treatments: [
      "Homeopathic medicines",
      "Dietary advice",
      "Stress management",
      "Digestive support"
    ]
  }
}

export default async function DiseasePage({ params }: { params: { slug: string } }) {
  const disease = diseasesData[params.slug as keyof typeof diseasesData]

  if (!disease) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-6">{disease.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{disease.longDescription}</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Common Symptoms</h2>
            <ul className="list-disc list-inside space-y-2">
              {disease.symptoms.map((symptom, index) => (
                <li key={index} className="text-muted-foreground">{symptom}</li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Our Treatment Approach</h2>
            <ul className="list-disc list-inside space-y-2">
              {disease.treatments.map((treatment, index) => (
                <li key={index} className="text-muted-foreground">{treatment}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-2">Get Treatment for {disease.title}</h2>
          <p className="text-center text-muted-foreground mb-8">
            Fill out the form below and our specialists will contact you shortly.
          </p>
          <DiseaseConsultationForm diseaseName={disease.title} />
        </div>
      </div>
    </div>
  )
} 