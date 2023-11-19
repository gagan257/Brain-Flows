# AI Notes App

## Setup

Starting with creating nextJS app with some packages that we will use in the project.

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
npm install openai ai prisma @prisma/client @pinecone-database/pinecone @clerk/nextjs @clerk/themes next-themes prettier eslint-config-prettier prettier-plugin-tailwindcss nextjs-toploader
```

### About Dependencies

**→ openai** helps to intract with ChatGPT with JS code.<br/>
**→ ai** Provides utility/chat functions for Chat BOT.<br/>
**→ prisma** allows to work with Database.<br/>
**→ pinecone** for Vector Embeddings for long term memory of AI.<br/>
**→ next-themes** for dark themes on site.<br/>
**→ clerk** for authentication.<br/>
**→ prettier** code formatter tool.<br/>

### shadcn-ui

Following is the shadcn UI setting in the project

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

These are the components that we are going to use in this project

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

### Prisma

In order to set up Prisma (after installing all the initial packages above)

```
npx prisma init
```

This creates `.env` & `prisma/schema.prisma` in which we use our `DATABASE_KEY` & `Schema Defination`

After setting all the Structure of our Database,

```
npx prisma generate
```

This will set up the `Prisma client`

**NOTE: Make sure that you are using 64 bit version of nodeJS**
