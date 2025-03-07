"use client"

import { useState } from "react";
import Link from "next/link"

export default function Info() {
  const sections = [
    { id: 1, title: "Ceremonia" },
    { id: 2, title: "Parquing Tibidabo" },
    { id: 3, title: "Banquete" },
    { id: 4, title: "Autobuses" },
    { id: 5, title: "Hotel" },
    { id: 6, title: "Bares" }
  ];
  const [showSection, setShowSection] = useState(1);
  const cardStyle = "w-full bg-white shadow-lg rounded-2xl p-6 text-center w-40 sm:w-48 md:w-56 lg:w-60 hover:bg-gray-100 transition";
  return (
    <div className="content-wrapper">
      <h1 className="elegant-heading text-3xl sm:text-4xl mb-6 md:mb-8 text-center">Información de la boda</h1>
      <div className="space-y-6 md:space-y-8">
        <section className="bg-card p-4 md:p-6 rounded-lg shadow-md">
          <p className="mb-2">
            La ceremonia se celebrará en la iglesia del <strong>Templo del Sagrado Corazón de Jesús</strong>, en el Tibidabo. Para llegar hasta allí puedes ir con tu coche propio si lo deseas, o <Link href="/rsvp" className="hover:text-primary transition-colors duration-200">
              <strong>reservar plaza</strong></Link> en los autobuses que pondremos a tu disposición.
          </p>
          <p className="mb-2">
            Si decides venir en autobús, solo te has de preocupar de decírnoslos <Link href="/rsvp" className="hover:text-primary transition-colors duration-200">
              <strong>rellenando el formulario</strong></Link> y estar a la hora de salida, las 15:30 h en el Hotel Exe Parc del Vallès, Carrer dels Artesans, 8, 08290 Cerdanyola del Vallès, Barcelona.
          </p>
          <p className="mb-2">Si prefieres venir por tu cuenta, el parking del tibidabo es tu mejor opción para llegar a la ceremonia. </p>
          <p>Aquí tienes toda la información que necesitas</p>
          <div className="flex flex-wrap justify-center gap-4 p-4 w-full max-w-screen-lg mx-auto">
            {sections.map((section) => (
              <button
              key={section.id}
              onClick={() => setShowSection(section.id)}
              className={showSection === section.id ? `active ${cardStyle}` : cardStyle}
            >
              <strong>{section.title}</strong>
            </button>
            ))}
          </div>
        </section>
      </div>
      <div className="space-y-6 md:space-y-8">
        {showSection === 1 && (<section id="ceremonia" className="bg-card p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="elegant-heading text-xl sm:text-2xl mb-3 md:mb-4">Ceremonia</h2>
          <p className="mb-2">
            <strong>Fecha:</strong> 05 de abril de 2025
          </p>
          <p className="mb-2">
            <strong>Hora:</strong> 16:30h
          </p>
          <p className="mb-2">
            <strong>Lugar:</strong> Templo del Sagrado Corazón de Jesús, Ctra. de Vallvidrera al Tibidabo, 111, Distrito de Sarrià-Sant Gervasi, 08035 Barcelona
          </p>
          <p className="mb-2">
            <strong>Cómo llegar:</strong> Pondremos autobuses para el que lo desee. Si prefieres ir en coche, el
            Tibidabo dispone de parking
          </p>
          <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.4631140155404!2d2.118879836049048!3d41.42217742830708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4982761d1d1e3%3A0x1252eb2e9b2d5c7!2sTemplo%20del%20Sagrado%20Coraz%C3%B3n%20de%20Jes%C3%BAs!5e0!3m2!1ses!2ses!4v1738765139793!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </section>)}
        {showSection === 2 && (<section id="parking" className="bg-card p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="elegant-heading text-xl sm:text-2xl mb-3 md:mb-4">Parking Tibidabo</h2>
          <p className="mb-2">
            Si vienes en coche, el Tibidabo dispone de parking, es el único lugar donde podrás aparcar. 
          </p>
          <p className="mb-2">
            <strong>Lugar:</strong> Parking Parque de atracciones Tibidabo
          </p>
          <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d998.4170375172664!2d2.1186356333087693!3d41.420326548636076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498270e7c2ebb%3A0x85fba71bcec41a5!2sParking%20Parque%20de%20atracciones%20Tibidabo!5e0!3m2!1ses!2ses!4v1741272678637!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </section>)}
        {showSection === 3 && (<section id="banquete" className="bg-card p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="elegant-heading text-xl sm:text-2xl mb-3 md:mb-4">Banquete</h2>
          <p className="mb-2">
            Después de la ceremonia nos dirigiremos al Celler de Can Torrens para continuar allí con la fiesta.
          </p>
          <p className="mb-2">
            <strong>Fecha:</strong> 05 de abril de 2025
          </p>
          <p className="mb-2">
            <strong>Hora:</strong> 19:00h
          </p>
          <p className="mb-2">
            <strong>Lugar:</strong> El Celler de Can Torrens, Pl. de les Glòries Catalanes, 3, 08105 Sant Fost de Campsentelles, Barcelona
          </p>
          <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.5756800257877!2d2.2313318764696577!3d41.513469188164386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b945fa1c6059%3A0xbdbcfd9dcf0a8f16!2sEl%20Celler%20de%20Can%20Torrens!5e0!3m2!1ses!2ses!4v1738765363176!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </section>)}
        {showSection === 4 && (<section id="autobuses" className="bg-card p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="elegant-heading text-xl sm:text-2xl mb-3 md:mb-4">Autobuses</h2>
          <p className="mb-2">Hemos contratado un servicio de autobuses para todo el que quiera utilizarlo</p>
          <p className="mb-2">
            Para tener plazas para todos, por favor rellena el <Link href="/rsvp" className="hover:text-primary transition-colors duration-200">
              <strong>formulario de asistencia</strong>
            </Link>
          </p>
          <p className="mb-2">
            <strong>Fecha:</strong> 05 de abril de 2025
          </p>
          <p className="mb-2">
            <strong>Hora de salida:</strong> 15:30h
          </p>
          <p className="mb-2">
            <strong>Hora de regreso:</strong> Cuando acabe la fiesta...
          </p>
          <p className="mb-2">
            <strong>Lugar de salida y regreso:</strong> Hotel Exe Parc del Vallès, Carrer dels Artesans, 8, 08290 Cerdanyola del Vallès, Barcelona
          </p>
          <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5026.489379567399!2d2.1270257002544555!3d41.48761903565177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4966cafaede53%3A0xd0088935cd7bc35e!2sHotel%20Exe%20Parc%20del%20Vall%C3%A8s!5e0!3m2!1ses!2ses!4v1738765639778!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </section>)}
        {showSection === 5 && (<section id="hotel" className="bg-card p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="elegant-heading text-xl sm:text-2xl mb-3 md:mb-4">Hotel</h2>
          <p className="mb-2">Esta es la ubicación del hotel donde estáis alojados. El autobús saldrá desde este punto a las 15:30h</p>
          <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5026.489379567399!2d2.1270257002544555!3d41.48761903565177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4966cafaede53%3A0xd0088935cd7bc35e!2sHotel%20Exe%20Parc%20del%20Vall%C3%A8s!5e0!3m2!1ses!2ses!4v1738765639778!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </section>)}
        {showSection === 6 && (<section id="bares" className="bg-card p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="elegant-heading text-xl sm:text-2xl mb-3 md:mb-4">Bares</h2>
          <p className="mb-2">Muy cerca del hotel está la calle Sant Ramon, donde encontraréis todos los bares que necesiteis.</p>
          <p className="mb-2">
            <strong>Cafeterías:</strong> El informal, Granier...
          </p>
          <p className="mb-2">
            <strong>Bares donde tomar una cerveza fresquita:</strong> Nuestro bar favorito es "La pizarrita de Juanlu", donde con cada cerveza se acompaña con las mejores tapas.
          </p>
          <p className="mb-2">
            <strong>Bares de Tapas:</strong>Ca L'enric, Chumi, Od bar bodega, Tempo di vino, Cal Pintxo...
          </p>
          <p className="mb-2">
            <strong>Restaurante:</strong> Od Bar, Tocat de l'Olla...
          </p>
          <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4226.5557405867885!2d2.132616761782012!3d41.490702397239566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbares%20cerca%20carrer%20sant%20ramon!5e0!3m2!1ses!2ses!4v1741284675186!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </section>)}
      </div>
    </div>
  )
}
