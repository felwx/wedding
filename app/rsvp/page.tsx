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
  const [formMusic, setFormMusic] = useState("");
  const [formBus, setFormBus] = useState("");
  const nextStep = () => {
    setStep((prev) => prev + 1)
  };
  const prevStep = () => setStep((prev) => prev - 1);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)
    setError(null)
    const GOOGLE_SHEET_URL =
      "https://script.google.com/macros/s/AKfycbyVJVeqMUJYz7MLTNxu-hUVq__r-jdY0ajN2TX_i_-9mAvj-w4PpNqZ2c7nZvjyUK2w/exec"

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const data = {
      name: formName as string,
      email: formPhone as string,
      attending: formAttending as string,
      guests: "1",
      dietaryRestrictions: formRestrictions as string,
      useBusService: formBus as string,
      music: formMusic as string,
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
      setStep(6)
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
    setFormMusic("")
  }

  return (
    <div className="content-wrapper">
      <h1 className="elegant-heading text-3xl sm:text-4xl mb-6 md:mb-8 text-center">Confirma tu asistencia</h1>
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
                  src="/formulario1.jpg"
                  alt="Sandra y Félix"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md form-img"
                />
            </div>
            <div className="form-label">
              <Label htmlFor="name" className="text-base sm:text-lg">
                Primero, dinos cómo te llamas
              </Label>
              <Input id="name" name="name" placeholder="Tu nombre" type="text" required className="mt-1" value={formName} onChange={(e) => setFormName(e.target.value)}/>
            </div>
            <div className="form-label">
              <Label htmlFor="phone" className="text-base sm:text-lg">
                y tu teléfono
              </Label>
              <Input id="phone" name="phone" placeholder="Tu teléfono" type="phone" required className="mt-1" value={formPhone} onChange={(e) => setFormPhone(e.target.value)}/>
            </div>
            <div className="form-button flex gap-4 mt-4 z">
              <Button onClick={nextStep} disabled={formName == "" ? true:false} className={`w-full`} >Siguiente</Button>
            </div>
          </div>)}
          {step === 2 && (<div>
            <div className="flex flex-col items-center">
              <Image
                  src="/formulario2.jpg"
                  alt="Sandra y Félix"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md form-img"
                />
            </div>
            <div className="form-label">
              <Label className="text-base sm:text-lg"><b>Asistencia, ¿confirmas que vendrás a la boda?</b></Label>
              <RadioGroup name="attending" value={formAttending}>
                <div className="items-center space-x-2">
                  <RadioGroupItem value="yes" id="attending-yes" onClick={(e) => {setFormAttending("yes")}}/>
                  <Label htmlFor="attending-yes">Sí, por supuesto.</Label>
                </div>
                <div className="items-center space-x-2">
                  <RadioGroupItem value="no" id="attending-no" onClick={(e) => setFormAttending("no")}/>
                  <Label htmlFor="attending-no">Me encantaría pero no puedo</Label>
                </div>
              </RadioGroup>
              <div className="flex gap-4 mt-4">
                <Button onClick={prevStep} className={`w-full`}>Atrás</Button>
                {formAttending !== "no" ? (
                  <Button onClick={nextStep} disabled={formAttending == "" ? true:false} className={`w-full`}>Siguiente</Button>
                ):(
                  <Button type="submit" className={`w-full ${
                      isSending ? "opacity-50 cursor-not-allowed" : ""}`} 
                      disabled={isSending || formMusic !== "" ? true:false} >
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
                )}
              </div>
            </div>
          </div>)}
          {step === 3 && (<div>
            <div className="flex flex-col items-center">
              <Image
                  src="/formulario3.jpg"
                  alt="Sandra y Félix"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md form-img"
                />
            </div>
            <div className="form-label">
              <Label className="text-base sm:text-lg"><b>Transporte, ¿cómo has pensado llegar?</b> 
                <br/><i>Te recordamos: Iglesia Tibidabo, banquete Celler de Can Torrens en Sant Fost de Campsentelles.</i>
                <br/><i>Importante: pondremos a disposición un único horario de regreso al final de la fiesta de madrugada sobre 4:30h am</i></Label>
              <RadioGroup name="useBusService" className="form-radio" value={formBus}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="bus-no" onClick={(e) => {setFormBus("yes")}}/>
                  <Label htmlFor="bus-no">Quiero ir en bus
                  </Label>
                </div>
                <div className="items-center space-x-2">
                  <RadioGroupItem value="no" id="bus-yes" onClick={(e) => {setFormBus("no")}}/>
                  <Label htmlFor="bus-yes">Voy por mi cuenta</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={prevStep} className={`w-full`}>Atrás</Button>
              <Button onClick={nextStep} disabled={formBus == "" ? true:false} className={`w-full`}>Siguiente</Button>
            </div>
          </div>)}
          {step === 4 && (<div>
            <div className="flex flex-col items-center">
              <Image
                  src="/formulario4.jpg"
                  alt="Sandra y Félix"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md form-img"
                />
            </div>
            <div className="form-label">
              <Label htmlFor="dietaryRestrictions" className="text-base sm:text-lg">
                <b>¿Eres vegano o vegetariano?</b> ¿Alguna cosa que debamos saber?
              </Label>
              <Textarea id="dietaryRestrictions" name="dietaryRestrictions" className="mt-1" onChange={(e) => setFormRestrictions(e.target.value)}/>
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={prevStep} className={`w-full`}>Atrás</Button>
              <Button onClick={nextStep} className={`w-full`}>Siguiente</Button>
            </div>
          </div>)}
          {step === 5 && (<div>
            <div className="flex flex-col items-center">
              <Image
                  src="/wolf.gif"
                  alt="Sandra y Félix"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md form-img"
                />
            </div>
            <div className="form-label">
              <Label htmlFor="musica" className="text-base sm:text-lg">
                <b>Y, por último, {formName}</b> ¿qué canción te gustaría escuchar?
              </Label>
              <Input id="musica" name="musica" placeholder="Canción y artista" required className="mt-1" value={formMusic} onChange={(e) => setFormMusic(e.target.value)}/>
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={prevStep} className={`w-full`}>Atrás</Button>
              <Button type="submit" className={`w-full ${
                    isSending ? "opacity-50 cursor-not-allowed" : ""}`} 
                    disabled={isSending || formMusic == "" ? true:false} >
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
          {step === 6 && (<div>
          <div className="flex flex-col items-center">
            <Image
                src="/formulario6.jpg"
                alt="Sandra y Félix"
                width={300}
                height={200}
                className="rounded-lg shadow-md form-img"
              />
          </div>
          <CheckCircle2 className="h-12 w-12 gold mx-auto mb-4" />
          {formAttending == "yes" ? (<div>
            <h2 className="text-2xl font-serif text-primary mb-4 text-center">¡Millones de gracias por contestar {formName}, estamos encantados de poder contar contigo!
              <br/>Intentaremos buscarte cuando suene {formMusic} 😘</h2>
          </div>):(
            <div>
              <h2 className="text-2xl font-serif text-primary mb-4 text-center">¡Millones de gracias por contestar {formName}, sentimos mucho que no puedas acompañarnos en este dia tan especial!</h2>
            </div>
          )}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Si necesitas hacer cambios, por favor contáctanos directamente.
            </p>
              <Button onClick={resetForm} className="w-full max-w-xs">
                Enviar otra respuesta
              </Button>
          </div>
        </div>)}
        </form>
      {/* )} */}
    </div>
  )
}

