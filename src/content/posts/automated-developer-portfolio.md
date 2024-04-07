---
title: Automated Developer Portfolio
subtitle: (IDEA) Add support for subtitles
author: Hendrik Prinsloo
pubDatetime: 2024-04-06T01:12:10.569Z
slug: automated-developer-portfolio
featured: false
draft: false
tags:
  - Developer Portfolio
  - Automation
  - Astro
  - GitHub Actions
description: Automated developer porfolio by integrating with some services to showcase skills and experience in realtime
---

Developer portfolio that integrates with some popular services to automatically keep your portfolio up to date.

## Features

- Personal README that fetches stats from [WakaTime](https://wakatime.com), [CodersRank](https://codersrank.io), and [GitHub](https://github.com). See [example](/posts/example-of-the-generated-readme).
- Gallery that shows collections and photos from [Unsplash](https://unsplash.com), see [example](/gallery).

### Coming soon

- Generate posts from [Medium](https://medium.com)
- Generate projects from [GitHub](https://github.com)
- Generate career history from [LinkedIn](https://linkedin.com)

## Getting started

1. Fork the [repo](https://github.com/HendrikPrinsZA/HendrikPrinsZA)

```sh
npm i
npm run dev
```

2. Configure the variables in `.env` file

```env
# Google
PUBLIC_GOOGLE_SITE_VERIFICATION=
PUBLIC_GOOGLE_TAG_MANAGER_ID=

# Unsplash
UNSPLASH_API_APP_ID=
UNSPLASH_API_ACCESS_KEY=
UNSPLASH_API_SECRET_KEY=
```

3. Deploy
   Activate GitHub Pages in your repo settings or [deploy with Forge](#).

---

# ResumeEagle

![Photo of flying eagle](https://unsplash.com/photos/St-Z-3rgZJU/download?ixid=M3wxMjA3fDB8MXxhbGx8NTB8fHx8fHx8fDE3MTIzNjg0Nzd8&force=true&w=1920)
_<small><a href="https://unsplash.com/@hendrikprinsza?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Photo source</a></small>_

Keeping it simple is important as we have quite a lot of interdependencies. The goal is to have a portfolio that is always up to date with the latest stats and information.

## Guidelines

- Expect some parts to fail
- Make all possiple sections optional
- Only introduce dependencies that are absolutely necessary
- Static data should be fetched in an optimal way

## Roadmap

- Generate blog posts from [Medium](https://medium.com)
- Generate projects from [GitHub](https://github.com)
- Zero to self-hosted on GitHub pages in 1 click: fork
- Add support for Astro DB
- Convert realtime operations to database operations based on async jobs. For example, workflow to fetch the latest public repositories from GitHub once a week.

### In progress

- Generate projects from [GitHub](https://github.com)
- Generate posts from [Medium](https://medium.com)

### In the future

- Generate career history from [LinkedIn](https://developer.linkedin.com)
- ...

## Integrations

- [GitHub](https://github.com)
- [WakaTime](https://wakatime.com)
- [CodersRank](https://codersrank.io)
- [Medium](https://medium.com)
- [Unsplash](https://unsplash.com)

### In the future

- [Spotify](https://developer.spotify.com/documentation/web-api)
- [Strava](https://developers.strava.com)
- [LinkedIn](https://developer.linkedin.com)
- ...

## Technologies

- [Astro](https://astro.build) with [AstroPaper theme](https://github.com/satnaing/astro-paper)
- [Svelte](https://svelte.dev)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Analytics](https://analytics.google.com)
- [Google Tag Manager](https://tagmanager.google.com)
- [GitHub Actions](https://github.com/features/actions)

### In the future

- [Astro DB](https://docs.astro.build/en/guides/astro-db)
- ...
