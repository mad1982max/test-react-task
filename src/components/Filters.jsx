import { TextField, Select, MenuItem, Stack } from "@mui/material";

const filterStatuses = ["all", "Active", "Inactive", "Pending"];

/**
 * @typedef {Object} FiltersProps
 * @property {{search: string, status: string}} filters - Current filter values
 * @property {(key: string, value: string) => void} setFilter - Store setter for filters
 */

/**
 * Search and status controls used on clients page.
 * @param {FiltersProps} props - Component props
 * @returns {import('react').ReactElement} Rendered filters controls
 */
export const Filters = ({ filters, setFilter }) => {
    return (
        <Stack direction="row" spacing={2} m={2} gap={2}>
            <TextField
                label="Search"
                value={filters.search}
                onChange={(e) => setFilter("search", e.target.value)}
            />

            <Select
                value={filters.status}
                onChange={(e) => setFilter("status", e.target.value)}
            >
                {filterStatuses.map((status) => (
                    <MenuItem key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </MenuItem>
                ))}
            </Select>
        </Stack>
    );
};
