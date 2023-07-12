This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Assesment useful information
This app has been made for technical assesment purposes. Is only a simple app trying to show some functionalities made with React.
The app has been made with Next.js 13 and React Redux Toolkit as a pseudo Database / Backend to manage some data.
Also it uses third libraries and frameworks as:
· Chakra UI
· Prettier and Husky
· Sass preprocessor

The requested funtionalities are:
· Registry screen
· Login screen
· Wallet screen
  · Money transfers from user A to user B
  · Deposit money on current account

As an optional goal, the app has been made with TypeScript

Going a bit deeper, we have inside form validations, some common utilities like date formatter, ID generator, font icons, screen loader...

The structure of the application can be improved, but to not invest too much time more we can say that is enough stable. Of course we can go further and apply clean architechture and make more layers if needed. For example for the services and interceptors.

I hope this solution is suitable according to the agreed requirements.

May be in the future we can improve further.
Some ideas are:
· Multi user
· Unit testint
· External component package
· Use graphs
· Use date libraries (datefns, momentjs,...)
· Better TypeScript typing
· Better Form validations
· Fake database or sample data
· Error Route control
· Redux action types (no only save data, loading, error, etc...)
· Password reminder
· Send Emails
· Responsive design
· ...

## How to login
We can start the app running: <npm run dev>
Is necessary to create a new user account and then we will can log in.
We can navigate to Admin/Wallet page where we can see a list of transactions, account balance and the transaction actions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
