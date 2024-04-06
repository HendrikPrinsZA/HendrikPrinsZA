---
title: Automated Developer Portfolio
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

Automated developer porfolio with support for stats from [GitHub](https://github.com/), [WakaTime](https://wakatime.com/), [CodersRank](https://codersrank.io/), and more.

This will be a living project that will grow organically as features and optimisations are added.

## Features

- [Astro](https://astro.build/) with [AstroPaper theme](https://github.com/satnaing/astro-paper)
- Workflow to update the REAMDE.md with the latest stats from [GitHub](https://github.com/), [WakaTime](https://wakatime.com/), [CodersRank](https://codersrank.io/), [Medium](https://medium.com/), and more.
- Gallery integrated with [Unsplash](https://unsplash.com/)

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

- Generate blog posts from [Medium](https://medium.com/)
- Generate projects from [GitHub](https://github.com/)
- Zero to self-hosted on GitHub pages in 1 click: fork
- Add support for Astro DB
- Convert realtime operations to database operations based on async jobs. For example, workflow to fetch the latest public repositories from GitHub once a week.
