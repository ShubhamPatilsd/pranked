# pranked

![You just got pranked text](https://user-images.githubusercontent.com/55328098/164569673-446869c9-8a73-4d1c-8f81-ce6d624af226.png)


[![Get it on npm](https://img.shields.io/badge/Get%20it%20on%20NPM-white?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/pranked)


With this simple Node.js command line tool, prank your colleagues by deleting all the files in the current working directory. Insert in `package.json` scripts for maximum prankster abilities!

⭐ Stars are appreciated!

## 🚨🚨Warning before we start 🚨🚨

While the tool does push your current code to your remote repo:

```bash
git add .
git commit -m "I just got pranked!"
git push
```

It **WILL DELETE EVERYTHING REGARDLESS IF YOU HAVE A VCS SYSTEM OR NOT**. Version Control Systems other than `git` will not automatically push your code to the remote repo, but they will most definitely allow you to restore the deleted files. This is why I HIGHLY emphasize setting up a `git` repository for your project. It doesn't even have to have a remote, but it is very vital.

**DISCLAIMER: I am NOT liable for any damage for this tool. Use it at your own risk, and please don't blame me if things go south. Use wisely.**

As Peter Parker was once told,

> With great power comes great responsibility.
>
> \- Uncle Ben

## Getting started

First, let's install the actual thing

If you use `npm`, run:

```bash
npm install pranked
```

If you use `yarn`, run:

```bash
yarn add pranked
```

Next, add it to the `scripts` portion of your `package.json`

Here is the `scripts` area from a NextJS `package.json` with _only_ the `dev` script shown:

```json
"scripts": {
    "dev": "next dev",
}
```

Here, I will edit the `dev` field. This is what it will look like now:

```json
"scripts": {
    "dev": "pranked && next dev",
}
```

You can always just remove the `next dev` command and make it only `"pranked"`
