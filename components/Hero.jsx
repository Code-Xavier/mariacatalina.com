import styles from '@/layouts/style'
import robot from '@/data/readgirl1.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row  `}>
      <div className={`flex-1 ${styles.flexStart} px-6} flex-col xl:px-0 `}>
        <div className="flex  flex-row items-center justify-between">
          <h1 className="text-6xl font-extrabold sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 ">
            Hi There! <br className=" sm:block" />{' '}
            <span className="text-gradient">I'm Maria Catalina</span>{' '}
          </h1>
        </div>

        <h1 className="mt-2 mb-2 mr-1 md:mt-1 md:mb-1 text-xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
          Welcome to my corner of the web!
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px] mb-4`}>
        I love writing stories...  My mind is always conjuring up new stories, constantly creating new characters, plots, and even complex multiversal story lines. I want to share these stories with the world - for people to laugh, cry and suffer along with my characters.
        </p>
      </div>

      <div className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}>
        <Image src={robot} alt="robot" className="relative z-[5] h-[100%] w-[100%]" />
      </div>
    </section>
  )
}

export default Hero
