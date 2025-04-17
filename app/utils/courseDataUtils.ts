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

interface courseElementsDetailsScope {
  formats: string[];
  counter: { [key: string]: number; }
}

export const courseElementsDetails = (lessons: []): courseElementsDetailsScope  => {
	let videoCounter = 0;
	let formats: string[] = [];
	let counter = {
		section:0, 
		video:0,
		quiz:0,
		ai:0
	}
	
	lessons.forEach((item: any) => {	
		counter.section++;			
		
		if (item.description?.length > 0 && !formats.includes('explainer')) formats.push('explainer');
		if (item.title == 'ai'){ 
			counter.ai++;
			if (!formats.includes('aichat')) formats.push('aichat');
		}
		if (Array.isArray(item.questions) && item.questions.length > 0){
			counter.quiz+= item.questions.length;
			if (!formats.includes('quiz')) formats.push('quiz');
		}
		if (item.video?.url) 
		{
			counter.video++;
			if (!formats.includes('video'))	formats.push('video');
		}
	});

	return {
		formats: formats,
		counter: counter
	}
}

export const formatCaptionIcon = (format: string): string => {
	switch (format) {
		case 'video':
			return 'fas fa-video';
		case 'quiz':
			return 'fas fa-question-circle';
		case 'explainer':
			return 'fas fa-info-circle';
		case 'aichat':
			return 'fas fa-robot';
		default:
			return 'fas fa-file-alt';
	}
}
