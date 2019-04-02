
# Getting Started with Gatsby

## Mat Dupont

    Can I really get through this in 20 min?!

---

# What is Gastby anyway?

---

# A static site generator!

(Based in React, or I wouldn't be talking about it)

---

### What does it generate?

HTML

JavaScript

CSS

---

So ... a JAMStack app.

---

> "This is a React meetup.  

> All our apps are static files using JAMStack. 

> What else you got?!"
<cite>All of you, right now</cite>

---

# It's crazy fast!

---

# What else?

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

## The most relevant example

---

# reactjs.org

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
    title: `ReactOttawa`,
    description: `The coolest meetup in town`,
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

## Static Queries

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

# Plugins for everything!
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

### 3rd party plugins



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

# Check out the starters page

---

# https://store.gatsbyjs.org/


# Promo Code: 
# REACTOTTOWA

---

# Thank you all for your time

## @matldupont

## https://github.com/matldupont/



---
