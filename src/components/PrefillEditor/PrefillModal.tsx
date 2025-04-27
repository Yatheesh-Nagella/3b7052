import { useState } from 'react';
import { FormField, PrefillMapping } from '../../types/prefill';

interface PrefillModalProps {
    field: FormField;
    onClose: () => void;
    onSelect: (mapping: PrefillMapping) => void;
}

const fakeSources = [
    { sourceFormName: 'Form A', fields: ['email', 'dynamic_checkbox_group'] },
    { sourceFormName: 'Form B', fields: ['completed_at', 'name', 'email'] },
    { sourceFormName: 'Global', fields: ['global_id', 'global_email'] },
];

const PrefillModal = ({ field, onClose, onSelect }: PrefillModalProps) => {
    const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
    const toggleGroup = (groupName: string) => {
        setExpandedGroups(prev =>
            prev.includes(groupName)
                ? prev.filter(name => name !== groupName)  // Collapse
                : [...prev, groupName]                     // Expand
        );
    };
    return (
        <div style={{
            position: 'fixed',
            top: '20%',
            left: '30%',
            width: '40%',
            background: 'white',
            border: '1px solid #ccc',
            padding: '1.5rem',
            zIndex: 10,
            color: '#333',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            overflowY: 'auto',
            maxHeight: '60vh',
        }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '20px' }}>
                Select prefill source for: <span style={{ color: '#007bff' }}>{field.name}</span>
            </h2>

            {fakeSources.map((form, formIdx) => (
                <div key={formIdx} style={{ marginBottom: '1rem' }}>
                    <div
                        onClick={() => toggleGroup(form.sourceFormName)}
                        style={{
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '17px',
                            color: '#007bff',
                            marginBottom: '0.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: '#f1f1f1',
                            padding: '0.5rem',
                            borderRadius: '5px'
                        }}
                    >
                        {form.sourceFormName}
                        <span>{expandedGroups.includes(form.sourceFormName) ? '-' : '+'}</span>
                    </div>

                    {expandedGroups.includes(form.sourceFormName) && (
                        <div style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                            {form.fields.map((fieldName, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => onSelect({ sourceFormName: form.sourceFormName, sourceFieldName: fieldName })}
                                    style={{
                                        padding: '0.5rem',
                                        cursor: 'pointer',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px',
                                        marginBottom: '0.3rem',
                                        background: '#f8f9fa'
                                    }}
                                >
                                    {fieldName}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <button
                onClick={onClose}
                style={{
                    marginTop: '1.5rem',
                    width: '100%',
                    padding: '0.7rem',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '6px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Cancel
            </button>
        </div>
    );
};

export default PrefillModal;
