//----------------------------------------------------------------------------------------------------------------------
// Models for the deluge-pages component
//
// @module models.js
//----------------------------------------------------------------------------------------------------------------------

var om = require('omega-models');
var fields = om.fields;
var SimpleBackend = om.backends.Simple;
var ns = om.namespace('deluge').backend(new SimpleBackend({ rootDir: './db' }));

//----------------------------------------------------------------------------------------------------------------------

module.exports = ns.define({
    Page: {
        title: fields.String(),
        slug: fields.String({ key: true }),
        content: fields.String(),
        template: fields.String(),
        draft: fields.Boolean({ default: true }),
        created: fields.DateTime({ first: true }),
        modified: fields.DateTime({ auto: true }),

        owner: fields.Reference({ model: 'User' })
    }
}); // end exports

//----------------------------------------------------------------------------------------------------------------------