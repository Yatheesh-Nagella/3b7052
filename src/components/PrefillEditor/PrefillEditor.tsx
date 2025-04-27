import { useSelectedNode } from '../../contexts/SelectedNodeContext';
import { useState } from 'react';
import { FormField, PrefillMapping } from '../../types/prefill';
import PrefillModal from './PrefillModal';

const PrefillEditor = () => {
    const { selectedNode, setSelectedNode } = useSelectedNode();
    const [modalOpen, setModalOpen] = useState(false);
    const [activeFieldIndex, setActiveFieldIndex] = useState<number | null>(null);
    const [fields, setFields] = useState<FormField[]>([
        { name: 'dynamic_checkbox_group' },
        { name: 'dynamic_object' },
        { name: 'email', prefill: { sourceFormName: 'Form A', sourceFieldName: 'email' } },
    ]);

    if (!selectedNode) {
        return null;
    }

    const clearPrefill = (index: number) => {
        const updatedFields = [...fields];
        delete updatedFields[index].prefill;
        setFields(updatedFields);
    };

    const openModalForField = (index: number) => {
        //console.log('Open Modal for field:', fields[index].name);
        // Modal opening will be implemented next
        setActiveFieldIndex(index);
        setModalOpen(true);
    };

    const handleSelectPrefill = (mapping: PrefillMapping) => {
        if (activeFieldIndex !== null) {
            const updatedFields = [...fields];
            updatedFields[activeFieldIndex].prefill = mapping;
            setFields(updatedFields);
        }
        setModalOpen(false);
    };

    return (
        <>
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '100vh',
                background: 'white',
                borderLeft: '1px solid #ddd',
                padding: '1.5rem',
                overflowY: 'auto',
                boxShadow: '-2px 0 5px rgba(0,0,0,0.05)'
            }}>
                <h2 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: '#333'
                }}>
                    Prefill fields for <span style={{ color: '#007bff' }}>{selectedNode.data.label}</span>
                </h2>

                {fields.map((field, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        {field.prefill ? (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: '#f1f1f1',
                                border: '1px solid #ccc',
                                borderRadius: '6px',
                                padding: '0.7rem',
                                fontSize: '15px',
                                color: '#333',
                                fontWeight: '600',
                            }}>
                                <span>{field.name}: <span style={{ color: '#007bff' }}>{field.prefill.sourceFormName}.{field.prefill.sourceFieldName}</span></span>
                                <button
                                    onClick={() => clearPrefill(index)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'red',
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                        ) : (
                            <div
                                onClick={() => openModalForField(index)}
                                style={{
                                    background: '#f7f8fa',
                                    border: '1px dashed #007bff',
                                    padding: '0.7rem',
                                    borderRadius: '6px',
                                    fontWeight: '500',
                                    fontSize: '15px',
                                    color: '#007bff',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                }}
                            >
                                {field.name} (Click to prefill)
                            </div>
                        )}
                    </div>
                ))}

                <button
                    onClick={() => setSelectedNode(null)}
                    style={{
                        marginTop: '2rem',
                        width: '100%',
                        padding: '0.8rem',
                        backgroundColor: '#007bff',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    Close
                </button>
            </div>

            {/* 🛠 Modal rendering code */}
            {modalOpen && activeFieldIndex !== null && (
                <PrefillModal
                    field={fields[activeFieldIndex]}
                    onClose={() => setModalOpen(false)}
                    onSelect={handleSelectPrefill}
                />
            )}
        </>
    );

};

export default PrefillEditor;
