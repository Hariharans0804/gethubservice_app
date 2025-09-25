import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Edit, Trash2, Plus, Minus,  CircleDotDashed } from "lucide-react-native";
import { Colors } from "../constants";

const CategoriesListing = ({ item, onEdit, onDelete, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <View style={[styles.container, { marginLeft: level * 20 }]}>
      {/* Row */}
      <View style={styles.row}>
        {/* Expand/Collapse */}
        {item.children && item.children.length > 0 ? (
          <TouchableOpacity onPress={toggleExpand} style={styles.expandBtn}>
            {expanded ? (
              <Minus size={16} color={Colors.DEFAULT_WHITE} />
            ) : (
              <Plus size={16} color={Colors.DEFAULT_WHITE} />
            )}
          </TouchableOpacity>
        ) : (
          // <View style={styles.expandPlaceholder} />
          <TouchableOpacity disabled style={styles.expandBtn}>
            <CircleDotDashed size={16} color={Colors.DEFAULT_WHITE} />
          </TouchableOpacity>
        )}

        {/* Icon */}
        <Text style={styles.icon}>
          {item.icon ? item.icon : level === 0 ? "📂" : "📄"}
        </Text>

        {/* Info */}
        <View style={styles.info}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.name}</Text>
            {/* child count badge */}
            {item.children && item.children.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.children.length}</Text>
              </View>
            )}
          </View>
          {/* {item.description ? (
            <Text style={styles.desc}>{item.description}</Text>
          ) : null} */}
          {/* <Text style={styles.type}>{item.type}</Text> */}
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => onEdit(item)}>
            <Edit size={18} color={Colors.DEFAULT_SKY_BLUE} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDelete(item)}
            style={{ marginLeft: 10 }}
          >
            <Trash2 size={18} color={Colors.DEFAULT_DARK_RED} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Children */}
      {expanded &&
        item.children &&
        item.children.length > 0 &&
        item.children.map((child) => (
          <CategoriesListing
            key={child._id}
            item={child}
            onEdit={onEdit}
            onDelete={onDelete}
            level={level + 1}
          />
        ))}
    </View>
  );
};

export default CategoriesListing;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    // borderWidth: 1
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 8,
  },
  expandBtn: {
    padding: 4,
    backgroundColor: Colors.DEFAULT_DARK_GRAY,
    borderRadius: 8,
    marginRight: 5
  },
  expandPlaceholder: {
    width: 30,
  },
  icon: {
    fontSize: 18,
    marginHorizontal: 6,
  },
  info: {
    flex: 1,
    // borderWidth:1
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.DEFAULT_BLACK,
  },
  badge: {
    marginLeft: 6,
    backgroundColor: Colors.DEFAULT_SKY_BLUE,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 12,
    fontWeight: "700",
  },
  desc: {
    fontSize: 12,
    color: Colors.DEFAULT_DARK_GRAY,
  },
  type: {
    fontSize: 12,
    color: Colors.DEFAULT_SKY_BLUE,
  },
  actions: {
    flexDirection: "row",
    marginLeft: 8,
  },
});
