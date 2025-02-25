interface Disease {
  slug: string
  title: string
  content: string
  description: string
  symptoms: string[]
  treatments: string[]
  benefits: string[]
}

const diseases: Disease[] = [
  {
    slug: "sexual-health",
    title: "Sexual Health Treatment",
    description: "Natural and effective solutions for sexual health and wellness",
    content: "Our holistic approach to sexual health combines traditional homeopathic remedies with modern wellness practices. We understand the sensitivity of these concerns and provide confidential, personalized treatment plans.",
    symptoms: [
      "Low libido",
      "Erectile dysfunction",
      "Hormonal imbalances",
      "Reproductive health issues",
      "Sexual wellness concerns"
    ],
    treatments: [
      "Customized homeopathic medications",
      "Lifestyle modifications",
      "Dietary recommendations",
      "Stress management techniques",
      "Natural supplements"
    ],
    benefits: [
      "Natural and safe treatment approach",
      "No side effects",
      "Long-lasting results",
      "Improved overall well-being",
      "Confidential care"
    ]
  },
  {
    slug: "skin-disorders",
    title: "Skin & Allergy Care",
    description: "Holistic treatment for skin conditions and allergies",
    content: "Our comprehensive skin care treatment addresses both acute and chronic skin conditions using natural homeopathic remedies. We focus on treating the root cause rather than just the symptoms.",
    symptoms: [
      "Eczema and psoriasis",
      "Acne and pimples",
      "Allergic reactions",
      "Skin rashes",
      "Pigmentation issues"
    ],
    treatments: [
      "Constitutional homeopathy",
      "Topical applications",
      "Dietary guidance",
      "Lifestyle changes",
      "Preventive care"
    ],
    benefits: [
      "Natural healing process",
      "Long-term relief",
      "Improved skin health",
      "Reduced allergic reactions",
      "Enhanced immunity"
    ]
  },
  {
    slug: "digestion-care",
    title: "Digestion Care",
    description: "Natural remedies for digestion and gut health",
    content: "Our digestive health program combines traditional homeopathic medicines with modern nutritional science to restore and maintain optimal gut health.",
    symptoms: [
      "Acid reflux",
      "Irritable bowel syndrome",
      "Chronic constipation",
      "Bloating and gas",
      "Food intolerances"
    ],
    treatments: [
      "Homeopathic medicines",
      "Dietary planning",
      "Gut health restoration",
      "Enzyme support",
      "Probiotic therapy"
    ],
    benefits: [
      "Improved digestion",
      "Better nutrient absorption",
      "Reduced discomfort",
      "Enhanced gut flora",
      "Sustainable results"
    ]
  },
  {
    slug: "hair-fall",
    title: "Hair Fall Treatment",
    description: "Natural solutions for hair loss and scalp health",
    content: "Our holistic approach to hair care addresses both internal and external factors affecting hair health, promoting natural hair growth and scalp wellness.",
    symptoms: [
      "Pattern baldness",
      "Excessive hair fall",
      "Scalp problems",
      "Premature greying",
      "Thin and brittle hair"
    ],
    treatments: [
      "Constitutional homeopathy",
      "Scalp treatments",
      "Nutritional guidance",
      "Hair growth stimulation",
      "Stress management"
    ],
    benefits: [
      "Natural hair regrowth",
      "Improved scalp health",
      "Stronger hair strands",
      "Reduced hair fall",
      "Long-lasting results"
    ]
  },
  {
    slug: "other-health-issues",
    title: "Other Health Issues",
    description: "Comprehensive care for various health conditions",
    content: "We provide personalized homeopathic treatment for a wide range of health conditions, focusing on holistic healing and overall wellness.",
    symptoms: [
      "Chronic pain",
      "Sleep disorders",
      "Stress and anxiety",
      "Respiratory issues",
      "Joint problems"
    ],
    treatments: [
      "Individualized treatment plans",
      "Holistic healing approach",
      "Lifestyle counseling",
      "Preventive care",
      "Regular health monitoring"
    ],
    benefits: [
      "Comprehensive care",
      "Natural healing",
      "Improved quality of life",
      "Preventive health benefits",
      "Sustainable wellness"
    ]
  }
]

export async function getDiseaseBySlug(slug: string): Promise<Disease | undefined> {
  return diseases.find((disease) => disease.slug === slug)
}

export async function getAllDiseases(): Promise<Disease[]> {
  return diseases
} 