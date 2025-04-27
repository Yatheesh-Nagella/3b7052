
# Avantos - Journey Builder React Coding Challenge

This is my submission for the Avantos Jr Frontend Engineer Coding Challenge

## Project Overview
- Rendered a directed acyclic graph (DAG) of forms based on [API](https://api.avantos-dev.io/docs#/operations/action-blueprint-graph-get) data.
- Build a Prefill editor panel that allows mapping fields between forms.
- implemented a modal UI for selecting prefill sources.
- Designed code to have reusable and composable React components

### File Structuring

Project Structure:

```
3b7052/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   └── GraphService.ts
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── GraphView/
│   │   │   ├── CustomNode.tsx
│   │   │   └── GraphView.tsx
│   │   └── PrefillEditor/
│   │       ├── PrefillEditor.tsx
│   │       └── PrefillModal.tsx
│   ├── contexts/
│   │   └── SelectedNodeContext.tsx
│   ├── styles/
│   ├── types/
│   │   └── prefill.ts
│   ├── utils/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.node.json
└── vite.config.ts
```
## Installation

Tech Stack
- React + TypeScript
- React Flow (for DAG rendering)
- Vite 
- CSS

### How to run the project locally?

```bash
  git clone https://github.com/Yatheesh-Nagella/3b7052.git
  cd 3b7052
  npm install 
  npm run dev
```
    
## How do I Extend with new data sources?

The system is designed to be easily extensible with new data sources for prefill mappings.
- The prefillModal component dynamically displays available sources based on a simple 'fakeSources' array.
- To integrate new data sources (eg. FinancialAccountProperties, additional APIs):
  - Simply add new entries to the sources list inside prefillModal.
  - Alternatively, update the prefillModal to fetch sources dynamically from an API endpoint if available.
- The mapping between form fields remain consistent, so minimal changes are needed to support new sources.

By designing the prefillModal around an extensible source list, the system can incorporate more complex or real-time prefill sources in the future without changing the core GraphView or PreFillEditor logic.
## What patterns should I be paying attention to?
- **Seperation of Concerns**:
  - GraphView, PreFillEditor are split into seperate components, each handling a single responsibility.
- **Context API usage**:
  - SelectedNodeContext provides a simple and scalable way to manage the selected node state across the app without prop drilling.
- **CustomNode**:
  - React Flow's `nodeTypes` feature is used to create cleanly styled custom nodes, making future visual changes easy.
- **Error Handling**:
  - The graph rendering gracefully handles missing data to prevent runtime crashes.


## License

[MIT](https://choosealicense.com/licenses/mit/)

