import React, { useState, useEffect } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField, FormControl, InputLabel, Select,
    MenuItem, Alert, CircularProgress
} from '@mui/material';

const TRANSACTION_TYPES = [
    { value: 1, label: 'Deposit', direction: 'in' },
    { value: 2, label: 'Withdrawal', direction: 'out' },
    { value: 3, label: 'Bonus In', direction: 'in' },
    { value: 4, label: 'Bonus Out', direction: 'out' },
    { value: 5, label: 'Credit In', direction: 'in' },
    { value: 6, label: 'Credit Out', direction: 'out' },
];

const CreateTransactionDialog = ({ open, account, accounts = [], onClose, onSuccess }) => {
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
                setSelectedAccountId(account.id ?? '');
            } else if (accounts.length === 1) {
                setSelectedAccountId(accounts[0].id ?? '');
            } else {
                setSelectedAccountId('');
            }
        }
    }, [open, account, accounts]);

    const handleChange = (field, value) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = async () => {
        if (!activeAccount) { setError('Please select an account'); return; }
        const validAmount = parseFloat(formData.amount);
        if (isNaN(validAmount) || validAmount <= 0) {
            setError('Please enter a valid amount');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            await fakeApiCreate({ accountId: activeAccount.id, ...formData, amount: parseFloat(formData.amount) });
            onSuccess?.();
            onClose?.();

        } catch (err) {
            setError(err.message || 'Failed');
        } finally {
            setLoading(false);
        }
    };

    const selectedType = TRANSACTION_TYPES.find((t) => t.value === formData.transactionType);
    const balance = parseFloat(activeAccount?.balance || 0);
    const amount = parseFloat(formData.amount || 0);
    const newBalance = selectedType?.direction === 'in' ? balance + amount : balance - amount;

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
