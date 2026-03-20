
/**
 * @typedef {Object} Client
 * @property {number} id - Unique identifier for the client
 * @property {string} firstName - Client's first name
 * @property {string} lastName - Client's last name
 * @property {string} email - Client's email address
 * @property {string} status - Client status ("Active", "Inactive", or "Pending")
 * @property {number} balance - Client's account balance
 * @property {string} createdAt - ISO 8601 timestamp when client was created
 */

/**
 * Array of mock client data
 * @type {Client[]}
 */
export const clients = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        status: "Active",
        balance: 1250.75,
        createdAt: "2024-12-01T10:15:00Z"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        status: "Inactive",
        balance: 540.00,
        createdAt: "2024-11-20T08:30:00Z"
    },
    {
        id: 3,
        firstName: "Michael",
        lastName: "Brown",
        email: "michael.brown@example.com",
        status: "Pending",
        balance: 0,
        createdAt: "2025-01-05T14:00:00Z"
    },
    {
        id: 4,
        firstName: "Emily",
        lastName: "Wilson",
        email: "emily.wilson@example.com",
        status: "Active",
        balance: 980.50,
        createdAt: "2025-02-10T09:45:00Z"
    },
    {
        id: 5,
        firstName: "David",
        lastName: "Taylor",
        email: "david.taylor@example.com",
        status: "Active",
        balance: 310.20,
        createdAt: "2024-10-15T12:10:00Z"
    },
    {
        id: 6,
        firstName: "Sophia",
        lastName: "Anderson",
        email: "sophia.anderson@example.com",
        status: "Pending",
        balance: 1500.00,
        createdAt: "2025-02-01T16:20:00Z"
    },
    {
        id: 7,
        firstName: "Daniel",
        lastName: "Clark",
        email: "daniel.clark@example.com",
        status: "Inactive",
        balance: 75.99,
        createdAt: "2024-09-30T11:00:00Z"
    },
    {
        id: 8,
        firstName: "Olivia",
        lastName: "Martinez",
        email: "olivia.martinez@example.com",
        status: "Active",
        balance: 2200.00,
        createdAt: "2025-01-25T13:50:00Z"
    }
];
