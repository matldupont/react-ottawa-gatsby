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

## You pull your data from anywhere using GraphQL

---

# ... What?!

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

# The Data and how you get it

---

Your site data; the simplest example
```
gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `ReactOttawa`,
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

- Filesystem (json, md, etc...)

- APIs

- Databases

- CMS

---

## Transformer Plugins

- Markdown to HTML for example

- Images

- Any mods you need to make to incoming data

---

# Demo time!

(ask about the Node API)

---


> Inscrutable icons litter the face of the devices even though the research 
> community has long demonstrated that people cannot remember the meaning of
> more than a small number of icons […] Who can remember what each icon
> means? Not me.
> <cite>Don Norman</cite>

---

# 🤫

---

## Slides are written in Markdown!

Here's the source of the first slide:

    # Gatsby Deck

    Create presentations using Gatsby & React.

---

![Monkey](//i.imgur.com/PnbINJ6.gif)

🌟 Star it on [GitHub](//github.com/fabe/gatsby-deck),  
or create your own with:

    gatsby new my-slides https://github.com/fabe/gatsby-starter-deck
