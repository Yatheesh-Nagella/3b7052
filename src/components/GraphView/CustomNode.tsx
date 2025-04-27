import { Handle, Position } from "reactflow";

const CustomNode = ({ data }: { data: { label: string } }) => {
    return (
        < div style={{
            padding: '20 px',
            border: '2px solid #007bff',
            borderRadius: '10px',
            background: 'white',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '600',
            color: '#333',
            minWidth: '120px',
        }}>
            {data.label}
            {/* Handles for connecting edges */}
            {/* Invisible handles for the edges*/}
            <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
        </div>
    );
};
export default CustomNode;