import { clients } from "../data/mockClients";

/**
 * Simulates fetching a client by ID.
 * @param {string} id - Client ID.
 * @param {number} [delay=3000] - Artificial API delay in milliseconds.
 * @returns {Promise<import("../data/mockClients").Client>} Promise that resolves with the client.
 */

export const getClientById = (id, delay = 3000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const client = clients.find((client) => client.id === id);
            if (client) {
                resolve(client);
            } else {
                reject(new Error("Client not found"));
            }
        }, delay);
    });
};
