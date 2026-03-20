# CRM Frontend — Technical Assessment  
React 19 + MUI v7 + Zustand + React Router v6 + Vite

## 🚀 Installation

```bash
npm install
npm run dev
```

App runs at:
http://localhost:5173
   

## 🐞 Bugs report

| File                    |N | title          | root cause|
| ----------------------- |--|:--------------:|-----------|
| useClientStore.js       |1 | setFilter      | mutation, it prevents React from detecting changes and re-rendering.|
| useClientStore.js       |2 | toggleId       | wrong base for filtering (```index``` instead of ```id```.)|
| useClientStore.js       |3 | clearSelection | ```selected``` state takes ```null``` or  ```client```. For clear we should pass ```null``` (not empty array) and ```selectedIds: []```.|
| ||||