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
  id: ""
})

function promptComment(id) {
  commentModal.update(modal => {
    modal.open = !modal.open
    modal.id = id
    
    return modal
  })
} 

export { createCommentData, openComments, commentModal, promptComment }