# AI Notes App

## Setup

```
npx create-next-app@latest
```

```
✅ TypeScript
✅ ESLint
✅ Tailwind CSS
✅ src directory
✅ App Router
❌ Customise default import alias
```

```
npm install openai ai prisma @prisma/client @pinecone-database/pinecone @clerk/nextjs @clerk/themes next-themes prettier eslint-config-prettier prettier-plugin-tailwindcss
```

### Dependencies

**→ openai** helps to intract with ChatGPT with JS code.
**→ ai** Provides utility/chat functions for Chat BOT.
**→ prisma** allows to work with Database.
**→ pinecone** for Vector Embeddings for long term memory of AI.
**→ next-themes** for dark themes on site.
**→ clerk** for authentication.
**→ prettier** code formatter tool.

### shadcn-ui

```
npx shadcn-ui@latest init
```

```
Would you like to use TypeScript (recommended)? ... ✅yes
Which style would you like to use? » ✅Default
Which color would you like to use as base color? » ✅Slate
Where is your global CSS file? ... ✅src/app/globals.css
Would you like to use CSS variables for colors? ... ✅yes
Where is your tailwind.config.js located? ... ✅tailwind.config.js
Configure the import alias for components: ... ✅@/components
Configure the import alias for utils: ... ✅@/lib/utils
Are you using React Server Components? ... ✅yes
Write configuration to components.json. Proceed? ... ✅yes
```

### shadcn Components

```
npx shadcn-ui@latest add button
```

```
npx shadcn-ui@latest add card
```

```
npx shadcn-ui@latest add dialog
```

```
npx shadcn-ui@latest add form
```

```
npx shadcn-ui@latest add input
```

```
npx shadcn-ui@latest add textarea
```
