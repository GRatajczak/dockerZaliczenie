<template>
  <div>
    <div class="notes-list">
      <h1>Notatki</h1>
      <ol v-if="notes.length">
        <li v-for="(note, index) in notes" :key="index">
          <router-link :to="{ name: 'SingleNote', params: { id: note._id } }">
            {{ note.title }} <b> | otwórz </b>
          </router-link>
          <b @click="deleteNote(note._id)">| usuń</b>
        </li>
      </ol>
      <p v-else>Brak notatek.</p>
    </div>
    <div class="inputs">
      <h2>Dodaj nową notatkę</h2>
      <div class="inputs-inner">
        <form>
          <input placeholder="Tytuł" v-model="note.title">
          <input placeholder="Autor" v-model="note.author">
          <textarea placeholder="Treść" rows="5" v-model="note.text"></textarea>
        </form>
        <button @click="addNote">Dodaj +</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notes: [],
      note: {
        title: '',
        author: '',
        text: ''
      }
    }
  },
  async created () {
    await this.getNotes()
  },
  methods: {
    async getNotes () {
      const response = await fetch(`${process.env.VUE_APP_API}/notes`)
      this.notes = await response.json()
    },
    async addNote () {
      await fetch(`${process.env.VUE_APP_API}/notes`, {
        method: 'POST',
        body: JSON.stringify(this.note),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })

      this.getNotes()

      for (const item in this.note) {
        console.log(item)
        this.note[item] = ''
      }
    },
    async deleteNote (id) {
      await fetch(`${process.env.VUE_APP_API}/notes/${id}`, {
        method: 'DELETE'
      })
      this.getNotes()
    }
  }
}
</script>

<style lang="scss">
  .notes-list, .inputs {
    padding: 10px;
    width: 768px;
    padding: 0 30px 20px 30px;
    margin: 30px auto 0;
    padding-top: 5px;
    background: #ffffff;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);p {
      padding-left: 5px;
    }
    ol {
      padding-left: 25px;
      li {
        margin-bottom: 8px;
        b {
          font-size: 15px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .inputs {
    &-inner form {
      display: flex;
      flex-direction: column;
    }
    button {
      background: rgb(245, 245, 245);
      border: 1px solid #bbb;
      padding: 8px 12px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  input, textarea {
    border: 1px solid #aaa;
    margin: 0 0 15px;
    padding: 6px 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
</style>
