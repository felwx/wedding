"use client"

import { useState, type React } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, XCircle } from "lucide-react"
import Select from "react-select"

const guestNames = [
  { value: "Adrián Gemelo Poleñino", label: "Adrián Gemelo Poleñino" },
  { value: "Aida Ruíz Tortajada", label: "Aida Ruíz Tortajada" },
  { value: "Ainhoa Bachata", label: "Ainhoa" },
  { value: "Alba Poleñino", label: "Alba" },
  { value: "Alba Viana", label: "Alba Viana" },
  { value: "Alberto Nieto Navarro", label: "Alberto Nieto Navarro" },
  { value: "Amelia Pérez Sánchez", label: "Amelia Pérez Sánchez" },
  { value: "Amor Collado Morata", label: "Amor Collado Morata" },
  { value: "Amparo", label: "Amparo" },
  { value: "Ana", label: "Ana" },
  { value: "Anabel", label: "Anabel" },
  { value: "Angel Collado Morata", label: "Angel Collado Morata" },
  { value: "Angel Luis", label: "Angel Luis" },
  { value: "Ángeles", label: "Ángeles" },
  { value: "Antonio Pérez Sánchez", label: "Antonio Pérez Sánchez" },
  { value: "Antonia Ruiz", label: "Antonia Ruiz" },
  { value: "Arantxa", label: "Arantxa" },
  { value: "Belén Poleñino", label: "Belén Poleñino" },
  { value: "Carlos", label: "Carlos" },
  { value: "Carlos", label: "Carlos" },
  { value: "Carles", label: "Carles" },
  { value: "Carmen Poleñino", label: "Carmen Poleñino" },
  { value: "César", label: "César" },
  { value: "Clemen", label: "Clemen" },
  { value: "Cristina", label: "Cristina" },
  { value: "Cristina Poleñino", label: "Cristina Poleñino" },
  { value: "Dani Poleñino", label: "Dani Poleñino" },
  { value: "David Villellas Poleñino", label: "David Villellas Poleñino" },
  { value: "Diego Gemelo Poleñino", label: "Diego Gemelo Poleñino" },
  { value: "Durango Poleñino", label: "Durango Poleñino" },
  { value: "Elliot", label: "Elliot" },
  { value: "Emilio Ruiz", label: "Emilio Ruiz" },
  { value: "Estela Poleñino", label: "Estela Poleñino" },
  { value: "Esther", label: "Esther" },
  { value: "Feliciano", label: "Feliciano" },
  { value: "Félix", label: "Félix" },
  { value: "Fran Poleñino", label: "Fran Poleñino" },
  { value: "Fran", label: "Fran" },
  { value: "Freya", label: "Freya" },
  { value: "Gavalda", label: "Gavalda" },
  { value: "Gema", label: "Gema" },
  { value: "Gina", label: "Gina" },
  { value: "Goyo Poleñino", label: "Goyo Poleñino" },
  { value: "Iara Poleñino", label: "Iara Poleñino" },
  { value: "Irena", label: "Irena" },
  { value: "Irene", label: "Irene" },
  { value: "Isidoro", label: "Isidoro" },
  { value: "Javi", label: "Javi" },
  { value: "Jordi", label: "Jordi" },
  { value: "Jose", label: "Jose" },
  { value: "Jose Angel", label: "Jose Angel" },
  { value: "Juan Carlos", label: "Juan Carlos" },
  { value: "Juan Carlos", label: "Juan Carlos" },
  { value: "Juanma", label: "Juanma" },
  { value: "Judith", label: "Judith" },
  { value: "Judith Poleñino", label: "Judith Poleñino" },
  { value: "Juli", label: "Juli" },
  { value: "Laia", label: "Laia" },
  { value: "Leo", label: "Leo" },
  { value: "Lidia", label: "Lidia" },
  { value: "Lidia Poleñino", label: "Lidia Poleñino" },
  { value: "Loli", label: "Loli" },
  { value: "Lorena Poleñino", label: "Lorena Poleñino" },
  { value: "Lucas Poleñino", label: "Lucas Poleñino" },
  { value: "Luis", label: "Luis" },
  { value: "Marc", label: "Marc" },
  { value: "Marcela", label: "Marcela" },
  { value: "Marcos Poleñino", label: "Marcos Poleñino" },
  { value: "María", label: "María" },
  { value: "MariCarmen Poleñino", label: "MariCarmen Poleñino" },
  { value: "Mariano Poleñino", label: "Mariano Poleñino" },
  { value: "Marga", label: "Marga" },
  { value: "Marta", label: "Marta" },
  { value: "Marta", label: "Marta" },
  { value: "Marta", label: "Marta" },
  { value: "Maribel", label: "Maribel" },
  { value: "Mª Luisa", label: "Mª Luisa" },
  { value: "Miguel", label: "Miguel" },
  { value: "Miquel", label: "Miquel" },
  { value: "Miriam", label: "Miriam" },
  { value: "Miriam", label: "Miriam" },
  { value: "Mónica", label: "Mónica" },
  { value: "Monchi", label: "Monchi" },
  { value: "Multi", label: "Multi" },
  { value: "Nacho", label: "Nacho" },
  { value: "Natalia", label: "Natalia" },
  { value: "Néstor", label: "Néstor" },
  { value: "Nelson", label: "Nelson" },
  { value: "Oscar", label: "Oscar" },
  { value: "Paco", label: "Paco" },
  { value: "Pau", label: "Pau" },
  { value: "Patri", label: "Patri" },
  { value: "Pedro Poleñino", label: "Pedro Poleñino" },
  { value: "Pere", label: "Pere" },
  { value: "Pilar", label: "Pilar" },
  { value: "Piquero", label: "Piquero" },
  { value: "Paula", label: "Paula" },
  { value: "Paula Dani", label: "Paula Dani" },
  { value: "Raquel", label: "Raquel" },
  { value: "Raquel", label: "Raquel" },
  { value: "Rocho", label: "Rocho" },
  { value: "Rosabel", label: "Rosabel" },
  { value: "Rosa", label: "Rosa" },
  { value: "Sandra", label: "Sandra" },
  { value: "Sandra", label: "Sandra" },
  { value: "Santi", label: "Santi" },
  { value: "Sara", label: "Sara" },
  { value: "Sara Oto", label: "Sara Oto" },
  { value: "Sergio", label: "Sergio" },
  { value: "Sergio", label: "Sergio" },
  { value: "Sergio", label: "Sergio" },
  { value: "Siscu", label: "Siscu" },
  { value: "Tía Gregoria", label: "Tía Gregoria" },
  { value: "Tío Pedro", label: "Tío Pedro" },
  { value: "Toni", label: "Toni" },
  { value: "Turco", label: "Turco" },
  { value: "Turri", label: "Turri" },
]

