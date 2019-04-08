
# Getting Started with Gatsby

## Mat Dupont

---

# What is Gastby anyway?

---

# A React-based static site generator!

---

### What does it generate?

HTML

JavaScript

CSS

---

Not *just* a JAMStack app

---

Server Side Rendered React application

---

## But why bother?

---

- Real content on First Paint
 
- SEO

- Edge of the cloud

- Scalable

- Serverless

---

# Performance

---

- Code and data splitting out of the box.

- A layer above Webpack and Babel

- Generates a PWA

- Loads only what it needs to get started

- Prefetches from other pages to speed up navigation

---

## Here's where shit gets crazy... 

---

## You pull your data from anywhere using GraphQL!

---

## Pull data from:

- Headless CMS
- SaaS Service
- API
- Database
- The file system itself

---

## What I really meant by "static"...

Pages, not just files.

---

No more calling your api or database  
to dynamically fetch entire pages

Your data is all pulled when you deploy

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

# A plugin for everything!
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

- Markdown to HTML for example

- Images with ```gatsby-transformer-sharp```

- Any mods you need to make to incoming data

---

## Anything else you want!



```
gatsby-plugin-styled-components

gatsby-plugin-offline

gatsby-plugin-manifest

```
---

## The best part...

---

# You can make your own!

---

# Demo time!

---

# Thank you all for your time

## @matldupont

## https://github.com/matldupont/

---
