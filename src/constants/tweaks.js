export const ROWS_PER_PAGE = 20;

export const ROWS_IN_SKELETON = 8;

/** @typedef {"Active"|"Pending"|"Inactive"} ClientStatus */
/** @typedef {"success"|"warning"|"default"} ChipColor */

/**
 * Maps client status to MUI chip color.
 * @type {Record<ClientStatus, ChipColor>}
 */
export const chipStatusColors = {
    Active: "success",
    Pending: "warning",
    Inactive: "default",
};

/** @typedef {"Completed"|"Pending"} TransactionStatus */

/**
 * Maps transaction status to MUI chip color.
 * @type {Record<TransactionStatus, ChipColor>}
 */
export const transactionStatusColors = {
    Completed: "success",
    Pending: "warning",
};

/** @typedef {"fullname"|"email"|"status"|"balance"|"createdAt"|"actions"} ClientTableHeaderId */

/**
 * @typedef {Object} ClientTableHeader
 * @property {ClientTableHeaderId} id - Header key.
 * @property {string} label - Display label.
 */

/** @type {ClientTableHeader[]} */
export const clientTableHeaders = [
    { id: "fullname", label: "Full Name" },
    { id: "email", label: "Email" },
    { id: "status", label: "Status" },
    { id: "balance", label: "Balance" },
    { id: "createdAt", label: "Created At" },
    { id: "actions", label: "Actions" },
];

export const transactionTableHeaders = [
    { id: "date", label: "Date" },
    { id: "type", label: "Type" },
    { id: "amount", label: "Amount" },
    { id: "status", label: "Status" },
];

/**
 * Shared table wrapper styles.
 * @type {{
 *   width: string,
 *   maxWidth: number,
 *   mx: string,
 *   overflowX: string,
 *   overflowY: string,
 *   display: string
 * }}
 */
export const tableWrapperStyles = {
    width: "100%",
    maxWidth: 1200,
    mx: "auto",
    overflowX: "auto",
    overflowY: "hidden",
    display: "block",
};

/** @type {string} */
export const locale = "en-US";

/** @type {Intl.NumberFormatOptions} */
export const currencyOptions = {
    style: "currency",
    currency: "USD",
};