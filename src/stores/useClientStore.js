import { create } from 'zustand';

/**
 * @typedef {Object} ClientStoreState
 * @property {import("../data/mockClients").Client[]} clients - Array of all clients
 * @property {import("../data/mockClients").Client|null} selected - Currently selected client
 * @property {{search: string, status: string}} filters - Active filters for clients
 * @property {number[]} selectedIds - Array of selected client IDs
 * @property {(clients: import("../data/mockClients").Client[]) => void} setClients - Set clients array
 * @property {(client: import("../data/mockClients").Client|null) => void} setSelected - Set selected client
 * @property {(key: string, value: string) => void} setFilter - Update a filter value
 * @property {(id: number) => void} toggleId - Toggle client ID in selection
 * @property {() => void} clearSelection - Clear all selections
 * @property {() => import("../data/mockClients").Client[]} getFiltered - Get filtered clients based on current filters
 */

/**
 * Zustand store for managing client data and UI state
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<ClientStoreState>>}
 */
export const useClientStore = create((set, get) => ({
    clients: [],
    selected: null,
    filters: { search: '', status: 'all' },
    selectedIds: [],

    setClients: (clients) => set({ clients }),

    setSelected: (client) => set({ selected: client }),

    setFilter: (key, value) =>
        set((state) => ({
            filters: { ...state.filters, [key]: value },
        })),

    toggleId: (id) => {
        const { selectedIds } = get();
        const index = selectedIds.indexOf(id);
        if (index === -1) {
            set({ selectedIds: [...selectedIds, id] });
        } else {
            set({ selectedIds: selectedIds.filter((i) => i !== id) });
        }
    },

    clearSelection: () => set({ selected: null, selectedIds: [] }),

    getFiltered: () => {
        const { clients, filters } = get();

        return clients.filter((c) => {
            const matchSearch =
                c.firstName.toLowerCase().includes(filters.search.toLowerCase())
                || c.email.toLowerCase().includes(filters.search.toLowerCase());
            const matchStatus = filters.status === 'all' || c.status === filters.status;
            return matchSearch && matchStatus;
        });
    },
}));
