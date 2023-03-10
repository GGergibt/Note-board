import express from 'express'
import {noteCreate, propertyCreate, notesGet, propertyNoteCreate} from '../db/notes.js'

export const notes = express.Router();

notes.post('/', async function(req, res) {
  await noteCreate(req.body)
  res.status(201)
  res.send('succeed')
})

notes.post('/property-note', async function(req, res) {
  await propertyNoteCreate(req.body)
  res.status(201)
  res.send('succeed')
})

notes.get('/', async function(req, res) {
  const notes = await notesGet(req.query.board)
  res.status(200)
  res.json(notes)
})

notes.post('/property-title', async function(req, res) {
  await propertyCreate(req.body)
  res.status(201)
  res.send('succeed')
})
