import Image from "next/image"
import VideoPlayer from "../components/VideoPlayer"

export default function OurHistory() {
  return (
    <div className="content-wrapper">
      <h1 className="elegant-heading text-3xl sm:text-4xl mb-6 md:mb-8 text-center">Nuestra historia</h1>

      <section className="mb-8">
        <h2 className="elegant-heading text-2xl sm:text-3xl mb-4">Cómo nos conocimos</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <Image
            src="/historia1.jpg"
            alt="Jane and John's first meeting"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <p className="text-lg">
            Desde niños, compartimos veranos inolvidables en Alcalá de la Vega, el pueblo que nos vio crecer. Cada
            verano pasábamos 15 días inolvidables. Aunque el tiempo juntos era breve, siempre había algo especial entre
            nosotros. Lo que empezó como una amistad de infancia fue creciendo, hasta que un día nos dimos cuenta de que
            lo que sentíamos iba mucho más allá de los veranos compartidos.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="elegant-heading text-2xl sm:text-3xl mb-4">Nuestra primera cita</h2>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
          <Image
            src="/historia2.jpg"
            alt="Jane and John's first date"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <p className="text-lg">
            Llevábamos toda la vida viéndonos solo unos días al año, pero cada vez que nos reencontrábamos, era como si
            el tiempo no hubiera pasado. Aquel verano, cuando teníamos 20 y 19 años, todo cambió. Sin esperarlo, lo que
            siempre había sido un amor de verano se convirtió en algo más profundo, lo nuestro no era solo un amor de
            verano… era un amor para siempre.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="elegant-heading text-2xl sm:text-3xl mb-4">La pedida</h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-center max-w-2xl">
            Después de 10 años juntos y muchas aventuras compartidas, Félix le pidió matrimonio a Sandra durante las
            fiestas de Alcalá de la Vega. Aunque Félix es tímido, reunió todo su valor y, delante de todo el pueblo, le
            hizo la gran pregunta. Fue un momento inolvidable, y, por supuesto, Sandra dijo que sí. ¡Ahora comienza un
            nuevo capítulo en su historia de amor!
          </p>
          <VideoPlayer src="/pedida.mp4"/>
        </div>
      </section>

      {/* <section>
        <h2 className="elegant-heading text-2xl sm:text-3xl mb-4 text-center">Nuestra historia en fotos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src={`/placeholder.svg`}
                alt={`Jane and John's journey ${i}`}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </section> */}
    </div>
  )
}

