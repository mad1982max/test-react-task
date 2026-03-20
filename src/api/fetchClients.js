import { clients as mockClients } from "../data/mockClients";

/**
 * Fetches the mock clients data with a simulated delay
 * @param {number} [delay=1000] - Delay in milliseconds before resolving
 * @returns {Promise<import("../data/mockClients").Client[]>} Promise resolving to array of clients
 */
export const apiFetchClients = (delay = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockClients);
        }, delay);
    });
}