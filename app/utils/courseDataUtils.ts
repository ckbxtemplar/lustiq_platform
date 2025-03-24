interface RichTextNode {
  type?: string;
  children?: { text: string }[];
}

export const richTextToHTML = (richText: RichTextNode[] | undefined): string => {
  if (!richText || !Array.isArray(richText)) return "";

  return richText
    .map((block) => {
      if (!block.children) return "";

      const textContent = block.children.map((child) => child.text).join("");

      // Az alapértelmezett HTML tag az adott blokktól függ
      switch (block.type) {
        case "heading": return `<h2>${textContent}</h2>`;
        case "paragraph": return `<p>${textContent}</p>`;
        case "list-item": return `<li>${textContent}</li>`;
        default: return `<p>${textContent}</p>`; // Alapértelmezett bekezdés
      }
    })
    .join(""); // Az összes blokkot összefűzzük egy HTML stringgé
};

export const tagsToHTML = (tags: { name: string }[] | undefined): string => {
  if (!tags || !Array.isArray(tags) || tags.length === 0) return "";

  const listItems = tags
    .map((tag) => `<li class='me-1 mb-1'><a href="#!">${tag.name}</a></li>`)
    .join("");

  return `<ul class="item_category_list unordered_list">${listItems}</ul>`;
};