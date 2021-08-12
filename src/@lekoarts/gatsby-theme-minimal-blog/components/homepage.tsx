/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
// @ts-ignore
import Hero from "../texts/hero"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section sx={{ mb: [4, 5, 6], p: { fontSize: [1, 2, 3], mt: 2, color: `secondary` }, variant: `section_hero` }}>
        <Hero />
      </section>
      <h1 sx={{ fontSize: [4, 5, 6], fontWeight: `bold`, color: `heading` }}>
        Lastest Blog Posts
      </h1>
      <Listing posts={posts} showTags={true} />
    </Layout>
  )
}

export default Homepage