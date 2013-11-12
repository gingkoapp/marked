/**
 * Fork of [marked](https://github.com/chjj/marked) for [Gingko App](https://gingkoapp.com).
 *
 * Main difference between default marked:
 * - enable GFM, tables, breaks, smart-lists, smarty-pants
 * - todo-lists support, use { disableTodos: true } for public trees
 *
 * Developer note: 10, 11, 14 tests historicaly failed, ignore them, until chjj will fix.
 */

var marked = require('./lib/marked');

marked.setOptions({
  gfm: true, // GFM
  tables: true, // GFM tables https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#wiki-tables
  breaks: true, // GFM line breaks https://help.github.com/articles/github-flavored-markdown#newlines
  sanitize: false, // Ignore any HTML that has been input.
  smartLists: true, // Use smarter list behavior than the original markdown.
  smartypants: true, // Use "smart" typograhic punctuation for things like quotes and dashes.
  idParser: idParser,
});

module.exports = marked;

// Always gurant unique id
function idParser(parser, text) {
  if (!parser._uniqIds) parser._uniqIds = {};
  if (!parser._uniqCounter) parser._uniqCounter = 1;
  var id = text.replace(/[\s]+/g, '-');
  if (parser._uniqIds[id]) id = id + '-' + parser._uniqCounter++;
  parser._uniqIds[id] = true;

  return id;
}
