export const translateCropName = (crop: string) => {
  const translations: { [key: string]: string } = {
    cotton: "algodão",
    corn: "milho",
    sugarcane: "cana-de-açúcar",
    wheat: "trigo",
    soy: "soja",
    coffee: "café",
    // Adicione outras traduções conforme necessário
  }
  return translations[crop] || crop
}
