const { addNotesHandler, getAllNotesHandler, getNotesByIdHandler, editNoteByIdHandler, deleteNotesByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        handler: addNotesHandler,
        path: '/notes',
    },
    {
        method: 'GET',
        handler: getAllNotesHandler,
        path: '/notes',
    },
    {
        method: 'GET',
        handler: getNotesByIdHandler,
        path: `/notes/{id}`,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNotesByIdHandler,
    },
];

module.exports = routes;