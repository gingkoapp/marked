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
  smartypants: true // Use "smart" typograhic punctuation for things like quotes and dashes.
});

module.exports = marked;
