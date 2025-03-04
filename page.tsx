"use client"

import { useState, type React } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"

interface FormData {
  name: string
  phone: string
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
  const [step, setStep] = useState(1);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAttending, setFormAttending] = useState("");
  const [formRestrictions, setFormRestrictions] = useState("");
  const [formBus, setFormBus] = useState("");
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)
    setError(null)
    const GOOGLE_SHEET_URL =
      "https://script.google.com/macros/s/AKfycbzQBV8cKIyeocKuwfZiIeWFyZM10Uqzc1_dyJL2TwDmDxLuD02gWOrKeju6WjiXalJs/exec"

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const data = {
      name: formName as string,
      email: formPhone as string,
      attending: formAttending as string,
      guests: "1",
      dietaryRestrictions: formRestrictions as string,
      useBusService: formBus as string,
    }

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      console.log("Datos enviados correctamente",data)
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
    setStep(1)
    setFormName("")
    setFormPhone("")
    setFormAttending("")
    setFormBus("")
    setFormRestrictions("")
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
                <strong>Teléfono:</strong> {formData.phone}
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
          {step === 1 && (<div>
            <div className="flex flex-col items-center">
              <Image
                  src="/historia1.jpg"
                  alt="Sandra y Félix"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
            </div>
            <div>
              <Label htmlFor="name" className="text-base sm:text-lg">
                Primero dinos como te llamas
              </Label>
              <Input id="name" name="name" type="text" required className="mt-1" value={formName} onChange={(e) => setFormName(e.target.value)}/>
            </div>
            <div>
              <Label htmlFor="phone" className="text-base sm:text-lg">
                Teléfono
              </Label>
              <Input id="phone" name="phone" type="phone" required className="mt-1"  value={formPhone} onChange={(e) => setFormPhone(e.target.value)}/>
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={nextStep} className={`w-full`}>Siguiente</Button>
            </div>
          </div>)}
          {step === 2 && (<div>
            <div>
              <Label className="text-base sm:text-lg">Asistencia, ¿confirmas que vendrás a la boda?</Label>
              <RadioGroup name="attending" className="flex space-x-4 mt-2" value={formAttending}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="attending-yes" onClick={(e) => {setFormAttending("yes")}}/>
                  <Label htmlFor="attending-yes">Sí, por supuesto.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="attending-no" onClick={(e) => setFormAttending("no")}/>
                  <Label htmlFor="attending-no">Me encantaría pero no puedo</Label>
                </div>
              </RadioGroup>
              <div className="flex gap-4 mt-4">
                <Button onClick={prevStep} className={`w-full`}>Atrás</Button>
                <Button onClick={nextStep} className={`w-full`}>Siguiente</Button>
              </div>
            </div>
          </div>)}
          {step === 3 && (<div>
            <div>
              <Label className="text-base sm:text-lg">Transporte, ¿cómo has pensado llegar? Te recordamos: Iglesia Tibidabo, banquete Celler de Can Torrens en Sant Fost de Campsentelles. Importante: pondremos a disposición un único horario de regreso al final de la fiesta de madrugada sobre 4:30h am</Label>
              <RadioGroup name="useBusService" className="flex space-x-4 mt-2" value={formBus}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="bus-yes" onClick={(e) => {setFormBus("yes")}}/>
                  <Label htmlFor="bus-yes">Voy por mi cuenta</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="bus-no" onClick={(e) => {setFormBus("no")}}/>
                  <Label htmlFor="bus-no">Quiero ir en bus
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={prevStep} className={`w-full`}>Atrás</Button>
              <Button onClick={nextStep} className={`w-full`}>Siguiente</Button>
            </div>
          </div>)}
          {step === 4 && (<div>
            <div>
              <Label htmlFor="dietaryRestrictions" className="text-base sm:text-lg">
                Restricciones alimentarias
              </Label>
              <Textarea id="dietaryRestrictions" name="dietaryRestrictions" className="mt-1" onChange={(e) => setFormRestrictions(e.target.value)}/>
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={prevStep} className={`w-full`}>Atrás</Button>
            </div>
            <div className="flex gap-4 mt-4">
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
            </div>
          </div>)}
        </form>
      )}
    </div>
  )
}

