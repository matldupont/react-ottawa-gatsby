
# Getting Started with Gatsby

## Mat Dupont

---

# ! Disclaimer !

---

# What is Gastby anyway?

---

## The perfect marriage between React, GraphQL and a crazy fast website

(all things I like)

---

# ... what is it really?

---

# A React-based static site generator

---

### What does it generate?

HTML

JavaScript

CSS

#### ... a JAMstack application?

---

- Code splitting out of the box 
 
- Abstraction layer above Webpack and Babel

- Hot reloading

- React is fun

---

## But, ```create-react-app```?

---

# Server Side Rendered React

---

- Real content on First Paint
 
- SEO

- Edge of the cloud

- Scalable

- SSR, but Serverless!

- Hydrates to a full featured React app

---

# Performance

---

- Loads only what it needs to get started
 
- Prefetches from other pages to speed up navigation
 
- Default starter generates a Progressive Web App

---

## Here's where shit gets really crazy... 

---

## You pull your site data from anywhere using GraphQL!

---

## Pull data from:

- Headless CMS
- SaaS Service
- API
- Database
- The file system itself

## Dumps it all into a GraphQL schema

---

## What I really meant by "static"...

Pages, not just files.

---

## Not On-Demand, Pre-Built

No more calling your api or database  
to dynamically fetch entire pages

---

# The Basics

---

- Plain old React components

- Pages are just components in ```src/pages``` 

- Reach Router behind the scenes

---

# The Data

---

The simplest example is your site data; 
```
gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `Rebel.com`,
    description: `The coolest registrar in town`,
  },
}
```
---

```
import { graphql } from 'gatsby'
 
...
 
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
```
---

# Two ways to query

---

## Page Queries

```
import React from 'react'
import { graphql } from 'gatsby'

const MainPage = ({data}) => { 
    return <div>{data.site.siteMetadata.description}</div>;
}

export const query = graphql`
  query MainPageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default MainPage
```
---

## Static Queries*

```
import { StaticQuery, graphql } from 'gatsby'
...
export default () => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => <YourComponent data={data} />}
    />
)
```
---
```
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}
```

---

## But, how does it "dump" it in there?!

# Plugins!
---

## Source Plugins

Pull data from various locations into "nodes"

- Filesystem (json, md, etc...)

- APIs

- Databases

- CMS

---

## Transformer Plugins

Transform data from the source plugins  
into new nodes or node fields

- Markdown to HTML

- Scaled down images

- Any mods you need to make to incoming data

---

## Anything else you want!

```
gatsby-plugin-styled-components

gatsby-plugin-offline

gatsby-plugin-manifest

```
---

## Something missing?  

# Make your own!

---

# More fun!?

---

# Thank you all for your time

## @matldupont

## https://github.com/matldupont/

---
