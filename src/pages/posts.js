export const posts = [
  {
    slug: 'why-we-built-cosai',
    title: 'Why we built COSAI: an AI Chief of Staff for your attention',
    tag: 'Manifesto',
    art: 'a',
    date: 'May 2026',
    readTime: '6 min',
    keywords: ['AI assistant', 'attention management', 'personal AI', 'information overload'],
    excerpt: 'The feed was supposed to inform us. Now it just exhausts us. Here is the smaller, calmer thing we wanted instead.',
    body: [
      'Most of us did not sign up for a part-time job moderating our own attention. And yet that is what social feeds and news apps quietly turned into — a stream of urgent-looking things, most of which do not concern us.',
      'COSAI is our attempt at a different shape. Not another feed. Not another notification firehose. Just a small AI that reads the noisy places on your behalf and surfaces the few items that actually fit your life this week.',
      'It learns slowly and on purpose. Every save, skip, and thumbs-down nudges the model. Over a month, your brief becomes uncannily yours — and shorter, not longer.',
      'We also think context matters. A rainy Tuesday and a sunny Saturday should not produce the same suggestions. So COSAI folds in weather, local events, and your calendar to recommend things to actually do — not just things to read.',
      'The product idea is simple: a chief of staff for the chaos. The hard part is doing it without becoming yet another feed. We are betting that calm, useful, and brief beats addictive, infinite, and loud — at least for a meaningful slice of people who are tired of being optimized against.'
    ]
  },
  {
    slug: 'filtering-news-without-a-bubble',
    title: 'Filtering the news without building a bubble',
    tag: 'Design notes',
    art: 'b',
    date: 'April 2026',
    readTime: '5 min',
    keywords: ['filter bubble', 'news personalization', 'serendipity', 'recommender systems'],
    excerpt: 'Personalization is easy. Personalization that does not narrow your worldview is the harder problem we care about.',
    body: [
      'A naive recommender will happily build you a hall of mirrors. Show you what you liked, hide what you did not, repeat. It feels good and it is corrosive.',
      'COSAI treats serendipity as a first-class signal. A small, tunable share of every brief is reserved for items outside your usual orbit — selected for quality, not contrarian-ness.',
      'You can dial that share up or down. The default is set so you notice the world is bigger than your tabs.',
      'Concretely, our ranker carries a "discovery budget" alongside the relevance score. Items that score lower on relevance but higher on novelty and source diversity get a bid against the relevance leaderboard. The result is a brief that still feels like yours, but with a window cracked open.'
    ]
  },
  {
    slug: 'context-aware-suggestions',
    title: 'Context-aware suggestions: weather, place, and your day',
    tag: 'Product',
    art: 'c',
    date: 'March 2026',
    readTime: '4 min',
    keywords: ['contextual AI', 'location-aware', 'weather integration', 'smart suggestions'],
    excerpt: 'A good chief of staff knows it is raining. Here is how COSAI uses your environment to suggest what is worth doing next.',
    body: [
      'When COSAI sees a free hour on your calendar, a comfortable forecast, and a gallery opening nearby that matches a topic you have saved, it will quietly suggest going.',
      'When the forecast is grim and your week has been heavy, the suggestion looks different — a long-form read, a recipe for something warm, a friend you have not texted in a while.',
      'These are nudges, never demands. You can turn them off. But most people leave them on.',
      'Context fusion is the unglamorous engine behind those nudges: weather APIs, calendar metadata, neighborhood signals, time-of-day patterns, and your own stated preferences are merged into a single state vector that the suggestion engine reads. No part of it is sold. None of it leaves your account.'
    ]
  },
  {
    slug: 'how-cosai-learns-you',
    title: 'How COSAI learns you (and what it never stores)',
    tag: 'Trust',
    art: 'd',
    date: 'February 2026',
    readTime: '7 min',
    keywords: ['privacy', 'AI privacy', 'data ownership', 'preference model'],
    excerpt: 'A short, plain-language explanation of the preference model — and the lines we will not cross.',
    body: [
      'Your preference model lives with your account and is yours to export or delete at any time. It is not sold, not used to train shared models, and not shared with sources.',
      'We collect the minimum needed to make recommendations: topic affinities, source trust, and reading rhythms. Not your messages. Not your contacts. Not your photos.',
      'The simplest way to put it: COSAI works for you. If we ever stop being able to say that honestly, we will say so first.',
      'On the engineering side, sensitive context (precise location, calendar event titles, message snippets) is processed on-device when possible and only abstract features are sent to the ranker. The line we draw is content vs. metadata: COSAI ranks against patterns, not transcripts.'
    ]
  },
  {
    slug: 'attention-is-the-new-currency',
    title: 'Attention is the new currency — spend it on purpose',
    tag: 'Essay',
    art: 'e',
    date: 'January 2026',
    readTime: '8 min',
    keywords: ['attention economy', 'productivity', 'digital wellbeing', 'focus'],
    excerpt: 'If a feed costs you forty minutes a day for the same five news items, you are paying retail for wholesale information.',
    body: [
      'A typical feed user opens an app forty to seventy times a day. Most of those visits return nothing new — just the same handful of stories rearranged with fresh outrage on top. The cost is paid in minutes, in mood, and in the small attentional fragments that never reassemble into a real thought.',
      'We built COSAI because that math is bad. Forty visits to a slot machine should not be the price of staying informed.',
      'The alternative is not a tech-bro detox or a dumbphone. It is a tool that does the visit-the-feed work for you, once, and tells you only what survived a real filter. Your time is the budget. COSAI is the accountant.'
    ]
  },
  {
    slug: 'product-launch-roadmap',
    title: 'What is shipping at launch — and what is not',
    tag: 'Roadmap',
    art: 'f',
    date: 'May 2026',
    readTime: '5 min',
    keywords: ['roadmap', 'product launch', 'COSAI features', 'beta'],
    excerpt: 'A candid look at what COSAI will do on day one, what is coming next quarter, and what we are deliberately leaving out.',
    body: [
      'Day one: daily brief, topic and source onboarding, three tone presets, weather-and-location-aware activity nudges, and a private preference model you can export.',
      'Next quarter: native iOS and Android apps, calendar integration for richer "what to do today" suggestions, a weekly themed deep-dive, and shared briefs for couples and small teams.',
      'Things we are not building: an infinite feed, a follower graph, push notifications you did not ask for, an algorithmic timeline. COSAI is not a place to scroll. It is a place to read once, then close.'
    ]
  },
  {
    slug: 'signal-vs-noise-information-diet',
    title: 'Signal vs. noise: designing a healthier information diet',
    tag: 'Essay',
    art: 'a',
    date: 'May 2026',
    readTime: '9 min',
    keywords: ['signal vs noise', 'information diet', 'media literacy', 'mindful consumption'],
    excerpt: 'Most reading lists are accidental. Here is a framework for designing one on purpose — and how COSAI implements it.',
    body: [
      'Imagine your diet was assembled the way your information feed is: by whichever truck happened to pull up at your door, on a schedule set by a stranger who profits from your indigestion. You would not eat that way. And yet.',
      'The fix is not less information. It is curation that respects your goals: a few primary sources you trust, a slow lane for context you actually need, and a small, deliberate window for surprise.',
      'COSAI implements this as three layers. The core layer is your declared interests. The slow layer is depth — long-form pieces, papers, and primary documents on topics you care about, queued for the times you actually read. The window is serendipity — adjacent fields, dissenting takes, and the occasional human-curated pick.',
      'The trick is balance. Tilt too far toward the core and you build a bubble. Tilt too far toward serendipity and you read random tweets all day. We default to roughly 70/20/10 and let you tune it.'
    ]
  },
  {
    slug: 'ai-chief-of-staff-vs-feed-reader',
    title: 'AI Chief of Staff vs. RSS reader: what is actually different?',
    tag: 'Comparison',
    art: 'b',
    date: 'April 2026',
    readTime: '6 min',
    keywords: ['RSS', 'feed reader', 'AI assistant', 'COSAI vs alternatives'],
    excerpt: 'RSS readers fetch. COSAI decides. Here is the architectural and philosophical difference, in plain terms.',
    body: [
      'RSS readers were a beautiful idea: own your subscriptions, read at your pace. But they did not solve the underlying problem — you still have to read everything to know what is worth reading.',
      'A chief-of-staff AI inverts the relationship. You declare what you care about, and the assistant reads everything for you. The output is not a list of unread items. It is a brief: "here are the three things from today that fit your work, your week, and your stated preferences."',
      'Architecturally, the difference is a ranker, a context engine, and a summarizer sitting between your sources and your eyes. Philosophically, the difference is that the success metric flips — from "items processed" to "minutes saved while staying informed."'
    ]
  },
  {
    slug: 'reduce-doomscrolling-with-ai',
    title: 'How to actually reduce doomscrolling (without quitting the internet)',
    tag: 'How-to',
    art: 'c',
    date: 'March 2026',
    readTime: '5 min',
    keywords: ['doomscrolling', 'digital wellbeing', 'reduce screen time', 'healthy social media'],
    excerpt: 'Willpower is a bad strategy against an algorithm tuned by a thousand engineers. Use a tool that pulls in the opposite direction.',
    body: [
      'Doomscrolling is not a character flaw. It is the predictable output of a system designed to maximize the variable-reward loop. Telling yourself to scroll less is roughly as effective as telling yourself to crave less sugar in a candy store.',
      'The leverage point is removing the loop, not resisting it. That is the practical case for COSAI: you replace twelve daily visits to apps that profit from your scroll with one short brief that does not.',
      'Concrete moves we recommend: (1) move social apps off the home screen and replace them with COSAI; (2) pick a fixed brief time — morning coffee works for most people; (3) leave one app for human connection (DMs, group chats) and prune the rest. Within two weeks the urge dampens.',
      'It is not a detox. It is replacing junk-food intake with a reasonable meal at a regular hour. The AI does the chewing.'
    ]
  },
  {
    slug: 'building-a-personal-ai-that-respects-you',
    title: 'Building a personal AI that respects you',
    tag: 'Engineering',
    art: 'd',
    date: 'February 2026',
    readTime: '10 min',
    keywords: ['personal AI', 'on-device AI', 'AI ethics', 'data minimization'],
    excerpt: 'Notes from the inside on the architecture choices we made so COSAI never had to ask for forgiveness.',
    body: [
      'The default architecture for a personal AI is "send everything to the server, train on aggregate, ship features fast." It is fast. It is also a privacy mortgage you eventually have to pay.',
      'We made three choices early. First, on-device feature extraction for sensitive context (location, calendar text, message snippets). Only abstracted features cross the network. Second, no cross-user training on raw content. Third, an export-and-delete button that actually deletes. These cost us velocity and we think it is worth it.',
      'The trade-off is real: certain features take longer because we cannot just dump everything into a single model. We accepted that because the alternative — being one breach away from a public apology — is not an alternative we want.'
    ]
  },
  {
    slug: 'morning-brief-anatomy',
    title: 'Anatomy of a good morning brief',
    tag: 'Design notes',
    art: 'e',
    date: 'January 2026',
    readTime: '4 min',
    keywords: ['morning brief', 'daily digest', 'product design', 'information design'],
    excerpt: 'What goes in, what stays out, and the decisions behind the five-minute target.',
    body: [
      'A good brief answers three questions in five minutes: what should I know, what should I do, and what is worth a longer read later.',
      'Top of brief: time-and-place context. The weather, today\'s schedule highlight, anything time-sensitive. This grounds the rest.',
      'Middle: the three to five items that actually changed since you last looked, ranked by how much they touch your declared interests and active projects.',
      'Bottom: one suggested action and one optional deep read. The action is the most useful part. It is also the part most "newsletters" never deliver because they cannot read your calendar.',
      'Length is a feature. We cap briefs aggressively and trust that if something needed more, you will tap to expand. Most people do not.'
    ]
  },
  {
    slug: 'why-not-an-infinite-feed',
    title: 'Why COSAI does not have an infinite feed (and never will)',
    tag: 'Manifesto',
    art: 'f',
    date: 'December 2025',
    readTime: '3 min',
    keywords: ['infinite scroll', 'product principles', 'design ethics'],
    excerpt: 'A short, blunt answer to the most common feature request we get.',
    body: [
      'Every week someone asks if we will add a "feed view" so they can scroll through more items. The answer is no, and we want to be clear about why.',
      'Infinite feeds optimize for time-on-app. We optimize for time-saved. Those metrics point in opposite directions. Adding one would corrupt the other.',
      'If you finish your brief and want more, the right next move is not to scroll further. It is to close the app. We mean that literally. The product worked. Go live your day.'
    ]
  }
]
