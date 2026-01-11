export const stripHtml = (html: string): string => {
  if (!html) return "";
  // Basic regex to strip HTML tags
  return html.replace(/<[^>]*>?/gm, "");
};

export const truncateText = (text: string, length: number = 100): string => {
  if (!text) return "";
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};
