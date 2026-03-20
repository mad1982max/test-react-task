import { create } from 'zustand';

const useClientStore = create((set, get) => ({
    clients: [],
    selected: null,
    filters: { search: '', status: 'all' },
    selectedIds: [],

    setClients: (clients) => set({ clients }),

    setSelected: (client) => set({ selected: client }),

    setFilter: (key, value) => set((state) => {
        state.filters[key] = value;
        return { filters: { ...state.filters, [key]: value } };
    }),

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

export default useClientStore;
