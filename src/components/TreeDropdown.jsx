import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react-native";
import { Colors } from "../constants";


const TreeNode = ({ node, level = 0, onSelect, selectedId, setSelectedId }) => {
    const [expanded, setExpanded] = useState(false);

    const isSelected = selectedId === node._id;

    return (
        <View style={{ marginLeft: level * 12, marginVertical: 4 }}>
            <View
                style={[
                    styles.row,
                    {
                        backgroundColor: isSelected ? "#D0E8FF" : "#fff",
                        padding: 6,
                        borderRadius: 4,
                        flexDirection: "row",
                        alignItems: "center",
                    },
                ]}
            >
                {/* Expand / Collapse only on Icon */}
                {node.children?.length > 0 && (
                    <TouchableOpacity
                        onPress={() => setExpanded(!expanded)}
                        style={{ marginRight: 6, backgroundColor: Colors.DEFAULT_DARK_GRAY, borderRadius: 8, }}
                    >
                        {expanded ? (
                            <Minus size={16} color={Colors.DEFAULT_WHITE} />
                        ) : (
                            <Plus size={16} color={Colors.DEFAULT_WHITE} />
                        )}
                    </TouchableOpacity>
                )}

                {/* Select only on Text */}
                <TouchableOpacity style={{ flex: 1 }}
                    onPress={() => {
                        setSelectedId(node._id);
                        onSelect(node);
                    }}
                >
                    <Text
                        style={[
                            styles.label,
                            { color: isSelected ? "#1A73E8" : "#000" },
                        ]}
                    >
                        {node.name}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Children */}
            {expanded &&
                node.children?.map((child) => (
                    <TreeNode
                        key={child._id}
                        node={child}
                        level={level + 1}
                        onSelect={onSelect}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                    />
                ))}
        </View>
    );
};

const TreeDropdown = ({ data, onSelect, placeholder = "Select...", value }) => {

    const [selectedId, setSelectedId] = useState(value || null);
    const [selectedLabel, setSelectedLabel] = useState("");

    // useEffect(() => {
    //     if (!value) {
    //         setSelectedId(null);
    //         setSelectedLabel("");
    //     }
    // }, [value]);

    // Helper: recursive search
    const findNodeById = (nodes, id) => {
        for (let node of nodes) {
            if (node._id === id) return node;
            if (node.children?.length) {
                const found = findNodeById(node.children, id);
                if (found) return found;
            }
        }
        return null;
    };

    useEffect(() => {
        if (value) {
            setSelectedId(value);
            const node = findNodeById(data, value);
            setSelectedLabel(node ? node.name : "");
        } else {
            setSelectedId(null);
            setSelectedLabel("");
        }
    }, [value, data]);

    const handleSelect = (node) => {
        setSelectedId(node._id);
        setSelectedLabel(node.name);
        onSelect(node);
    };

    return (
        <View style={[styles.container]}>
            {/* Placeholder or selected text */}
            {selectedId ? (
                <Text style={styles.selectedText}>{selectedLabel}</Text>
            ) : (
                <Text style={styles.placeholderText}>{placeholder}</Text>
            )}


                {data.map((node) => (
                    <TreeNode
                        key={node._id}
                        node={node}
                        // onSelect={onSelect}
                        onSelect={handleSelect}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                    />
                ))}
        </View>
    );
};





export default TreeDropdown;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 8,
        overflow: "hidden",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    toggle: {
        marginRight: 6,
        fontWeight: "bold",
    },
    label: {
        fontSize: 14,
    },
    placeholderText: {
        color: "#999",
        fontStyle: "italic",
        marginBottom: 6,
        // padding:6
    },
    selectedText: {
        color: "#000",
        fontWeight: "500",
        marginBottom: 6,
    },

});


// const TreeNode = ({ node, level = 0, onSelect, selectedId, setSelectedId }) => {
//     const [expanded, setExpanded] = useState(false);

//     const isSelected = selectedId === node._id;

//     return (
//         <View style={{ marginLeft: level * 12, marginVertical: 4 }}>
//             <TouchableOpacity
//                 style={[
//                     styles.row,
//                     { backgroundColor: isSelected ? '#D0E8FF' : 'transparent', padding: 6, borderRadius: 4, flexDirection: "row", alignItems: "center", }
//                 ]}
//                 onPress={() => {
//                     if (node.children?.length > 0) {
//                         setExpanded(!expanded); // expand/collapse
//                     } else {
//                         setSelectedId(node._id); // update selected
//                         onSelect(node);          // notify parent
//                     }
//                 }}
//             >
//                 {/* Expand / Collapse only on Icon */}
//                 {node.children?.length > 0 && (
//                     expanded ? (
//                         <Minus size={16} color="#1A73E8" style={{ marginRight: 6 }} />
//                     ) : (
//                         <Plus size={16} color="#1A73E8" style={{ marginRight: 6 }} />
//                     )
//                 )}
//                 <Text style={[styles.label, { color: isSelected ? '#1A73E8' : '#000' }]}>{node.name}</Text>
//             </TouchableOpacity>

//             {expanded &&
//                 node.children?.map((child) => (
//                     <TreeNode
//                         key={child._id}
//                         node={child}
//                         level={level + 1}
//                         onSelect={onSelect}
//                         selectedId={selectedId}
//                         setSelectedId={setSelectedId}
//                     />
//                 ))}
//         </View>
//     );
// };

// const TreeDropdown = ({ data, onSelect }) => {
//     const [selectedId, setSelectedId] = useState(null);

//     return (
//         <View style={styles.container}>
//             {data.map((node) => (
//                 <TreeNode
//                     key={node._id}
//                     node={node}
//                     onSelect={onSelect}
//                     selectedId={selectedId}
//                     setSelectedId={setSelectedId}
//                 />
//             ))}
//         </View>
//     );
// };