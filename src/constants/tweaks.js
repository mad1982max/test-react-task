export const ROWS_PER_PAGE = 20;

export const chipStatusColors = {
    Active: "success",
    Pending: "warning",
    Inactive: "default",
};

export const clientTableHeaders = [
    { id: "fullname", label: "Full Name" },
    { id: "email", label: "Email" },
    { id: "status", label: "Status" },
    { id: "balance", label: "Balance" },
    { id: "createdAt", label: "Created At" },
    { id: "actions", label: "Actions" },
];

export const tableWrapperStyles = {
    width: "100%",
    maxWidth: 1200,
    mx: "auto",
    overflowX: "auto",
    overflowY: "hidden",
    display: "block",
}