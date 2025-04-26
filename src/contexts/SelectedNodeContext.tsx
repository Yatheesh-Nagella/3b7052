import { createContext, useContext, useState, ReactNode } from 'react';
import { Node } from 'reactflow';

interface SelectedNodeContextType {
    selectedNode: Node | null;
    setSelectedNode: (node: Node | null) => void;
}

const SelectedNodeContext = createContext<SelectedNodeContextType | undefined>(undefined);

export const SelectedNodeProvider = ({ children }: { children: ReactNode }) => {
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);

    return (
        <SelectedNodeContext.Provider value={{ selectedNode, setSelectedNode }}>
            {children}
        </SelectedNodeContext.Provider>
    );
};

export const useSelectedNode = () => {
    const context = useContext(SelectedNodeContext);
    if (context === undefined) {
        throw new Error('useSelectedNode must be used within a SelectedNodeProvider');
    }
    return context;
};
