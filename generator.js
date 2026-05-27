require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic.Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function generateGTMBrief(input) {
  const message = await client.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: `You are a senior GTM strategist. Generate a structured GTM brief based on the following product input.

Product Input:
${input}

Generate a GTM brief with the following sections:
1. **Problem Statement** — What pain point does this solve and for whom?
2. **Target Audience** — ICP definition (industry, company size, role, pain)
3. **Value Proposition** — Core benefit in one sentence
4. **Competitive Positioning** — How to differentiate vs alternatives
5. **Key Messages** — 3 messages for each audience: Economic Buyer, Champion, End User
6. **Launch Channels** — Top 3 channels with rationale
7. **Success Metrics** — What does a successful launch look like in 90 days?

Be specific, opinionated, and concise. No fluff.`
      }
    ]
  });

  return message.content[0].text;
}

async function run() {
  const productInput = `
    Product: AI-powered expense management tool for fintech startups
    Stage: Early beta, 50 pilot users
    Key feature: Automatically categorises and flags anomalous transactions in real-time
    Pricing: $299/month per company
    Current gap: Finance teams spend 6+ hours weekly on manual reconciliation
  `;

  console.log('Generating GTM Brief...\n');
  const brief = await generateGTMBrief(productInput);
  console.log('=== GTM BRIEF ===\n');
  console.log(brief);
}

run();