/**
 * Fake API function to create a transaction
 * @param {Object} data - Transaction data
 * @returns {Promise<void>}
 */
export const fakeApiCreate = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 500);
    });
};