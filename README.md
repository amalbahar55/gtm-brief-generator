# GTM Brief Generator

## Problem
PMMs and growth marketers waste hours assembling GTM briefs from scratch for every new product or feature launch. The output is often inconsistent, missing key strategic sections, or too generic to be actionable.

## What This Agent Does
An AI-powered GTM brief generator that takes a raw product input and produces a structured, opinionated launch brief in second covering positioning, messaging, channels, and success metrics.

**Input:** Product description, stage, key features, pricing, and market gap  
**Process:** Claude analyses the input through a senior GTM strategist lens  
**Output:** A complete GTM brief with 7 structured sections ready for review

## Brief Structure Generated
1. **Problem Statement** : Pain point and target persona
2. **Target Audience** : ICP definition (industry, size, role, pain)
3. **Value Proposition** : Core benefit in one sentence
4. **Competitive Positioning** : Differentiation vs alternatives
5. **Key Messages** — Per audience: Economic Buyer, Champion, End User
6. **Launch Channels** : Top 3 with rationale
7. **Success Metrics** : 90-day definition of success

## Tech Stack
- Claude API (Anthropic) : GTM strategy generation
- Node.js

## Design Decisions
- **Opinionated output** : agent is prompted to be specific, not generic
- **Audience-segmented messaging** : separates Economic Buyer, Champion, and End User messages (the most common gap in real GTM briefs)
- **90-day success framing** : forces concrete, measurable outcomes over vanity metrics

## Roadmap
- **v1** (shipped) : Single product input → full GTM brief
- **v2** : Accept PDF/doc upload as input (e.g. PRD or one-pager)
- **v3** : Multi-format output (Notion page, Google Doc, Slack summary)
- **v4** : Competitive intel integration from Agent 1 to auto-populate positioning section

## Status
v1 live