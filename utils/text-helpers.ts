import sanitizeHtml from 'sanitize-html';

export const splitParagraphs = (string: string) => {
    const splitPars = string.split('</p>')
    return splitPars.map((par: string) => {
        return par.replace('<p>', "")
    })
}

export const getMaxChars = (string: string, length: number) => {
    return string.length > length ? `${string.substring(0, length)}...` : string
}

const emptyTagsToRemove = [
  "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
  "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
  "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
  "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
  "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
  "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
  "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"
]

export const sanitize = (string: string) => {
  return sanitizeHtml(string, {
    exclusiveFilter: function(frame) {
      return emptyTagsToRemove.includes(frame.tag) && !frame.text.trim();
    }
  });
}