import { getClientById } from "./getClientById";

/**
 * Fake API to create a transaction and update client balance
 * @param {{accountId:string, transactionType:number, amount:number}} payload
 * @param {number} [delay=1000]
 * @returns {Promise<import("../data/mockClients").Client>} Updated client
 */
export const fakeApiCreate = async (payload, delay = 1000) => {
    const client = await getClientById(payload.accountId, delay);
    if (!client) {
        throw new Error("Client not found");
    }

    const TRANSACTION_TYPES = {
        1: "in", 2: "out", 3: "in", 4: "out", 5: "in", 6: "out",
    };
    const direction = TRANSACTION_TYPES[payload.transactionType];

    const newBalance =
        direction === "in"
            ? Number(client.balance) + payload.amount
            : Number(client.balance) - payload.amount;

    const updatedClient = { ...client, balance: String(newBalance) };

    return updatedClient;
};

