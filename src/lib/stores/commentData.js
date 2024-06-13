import { writable } from 'svelte/store'

const createCommentData = writable({
  id: "",
  open: false,
  data: {}
})

// Contains string key of comment id with open, originId and comments properties
const openComments = writable(new Map())

const commentModal = writable({
  open: false,
  data: {}
})

export { createCommentData, openComments, commentModal }