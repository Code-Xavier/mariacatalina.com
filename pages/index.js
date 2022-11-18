import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import homeBooks from '@/data/HomeBooks'
import Card from '@/components/Card'
import Hero from '@/components/Hero'
import styles from '@/layouts/style'
import hands from '@/data/book-hands.png'
import headstars from '@/data/headstars.png'
import Image from 'next/image'
import girl from '@/data/fantasy.png'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <div>
        <PageSEO
          title={`Projects - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <div className={`bg-primary ${styles.flexStart} `}>
          <div className={`${styles.boxWidth} `}>
            <Hero />
          </div>
        </div>
        
        <section id="home" className={`flex flex-col md:flex-row  `}>
          <div className={`flex-1 ${styles.flexStart} px-6} flex-col xl:px-0 `}>
            <h1 className="mt-2 mb-2 mr-1 text-2xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:mt-1 md:mb-1 md:text-3xl md:leading-14 text-gradient">
               I’ve had many sources of inspiration over the years.
            </h1>
            <p className={`${styles.paragraph} mt-5 mb-4 max-w-[470px]`}>
              I’ve had many sources of inspiration over the years. Some of the most important books
              I can mention would be the “Percy Jackson and the Olympians” and “The Heroes of
              Olympus” series by Rick Riordan, The Chronicles of Narnia, and Superpowered. Some of
              my favorite movie inspirations were “Pirates of the Caribbean”, “Man of Steel” and
              “Gladiator”. I’m an Anime lover, and series such as “Attack on titan”, “Tokyo ghoul”
              and “My hero academy” have had a huge influence on my story writing and character art.
              Last but not least are comics - I began reading them when I was 11 and oddly enough
              they were what fully launched me on a path of creativity and writing. Btw, check all
              of them out if you haven't already!
            </p>
          </div>

          <div className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}>
            <Image src={girl} alt="robot" className="relative z-[5] max-h-20 w-[100%]" />
          </div>
        </section>
        <section className={`flex flex-col md:flex-row  `}>
          <div className={`flex-1 ${styles.flexStart} px-6} flex-col xl:px-0 `}>
            <h1 className="mt-2 mb-2 mr-1 text-2xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:mt-1 md:mb-1 md:text-2xl md:leading-14 text-gradient">
            I just want people to enjoy my stories on this website.
            </h1>
            <p className={`${styles.paragraph} mt-5 mb-4 max-w-[470px]`}>
              I will keep publishing my chapters here, until I can publish them
              officially as actual book. I will publish a new chapter every month, and occasionally I'll publish digital art and comics here too. Wrapping up, I
              hope you enjoy my stories. I try my best, but I know that what I write is not for
              everybody. I hope that there are a few people who will find my work and like, enjoy
              it, and share it with others!
            </p>
          </div>
          <div className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}>
            <Image src={headstars} alt="robot" className="relative z-[5] h-[100%] w-[100%]" />
          </div>
        </section>
        <div>
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-4xl md:leading-14">
            Happy reading!
          </h2>
          <Image src={hands} alt="robot" className="relative z-[5] h-[100%] w-[100%]" />
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              New: The Shadows of the Celestials Series!
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Follow Asher and his friends as they fight to stay alive in a world that seems out to
              get them and their kind!
            </p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {homeBooks.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Most Recent Chapters
          </h1>
          <h3 className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Pick up right where you left off!
          </h3>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags?.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read Now &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Stories &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
