export const buildCategoryTree = (categories) => {
    const map = {};
    const roots = [];

    // console.log("📦 Raw categories:", categories);

    // Step 1: create map
    categories.forEach((cat) => {
        map[cat._id] = { ...cat, children: [] };
    });
    // console.log("🗺️ Category map:", map);

    // Step 2: assign children to parents
    categories.forEach((cat) => {
        if (cat.parent && cat.parent._id) {
            if (map[cat.parent._id]) {
                map[cat.parent._id].children.push(map[cat._id]);
                // console.log(`🔗 Linked ${cat.name} → parent ${cat.parent.name}`);
            } else {
                console.warn(`⚠️ Parent not found for ${cat.name}`, cat.parent);
            }
        } else {
            roots.push(map[cat._id]); // root if no parent
            // console.log(`🌳 Root category: ${cat.name}`);
        }
    });

    // console.log("✅ Final tree:", JSON.stringify(roots, null, 2));
    return roots;
};