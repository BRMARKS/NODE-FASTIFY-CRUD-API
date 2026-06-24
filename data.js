let items = [];

module.exports = {
  getAll: () => items,
  getById: (id) => items.find(i => i.id === id),
  create: (item) => {
    items.push(item);
    return item;
  },
  update: (id, newItem) => {
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...newItem };
    return items[index];
  },
  remove: (id) => {
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return false;
    items.splice(index, 1);
    return true;
  }
};
