# Saylo Feedback Widget

Saylo Feedback Widget is a React library for embedding a customizable feedback widget into your website or application. It allows users to provide feedback, report issues, or suggest ideas effortlessly. Built with React, the widget integrates seamlessly into your frontend application.

---

## Features

- **Customizable UI:** Adapt the widget's look and feel to match your brand.
- **Multiple Feedback Types:** Supports "Issue", "Idea", and "Other" feedback categories.
- **File Attachments:** Users can attach files to their feedback.
- **Client-Side Rendering:** Designed to work seamlessly with React frameworks like Vite and Next.js.
- **API Integration:** Fetch widget configuration and submit feedback via API.

---

## Installation

### Using npm:

```bash
npm install @saylo/react
```

### Using pnpm:

```bash
pnpm add @saylo/react
```

---

## Usage

To use the Saylo Feedback Widget in your application, follow these steps:

### 1. Import and Render the Component

Ensure your file starts with the `"use client"` directive if you're using Next.js.

```tsx
"use client";

import SayloFeedback from "@saylo/react";

export default function App() {
  return (
      <SayloFeedback apiKey="your-api-key-here" />
  );
}
```

### 2. Provide Your API Key

Replace `"your-api-key-here"` with your actual API key obtained from [Saylo.io](https://www.saylo.io).

---

## Widget Trigger Customization

If you're using our Floating Button, no additional elements are required. 

For a more customized approach, add the `data-saylo-widget-trigger` attribute to any HTML element that should trigger the widget when clicked:

```html
<button data-saylo-widget-trigger>
  Give Feedback
</button>
```

---

## Props

### `SayloFeedback`

| Prop     | Type   | Required | Description                                                                 |
|----------|--------|----------|-----------------------------------------------------------------------------|
| `apiKey` | string | Yes      | Your unique API key for fetching widget configuration and submitting data. |

---

## Customization

The widget can be customized via the Saylo API. The following options can be configured dynamically:

| Property          | Description                                      |
|-------------------|--------------------------------------------------|
| `button_position` | Position of the widget button (e.g., `bottom-left`, `bottom-right`). |
| `shape`           | Shape of the button (`rounded` or `square`).     |
| `theme`           | Theme of the widget (`light` or `dark`).         |

Customization is managed in your Saylo dashboard, and changes are automatically fetched via the API.

---


