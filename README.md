# Gatsby Typescript Starter

A simple Gatsby + Typescript project starter

## Table of Contents

1. [Technologies](#technologies)
2. [Installation](#installation)
3. [Development](#development)
4. [Style Guide](#style-guide)

## Technologies

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)
- [Storybook](https://storybook.js.org/)

## Installation

```
$ git clone git@github.com:Cobliteam/midas.git
$ cd midas
$ yarn
```

## Development

### Building and Running

To build and run the app, run one of the following codes:

```
$ yarn develop
```

or

```
$ yarn build
$ yarn serve
```

the first has **hot reloading**, and the second is the compiled version (making it better for **performance testing**)

### Storybook

To open the project's [storybook](https://storybook.js.org/), simply run

```
yarn storybook
```

## Style Guide

### Media Queries

`@media(min-width: 360px)`

`@media(min-width: 411px)`

`@media(min-width: 600px)`

`@media(min-width: 720px)`

`@media(min-width: 768px)`

`@media(min-width: 800px)`

`@media(min-width: 960px)`

`@media(min-width: 1024px)`

`@media(min-width: 1200px)`

### File Structure

```
root/
 ↳ deploy/
 ↳ src/
    ↳ pages/
    ↳ components/
       ↳ ExampleComponent/
          ↳ __tests__/
          ↳ snapshots/
          ↳ ExampleComponent.tsx
          ↳ styles.ts
          ↳ index.ts
    ↳ layout/
    ↳ util/
    ↳ assets/
       ↳ images/
       ↳ icons/

 ↳ package.json
 ↳ node_modules/
   ...
```
