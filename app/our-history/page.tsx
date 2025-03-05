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
            alt="Sandra y Félix"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <p className="text-lg">
          Nuestra historia comienza en nuestro pueblo. En Alcalá de la Vega pasábamos veranos inolvidables y allí es donde nos conocimos siendo unos niños.
          <br/>Los años fueron pasando y, aunque esos dos niños que solo se veían en verano, durante 15 días esa amistad siempre fue especial.
          <br/>Cada verano, al llegar al pueblo, los dos sentían los mismos nervios y se hacían las mismas preguntas. ¿Cuándo vendrá? ¿Se acordará de mí? ¿Tendrá ganas de verme?
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="elegant-heading text-2xl sm:text-3xl mb-4">Nuestra primera cita</h2>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
          <Image
            src="/historia2.jpg"
            alt="Sandra y Félix"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <p className="text-lg">
          A pesar de solo vernos en verano, cuando nos volvíamos a encontrar era como si el tiempo no hubiese pasado.
          <br/>Cada vez nuestra relación era más fuerte y compartimos veranos increíbles juntos, pero la distancia y nuestra edad nos impedían seguir con nuestra relación después del verano. 
          <br/>Al final llegó el verano que cambió nuestras vidas. Cuando menos lo esperábamos, todo cambió para siempre. 
          <br/>Con 20 y 19 años nos atrevimos a hacer la locura más grande del mundo y empezar nuestro camino juntos.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="elegant-heading text-2xl sm:text-3xl mb-4">Nuestro amor a distancia</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <Image
            src="/historia3.jpg"
            alt="Sandra y Félix"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <p className="text-lg">
          Nuestra relación empezó siendo una relación a distancia, con infinidad de viajes entre Barcelona y Valencia. 
          <br/>Para casi todo el mundo tener una relación así habría sido imposible, pero para nosotros fue lo más bonito de nuestra vida. 
          Miles de horas de videollamadas, hablando cada noche de todo lo que habíamos hecho ese día y muriéndonos de ganas de volver a estar juntos. 
          Siempre esperando a que llegase el finde semana que nos veríamos y disfrutaríamos al máximo cada segundo juntos. 
          <br/>Así pasamos nuestros primeros 4 años, unidos en la distancia. Después de todo este tiempo, al fin llegó el día en que nos fuimos a vivir juntos, y de eso han pasado ya más de 7 años.
          </p>
        </div>
      </section>

      <section className="mb-8 items-center">
        <h2 className="elegant-heading text-2xl sm:text-3xl mb-4 center">La pedida</h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-center max-w-2xl">
          En nuestro pueblo nos conocimos, allí empezamos este bonito camino juntos. Después de 10 años y muchas aventuras compartidas, en Alcalá dimos el siguiente paso en nuestro camino. En la noche en la que celebramos nuestro décimo aniversario juntos, ocurrió algo inesperado…
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