interface FormData {
  name: string
  email: string
  attending: string
  guests: string
  dietaryRestrictions: string
  useBusService: string
}

export default function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedName, setSelectedName] = useState<{ value: string; label: string } | null>(null)
  const [formData, setFormData] = useState<FormData | null>(null)
  const [showForm, setShowForm] = useState(true)
  const [isSending, setIsSending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)
    setError(null)
    const GOOGLE_SHEET_URL =
      "https://script.google.com/macros/s/AKfycbzQBV8cKIyeocKuwfZiIeWFyZM10Uqzc1_dyJL2TwDmDxLuD02gWOrKeju6WjiXalJs/exec"

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      attending: formData.get("attending") as string,
      guests: formData.get("guests") as string,
      dietaryRestrictions: formData.get("dietaryRestrictions") as string,
      useBusService: formData.get("useBusService") as string,
    }

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      console.log("Datos enviados correctamente")
      setIsSubmitted(true)
      setFormData(data)
      setSelectedName(null)
      setShowForm(false)
      formElement.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
    }
    setIsSending(false)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData(null)
    setSelectedName(null)
    setShowForm(true)
  }

  return (
    <div className="content-wrapper">
      <h1 className="elegant-heading text-3xl sm:text-4xl mb-6 md:mb-8 text-center">Confirma tu asistencia</h1>
      {isSubmitted && formData && !showForm ? (
        <div className="bg-primary/10 border border-primary rounded-lg p-6 mb-8 space-y-4 min-h-[600px] flex flex-col justify-between">
          <div>
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-primary mb-4 text-center">¡Gracias por confirmar tu asistencia!</h2>
            <div className="text-left max-w-md mx-auto">
              <p>
                <strong>Nombre:</strong> {formData.name}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Asistencia:</strong> {formData.attending === "yes" ? "Sí" : "No"}
              </p>
              <p>
                <strong>Número de invitados:</strong> {formData.guests}
              </p>
              {formData.dietaryRestrictions && (
                <p>
                  <strong>Restricciones alimentarias:</strong> {formData.dietaryRestrictions}
                </p>
              )}
              <p>
                <strong>Uso del servicio de autobús:</strong> {formData.useBusService === "yes" ? "Sí" : "No"}
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Si necesitas hacer cambios, por favor contáctanos directamente.
            </p>
            <Button onClick={resetForm} className="w-full max-w-xs">
              Enviar otra respuesta
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-md mx-auto bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-md min-h-[600px]"
        >
          {error && (
            <Alert className="bg-destructive/10 border-destructive text-destructive mb-4">
              <XCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div>
            <Label htmlFor="name" className="text-base sm:text-lg">
              Nombre
            </Label>
            <Input id="name" name="name" type="text" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email" className="text-base sm:text-lg">
              Email
            </Label>
            <Input id="email" name="email" type="email" required className="mt-1" />
          </div>
          <div>
            <Label className="text-base sm:text-lg">¿Asistirás?</Label>
            <RadioGroup name="attending" className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="attending-yes" />
                <Label htmlFor="attending-yes">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="attending-no" />
                <Label htmlFor="attending-no">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="guests" className="text-base sm:text-lg">
              Número de invitados (incluyéndote)
            </Label>
            <Input id="guests" name="guests" type="number" min="1" max="5" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="dietaryRestrictions" className="text-base sm:text-lg">
              Restricciones alimentarias
            </Label>
            <Textarea id="dietaryRestrictions" name="dietaryRestrictions" className="mt-1" />
          </div>
          <div>
            <Label className="text-base sm:text-lg">¿Utilizarás el servicio de autobús?</Label>
            <RadioGroup name="useBusService" className="flex space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="bus-yes" />
                <Label htmlFor="bus-yes">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="bus-no" />
                <Label htmlFor="bus-no">No</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className={`w-full ${
            isSending ? "opacity-50 cursor-not-allowed" : ""}`} 
            disabled={isSending}>
            {isSending ? (
              <img
                src="https://media.tenor.com/On7kvXhzml4AAAAi/loading.gif"
                alt="Cargando..."
                className="w-6 h-6"
              />
            ) : (
              "Enviar"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}

