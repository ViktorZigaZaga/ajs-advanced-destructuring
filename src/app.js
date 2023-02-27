export default function destructuring(obj) {
  const { special } = obj;
  if (!special) {
    return [];
  }

  return special.reduce((total, item) => {
    if (!item.description) {
      const el = item;
      el.description = 'Описание недоступно';
      total.push(el);
    } else {
      total.push(item);
    }
    return total;
  }, []);
}
