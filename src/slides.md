# Mat Dupont

##### @matldupont
##### https://github.com/matldupont/
##### Rebel.com

---

# Getting Started with Gatsby

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

- Generates a PWA

- Loads only what it needs to get started

- Prefetches from other pages to speed up navigation

---

## Here's where shit gets crazy... 

---

## You pull your data from anywhere using GraphQL!

---

Will you see some GraphQL in this presentation?  Absolutely!
  
Is this a deep dive into GraqhQL?  
Hell no!

    Now, back to Gatsby
---

## Use GraphQL to pull data from:

- Headless CMS
- SaaS Service
- API
- Database
- The file system itself

---

## What I really meant by "static"...

---

## An example you might have heard of

### reactjs.org

---

# The Basics

---

- Plain old React components

- Pages are just components in ```src/pages``` 

- React Router behind the scenes

---

# The Data

---

Your site data; the simplest example
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

# The Plugins
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

- Images

- Any mods you need to make to incoming data

---

## 3rd party plugins

Anything else you want!

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

(ask about the Node API if there's still time)

---

# Thank you all for your time

## @matldupont

## https://github.com/matldupont/

---
