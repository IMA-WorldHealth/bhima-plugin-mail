/**
 * bhima-mail-plugin utilities
 *
 * These are used in index.js for various purposes.
 */

// generate a uuid version 4
function uuid() {
  'use strict';

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
    v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// recurively loops through an object (tree), applying the
// function fn to each value in the tree.
function umap(object, fn) {
  'use strict';

  for (var key in object) {
    if (typeof object[key] === 'object' && object[key] !== null) {

      // descend a level
      umap(object[key], fn);
    } else {

      // apply the function
      object[key] = fn(object[key]);
    }
  }

  return object;
}

// formatDate : function (dateString) {
//   // This style of convert to MySQL date avoids changing
//   // the prototype of the global Date object
//   if (!dateString) { return new Date().toISOString().slice(0, 10); }

//   var date = new Date(dateString),
//     year = String(date.getFullYear()),
//     month = String(date.getMonth() + 1),
//     day = String(date.getDate());

//   month = month.length < 2 ? '0' + month : month;
//   day = day.length < 2 ? '0' + day : day;

//   return [year, month, day].join('-');
// }

exports.uuid = uuid;
exports.map = umap;
// exports.formatDate = formatDate;
