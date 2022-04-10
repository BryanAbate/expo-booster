# Expo Booster

## Propulse your Expo (React Native) application with a minimal state of the art template.

A minimal template to propulse your Expo application with a state of the art tech stack, lint and format rules:

- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## Goal

The goal is to provide a minimal template for Expo applications in TypeScript. The template is meant to be as minimal as possible, just enough to kick start your application without having to write boilerplate code.

By using a very small set of features, this template aims to be easy to update so that latest packages are always in use. This comes with some benefits:

- Easily maintanable
- Easily extendable
- Suits most needs

## What is missing

### Styling

This repo does not give any guideline for styling for now.

## FAQ

### Why are there out of the box linting errors?

Errors lie in the default Expo TypeScript code. It mostly sits there to suggest a folder structure and verify the code can build. This code is supposed to be thrown away so no time were spent to fix longer issues. In the future we might want to offer a custom base application instead of Expo's default.

All files that are essential pass lint check.
