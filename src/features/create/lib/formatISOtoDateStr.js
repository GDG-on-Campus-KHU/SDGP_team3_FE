export const formatISOtoDateStr = (iso) => {
  if (!iso) return "";
  return new Date(iso).toISOString().slice(0, 10).replace(/-/g, ".");
};
