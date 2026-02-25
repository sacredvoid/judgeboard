# JudgeBoard — Design Document

**Date:** 2026-02-25
**Status:** Approved
**One-liner:** A curated directory of hackathons actively seeking judges and mentors.

## Problem

Finding hackathon judge/mentor opportunities is fragmented. Opportunities are scattered across Devpost, MLH, Google Forms, social media, and word of mouth. There's no single place to discover them. Meanwhile, organizers struggle to recruit qualified judges through manual, network-dependent outreach.

A significant hidden demand driver: professionals pursuing O-1A visas and EB-1 green cards need documented judging experience. They're actively hunting for opportunities using GitHub repos, immigration substacks, and legal blog posts.

## Target User (v1)

Experienced professionals looking to judge or mentor at hackathons. This includes:
- Senior engineers/designers wanting to give back
- Professionals building O-1A/EB-1 immigration evidence
- Industry experts curious about the hackathon scene

v1 is single-sided — serve the judge/mentor side only with a curated directory. No organizer-facing features yet.

## Market Research

### What exists today
- **MLH** — mentor signup form, but no browsable directory
- **Devpost** — lists hackathons, no judge-specific search
- **awesome-judging GitHub repo** — curated list for O-1A/EB-1, 250+ stars, static markdown
- **Immigration Jason Substack** — newsletters curating 20+ opportunities
- **Opportunity Hack** — judge applications for their events only
- **Idealist** — occasional volunteer judge postings
- **Individual hackathon sites** — scattered Google Forms

### Gap
No one owns the "find hackathons that need judges" niche. Solutions are fragmented across GitHub, Substack, Google Forms, and social media.

### Risks
- Two-sided marketplace cold start (mitigated by going single-sided first)
- Devpost/MLH could add this trivially
- Low engagement frequency (2-5 events/year per user)
- Immigration gaming could degrade organizer trust
- Most judging is unpaid — hard to monetize supply side

## Architecture

- **Framework:** Next.js 14+ (App Router)
- **Hosting:** Vercel (free tier)
- **Styling:** Tailwind CSS
- **Data:** Static JSON file (`data/hackathons.json`) — no database for v1
- **Auth:** None
- **Backend:** None

## Pages

### `/` — Home
- Hero section explaining what JudgeBoard is
- Filter bar: Virtual/In-person, Topic, Date range, Experience level
- Card-based listing of opportunities
- Each card shows: hackathon name, date, location, topics, role needed (judge/mentor/both), apply link, deadline

### `/about`
- What this is and who it's for
- How to submit an opportunity (links to Google Form)
- Brief mention of immigration relevance

## Core Features

1. **Filterable directory** — filter by location type, topic (AI, Web3, Social Impact, General), date range, experience level (any, senior, expert)
2. **SEO-optimized listings** — each listing indexable, strong meta tags targeting "hackathon judge opportunities 2026" queries
3. **Submit an opportunity** — Google Form link (no backend needed)
4. **Immigration callout** — subtle banner: "Building your O-1A/EB-1 portfolio? We highlight professional-level judging opportunities that count."

## Data Model (`data/hackathons.json`)

```json
[
  {
    "id": "unique-slug",
    "name": "Hackathon Name",
    "organizer": "Org Name",
    "date": "2026-03-15",
    "deadline": "2026-03-01",
    "location": "San Francisco, CA",
    "locationType": "in-person",
    "topics": ["ai", "social-impact"],
    "rolesNeeded": ["judge", "mentor"],
    "experienceLevel": "senior",
    "applyUrl": "https://...",
    "description": "Brief description of the hackathon and what they need.",
    "immigrationEligible": true
  }
]
```

## What We're NOT Building (v1)

- No user accounts or profiles
- No database
- No matching algorithm
- No payment system
- No API
- No organizer dashboard

## Data Strategy

1. **Seed data:** Scrape/aggregate current opportunities from Devpost, MLH, Opportunity Hack, Idealist, awesome-judging repo, and direct hackathon sites
2. **Ongoing curation:** Manual updates to JSON file
3. **Community submissions:** Google Form for users to submit opportunities they find
4. **Future:** Automated scraping and eventually organizer self-service

## Success Criteria

- Site is live and indexed by Google
- Initial dataset of 15-30 real, current opportunities
- Organic traffic from "hackathon judge opportunities" queries within 2-3 months
- At least 1 community-submitted opportunity per week after launch

## Future Roadmap (not v1)

- User profiles with expertise tags
- "Express interest" button (requires lightweight backend)
- Immigration portfolio tracker (subscription monetization)
- Organizer self-service listings
- Email digest of new opportunities
