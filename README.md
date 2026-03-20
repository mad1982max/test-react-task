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
|CreateTransactionDialog.jsx|1|activeAccount|```selectedAccountId``` is a string. ```acc.id``` is a number. For comparing we use ```===```. So they will never equal to each other.|
|CreateTransactionDialog.jsx|2|useEffect| ```accounts``` was missing in dependency array in useEffect.|
|CreateTransactionDialog.jsx|3|handleSubmit| ```formData.amount``` is a string and we are trying to compare it with ```0``` (number).|
|CreateTransactionDialog.jsx|4|handleSubmit| ```onClose``` was not added after ```onSuccess```.|