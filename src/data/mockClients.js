
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
    },
    {
        id: 9,
        firstName: "James",
        lastName: "Garcia",
        email: "james.garcia@example.com",
        status: "Active",
        balance: 1250.00,
        createdAt: "2025-02-15T10:30:00Z"
    },
    {
        id: 10,
        firstName: "Liam",
        lastName: "Johnson",
        email: "liam.johnson@example.com",
        status: "Inactive",
        balance: 845.30,
        createdAt: "2025-02-16T09:15:00Z"
    },
    {
        id: 11,
        firstName: "Emma",
        lastName: "Lee",
        email: "emma.lee@example.com",
        status: "Pending",
        balance: 125.00,
        createdAt: "2025-02-17T11:40:00Z"
    },
    {
        id: 12,
        firstName: "Noah",
        lastName: "Walker",
        email: "noah.walker@example.com",
        status: "Active",
        balance: 2160.55,
        createdAt: "2025-02-18T08:20:00Z"
    },
    {
        id: 13,
        firstName: "Ava",
        lastName: "Hall",
        email: "ava.hall@example.com",
        status: "Inactive",
        balance: 63.40,
        createdAt: "2025-02-19T12:05:00Z"
    },
    {
        id: 14,
        firstName: "William",
        lastName: "Allen",
        email: "william.allen@example.com",
        status: "Pending",
        balance: 954.10,
        createdAt: "2025-02-20T10:45:00Z"
    },
    {
        id: 15,
        firstName: "Isabella",
        lastName: "Young",
        email: "isabella.young@example.com",
        status: "Active",
        balance: 3300.00,
        createdAt: "2025-02-21T14:10:00Z"
    },
    {
        id: 16,
        firstName: "Lucas",
        lastName: "King",
        email: "lucas.king@example.com",
        status: "Inactive",
        balance: 470.85,
        createdAt: "2025-02-22T16:30:00Z"
    },
    {
        id: 17,
        firstName: "Mia",
        lastName: "Wright",
        email: "mia.wright@example.com",
        status: "Pending",
        balance: 0,
        createdAt: "2025-02-23T09:55:00Z"
    },
    {
        id: 18,
        firstName: "Ethan",
        lastName: "Scott",
        email: "ethan.scott@example.com",
        status: "Active",
        balance: 780.25,
        createdAt: "2025-02-24T13:35:00Z"
    },
    {
        id: 19,
        firstName: "Charlotte",
        lastName: "Green",
        email: "charlotte.green@example.com",
        status: "Inactive",
        balance: 95.15,
        createdAt: "2025-02-25T10:05:00Z"
    },
    {
        id: 20,
        firstName: "Mason",
        lastName: "Baker",
        email: "mason.baker@example.com",
        status: "Pending",
        balance: 1450.00,
        createdAt: "2025-02-26T11:25:00Z"
    },
    {
        id: 21,
        firstName: "Amelia",
        lastName: "Adams",
        email: "amelia.adams@example.com",
        status: "Active",
        balance: 2640.77,
        createdAt: "2025-02-27T15:40:00Z"
    },
    {
        id: 22,
        firstName: "Logan",
        lastName: "Nelson",
        email: "logan.nelson@example.com",
        status: "Inactive",
        balance: 305.50,
        createdAt: "2025-02-28T08:50:00Z"
    },
    {
        id: 23,
        firstName: "Harper",
        lastName: "Carter",
        email: "harper.carter@example.com",
        status: "Pending",
        balance: 512.10,
        createdAt: "2025-03-01T17:15:00Z"
    },
    {
        id: 24,
        firstName: "Elijah",
        lastName: "Mitchell",
        email: "elijah.mitchell@example.com",
        status: "Active",
        balance: 1985.00,
        createdAt: "2025-03-02T12:20:00Z"
    },
    {
        id: 25,
        firstName: "Evelyn",
        lastName: "Perez",
        email: "evelyn.perez@example.com",
        status: "Inactive",
        balance: 42.90,
        createdAt: "2025-03-03T09:35:00Z"
    },
    {
        id: 26,
        firstName: "Benjamin",
        lastName: "Roberts",
        email: "benjamin.roberts@example.com",
        status: "Pending",
        balance: 670.30,
        createdAt: "2025-03-04T10:50:00Z"
    },
    {
        id: 27,
        firstName: "Sofia",
        lastName: "Turner",
        email: "sofia.turner@example.com",
        status: "Active",
        balance: 2890.66,
        createdAt: "2025-03-05T13:45:00Z"
    },
    {
        id: 28,
        firstName: "Jacob",
        lastName: "Phillips",
        email: "jacob.phillips@example.com",
        status: "Inactive",
        balance: 125.70,
        createdAt: "2025-03-06T14:30:00Z"
    },
    {
        id: 29,
        firstName: "Avery",
        lastName: "Campbell",
        email: "avery.campbell@example.com",
        status: "Pending",
        balance: 980.00,
        createdAt: "2025-03-07T08:05:00Z"
    },
    {
        id: 30,
        firstName: "Henry",
        lastName: "Parker",
        email: "henry.parker@example.com",
        status: "Active",
        balance: 1745.25,
        createdAt: "2025-03-08T16:10:00Z"
    },
    {
        id: 31,
        firstName: "Ella",
        lastName: "Evans",
        email: "ella.evans@example.com",
        status: "Inactive",
        balance: 10.00,
        createdAt: "2025-03-09T12:00:00Z"
    },
    {
        id: 32,
        firstName: "Alexander",
        lastName: "Edwards",
        email: "alexander.edwards@example.com",
        status: "Pending",
        balance: 450.42,
        createdAt: "2025-03-10T11:55:00Z"
    },
    {
        id: 33,
        firstName: "Scarlett",
        lastName: "Collins",
        email: "scarlett.collins@example.com",
        status: "Active",
        balance: 3120.12,
        createdAt: "2025-03-11T15:35:00Z"
    },
    {
        id: 34,
        firstName: "Daniel",
        lastName: "Stewart",
        email: "daniel.stewart@example.com",
        status: "Inactive",
        balance: 220.00,
        createdAt: "2025-03-12T09:20:00Z"
    },
    {
        id: 35,
        firstName: "Aria",
        lastName: "Sanchez",
        email: "aria.sanchez@example.com",
        status: "Pending",
        balance: 760.88,
        createdAt: "2025-03-13T10:40:00Z"
    },
    {
        id: 36,
        firstName: "Jack",
        lastName: "Morris",
        email: "jack.morris@example.com",
        status: "Active",
        balance: 1430.30,
        createdAt: "2025-03-14T13:25:00Z"
    },
    {
        id: 37,
        firstName: "Chloe",
        lastName: "Rogers",
        email: "chloe.rogers@example.com",
        status: "Inactive",
        balance: 99.99,
        createdAt: "2025-03-15T14:45:00Z"
    },
    {
        id: 38,
        firstName: "Samuel",
        lastName: "Reed",
        email: "samuel.reed@example.com",
        status: "Pending",
        balance: 2500.00,
        createdAt: "2025-03-16T08:15:00Z"
    },
    {
        id: 39,
        firstName: "Lily",
        lastName: "Cook",
        email: "lily.cook@example.com",
        status: "Active",
        balance: 1840.17,
        createdAt: "2025-03-17T12:10:00Z"
    },
    {
        id: 40,
        firstName: "Matthew",
        lastName: "Morgan",
        email: "matthew.morgan@example.com",
        status: "Inactive",
        balance: 55.00,
        createdAt: "2025-03-18T16:20:00Z"
    },
    {
        id: 41,
        firstName: "Grace",
        lastName: "Bell",
        email: "grace.bell@example.com",
        status: "Pending",
        balance: 875.60,
        createdAt: "2025-03-19T10:05:00Z"
    },
    {
        id: 42,
        firstName: "Joseph",
        lastName: "Murphy",
        email: "joseph.murphy@example.com",
        status: "Active",
        balance: 2099.90,
        createdAt: "2025-03-20T11:50:00Z"
    },
    {
        id: 43,
        firstName: "Hannah",
        lastName: "Bailey",
        email: "hannah.bailey@example.com",
        status: "Inactive",
        balance: 130.25,
        createdAt: "2025-03-21T09:30:00Z"
    },
    {
        id: 44,
        firstName: "David",
        lastName: "Rivera",
        email: "david.rivera@example.com",
        status: "Pending",
        balance: 1180.00,
        createdAt: "2025-03-22T14:55:00Z"
    },
    {
        id: 45,
        firstName: "Zoe",
        lastName: "Cooper",
        email: "zoe.cooper@example.com",
        status: "Active",
        balance: 3550.45,
        createdAt: "2025-03-23T13:00:00Z"
    },
    {
        id: 46,
        firstName: "Owen",
        lastName: "Richardson",
        email: "owen.richardson@example.com",
        status: "Inactive",
        balance: 87.75,
        createdAt: "2025-03-24T08:40:00Z"
    },
    {
        id: 47,
        firstName: "Nora",
        lastName: "Cox",
        email: "nora.cox@example.com",
        status: "Pending",
        balance: 620.00,
        createdAt: "2025-03-25T10:15:00Z"
    },
    {
        id: 48,
        firstName: "Gabriel",
        lastName: "Howard",
        email: "gabriel.howard@example.com",
        status: "Active",
        balance: 2750.80,
        createdAt: "2025-03-26T12:45:00Z"
    },
    {
        id: 49,
        firstName: "Penelope",
        lastName: "Ward",
        email: "penelope.ward@example.com",
        status: "Inactive",
        balance: 49.95,
        createdAt: "2025-03-27T15:10:00Z"
    },
    {
        id: 50,
        firstName: "Julian",
        lastName: "Torres",
        email: "julian.torres@example.com",
        status: "Pending",
        balance: 910.10,
        createdAt: "2025-03-28T11:35:00Z"
    },
    {
        id: 51,
        firstName: "Riley",
        lastName: "Peterson",
        email: "riley.peterson@example.com",
        status: "Active",
        balance: 1680.00,
        createdAt: "2025-03-29T09:05:00Z"
    },
    {
        id: 52,
        firstName: "Sebastian",
        lastName: "Gray",
        email: "sebastian.gray@example.com",
        status: "Inactive",
        balance: 199.99,
        createdAt: "2025-03-30T16:25:00Z"
    },
    {
        id: 53,
        firstName: "Layla",
        lastName: "Ramirez",
        email: "layla.ramirez@example.com",
        status: "Pending",
        balance: 740.20,
        createdAt: "2025-03-31T10:30:00Z"
    },
    {
        id: 54,
        firstName: "Carter",
        lastName: "James",
        email: "carter.james@example.com",
        status: "Active",
        balance: 2425.75,
        createdAt: "2025-04-01T12:20:00Z"
    },
    {
        id: 55,
        firstName: "Stella",
        lastName: "Watson",
        email: "stella.watson@example.com",
        status: "Inactive",
        balance: 68.35,
        createdAt: "2025-04-02T14:00:00Z"
    }
];
