# `react-accordion` component

This is an **Accordion** component, very similar to the _shadcn_ implementation

**⚠️ It comes with no styling at all. You do the styling as you want. The only style is the `overflow: hidden` set to
the `AccordionContent` which is important.**

## Installing

```sh
pnpm add @everest-ui/react-accordion
npm install @everest-ui/react-accordion
yarn add @everest-ui/react-accordion
```

## Components

- `Accordion` - This is the main provider to wrap all `AccordionItem`s. Accepts `type` prop which equals either
  `multiple` or `single`
- `AccordionItem` - This is where you put your `AccordionTrigger` and `AccordionContent`. Accepts `value` prop to give
  accordions a unique id
- `AccordionTrigger` - Triggers the accordion
- `AccordionContent` - The content to show and hide

## Usage

```tsx
// import
import {
    Accordion,
    AccordionItem, 
    AccordionTrigger, 
    AccordionContent
} from "@everest-ui/react-accordion";

// use
<Accordion type="multiple">
    <AccordionItem>
        <AccordionTrigger>Is it accessible ?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
    <AccordionItem>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
    </AccordionItem>
    <AccordionItem>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
    </AccordionItem>
</Accordion>
```
