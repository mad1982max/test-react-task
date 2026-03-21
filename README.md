# CRM Frontend — Technical Assessment  

## Tech Stack
- React: ^19.2.4
- React DOM: ^19.2.4
- MUI Material: ^7.3.9
- Zustand: ^5.0.12
- React Router DOM: ^6.30.3
- Vite: ^8.0.1
- NO TYPESCRIPT

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
| useClientStore.js       |1 | setFilter      | direct mutation, it prevents Zustand from creating new state, as result React didn't re-render.|
| useClientStore.js       |2 | toggleId       | wrong base for filtering (```i```(index) instead of ```id```.)|
| useClientStore.js       |3 | clearSelection | ```selected``` state takes ```null``` or  ```client```. For clear we should pass ```null``` (not empty array) and ```selectedIds: []```.|
| ||||
|CreateTransactionDialog.jsx|1|activeAccount|```selectedAccountId``` is a string. ```acc.id``` is a number. For comparing we use ```===```. So they will never equal to each other.|
|CreateTransactionDialog.jsx|2|useEffect| ```accounts``` was missing in dependency array in useEffect.|
|CreateTransactionDialog.jsx|3|handleSubmit| ```formData.amount``` is a string; comparing it to a number caused incorrect validation, and parsing it later produced ```NaN```.|
|CreateTransactionDialog.jsx|4|handleSubmit| ```onClose``` was not added after ```onSuccess```.|
-

# Additional info

### What was done


__Time__ ~10 hours
---

__Clients Table__ 
-  
1) Search bar — real-time filter by name or email, wired to useClientStore - **DONE**  
2)	Status dropdown — filter by Active / Inactive / Pending / All, wired to useClientStore - **DONE**  
3)	Pagination — 20 rows per page - **DONE**  
4)	Row checkboxes — selection state tracked in useClientStore.selectedIds - **DONE**  
5)	Bulk button — visible only when rows are selected; opens CreateTransactionDialog - **DONE**  
6)	Skeleton loading state (simulate with setTimeout 1000ms) - **DONE**  

__Client Detail Page__  
-
1) Display: name, email, status, balance in a MUI Card - **DONE**  
2)	Two tabs: "Info" and "Transactions" - **DONE**  
3)	Transactions tab: table with columns — date, type, amount, status - **DONE**  
4)	Back button → /clients - **DONE**  

__CreateTransactionDialog Integration__
-
    `clarification` transaction works if one client checked, if multiselection - it shows an error in dialog   
1)	Bulk action button opens the Dialog with the selected accounts - **DONE**   
2)	On success: clear selectedIds, close dialog, show MUI Snackbar confirmation - **DONE**  
3)	On error: show error inside Dialog without closing it - **DONE**  
   
__Folder overview__  
-
- **api/** — functions like fetching clients, fetching transactions, and creating transactions (dummy data).
- **components/** — UI parts such as dialogs, forms, and view components.
- **constants/** — shared constant values, messages, and tweak settings.
- **data/** — mock datasets and typedef sources used across the app.
- **hooks/** — custom hooks such as `useFetchClientById` and `useFetchClientTransaction`.
- **pages/** - application pages.
- **routes/** - aplication routes.
- **stores/** — Zustand-based state containers such as `useClientStore`.
- **assets/** - icons and images

