import React, { useState, useEffect } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField, FormControl, InputLabel, Select,
    MenuItem, Alert, CircularProgress
} from '@mui/material';
import { fakeApiCreate } from '../api/setTransaction';
import { useClientStore } from '../stores/useClientStore';


/**
 * @typedef {Object} TransactionType
 * @property {number} value - Transaction type ID
 * @property {string} label - Display label for the transaction type
 * @property {string} direction - Direction of transaction ('in' or 'out')
 */

/**
 * @type {TransactionType[]}
 */
const TRANSACTION_TYPES = [
    { value: 1, label: 'Deposit', direction: 'in' },
    { value: 2, label: 'Withdrawal', direction: 'out' },
    { value: 3, label: 'Bonus In', direction: 'in' },
    { value: 4, label: 'Bonus Out', direction: 'out' },
    { value: 5, label: 'Credit In', direction: 'in' },
    { value: 6, label: 'Credit Out', direction: 'out' },
];

/**
 * @typedef {Object} CreateTransactionDialogProps
 * @property {boolean} open - Whether the dialog is open
 * @property {import("../data/mockClients").Client} [account] - The selected account/client object
 * @property {import("../data/mockClients").Client[]} [accounts] - Array of available accounts/clients
 * @property {() => void} [onClose] - Callback fired when dialog closes
 * @property {() => void} [onSuccess] - Callback fired on successful transaction creation
 */

/**
 * Dialog component for creating a new transaction
 * Allows users to select transaction type, amount, and optionally a comment
 * @param {CreateTransactionDialogProps} props - Component props
 * @returns {import('react').ReactElement} Rendered dialog component
 */
const CreateTransactionDialog = ({ open, account, accounts = [], onClose, onSuccess }) => {
    const { setClients, clients } = useClientStore();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedAccountId, setSelectedAccountId] = useState('');
    const [formData, setFormData] = useState({ transactionType: 1, amount: '', comment: '' });

    const activeAccount = account ||
        accounts.find((acc) => String(acc.id) === selectedAccountId);

    useEffect(() => {
        if (open) {
            setFormData({ transactionType: 1, amount: '', comment: '' });
            setError(null);
            if (account) {
                setSelectedAccountId((account.id ?? ''));
            } else if (accounts.length === 1) {
                setSelectedAccountId((accounts[0].id ?? ''));
            } else {
                setSelectedAccountId('');
            }
        }
    }, [open, account, accounts]);

    const handleChange = (field, value) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = async () => {
        if (!activeAccount) { setError("Please select an account"); return; }
        const validAmount = parseFloat(formData.amount);
        if (isNaN(validAmount) || validAmount <= 0) {
            setError("Please enter a valid amount");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const updatedClient = await fakeApiCreate({
                accountId: activeAccount.id,
                transactionType: formData.transactionType,
                amount: validAmount,
            });

            const updatedClients = clients.map((client) => (client.id === updatedClient.id ? updatedClient : client));
            setClients(updatedClients);

            onSuccess?.();
            onClose?.();
        } catch (err) {
            setError(err.message || "Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Create Transaction</DialogTitle>
            <DialogContent>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                <FormControl fullWidth sx={{ mt: 1 }}>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.transactionType}
                        onChange={(e) => handleChange('transactionType', e.target.value)}>
                        {TRANSACTION_TYPES.map((t) => (
                            <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField label="Amount" type="number" fullWidth sx={{ mt: 2 }}
                    value={formData.amount} onChange={(e) => handleChange('amount', e.target.value)} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={loading}>Cancel</Button>
                <Button variant="contained" onClick={handleSubmit} disabled={loading}>
                    {loading ? <CircularProgress size={16} /> : 'Submit'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateTransactionDialog;
