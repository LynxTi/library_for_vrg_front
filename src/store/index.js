import Vuex from "vuex";
import axios from "axios";

// let loading = false
const url = 'http://localhost:7000';

export default new Vuex.Store({
    state: {
        genres: null,
        authors: null,
        books: null
    },
    actions: {
        async getBooks(context) {
            // loading = true
            const {data} = await axios.get(url + '/books/getAllBook')
            // loading = false

            context.commit('setBooks', data)
        },
        async getBooksbyId(_, id) {
            console.log('id', id)
            const {data} = await axios.get(url + `/books/${id}`)
            console.log('id', data)
            return data
        },
        async getGenres(context) {
            const {data} = await axios.get(url + '/genre/getGenres')
            context.commit('setGenres', data)
        },

        async getAuthors(context) {
            const {data} = await axios.get(url + '/authors/getAllAuthors')
            context.commit('setAuthors', data)
        },

        async createBook(context, book) {
            const {data} = await axios.post(url + '/books/createBook', book)
            await context.dispatch('getBooks')
            return {data}
        },

        async createAuthor(context, author) {
            const {data} = await axios.post(url + '/authors/createAuthor', author)
            await context.dispatch('getAuthors')
            return {data}
        },

        async editAuthor(context, author) {
            const {data} = await axios.put(url + `/authors/${author._id}`, {name: author.name})
            await context.dispatch('getAuthors')
            return data
        },

        async removeBook(context, book) {
            const {data} = await axios.delete(url + `/books/${book._id}`)
            await context.dispatch('getBooks')
            return data
        },

        async removeAuthor(context, author) {
            const {data} = await axios.delete(url + `/authors/${author._id}`)
            await context.dispatch('getAuthors')
            return data
        },

        async editBook(context, book) {
            const {data} = await axios.put(url + `/books/${book._id}`, {name: book.name, authorId: book.authorId, genreId: book.genreId })
            await context.dispatch('getBooks')
            return data
        }
    },
    mutations: {
        setGenres (state, genres) {
            state.genres = genres
        },

        setAuthors (state, authors) {
            state.authors = authors
        },

        setBooks (state, books) {
            state.books = books
        },
    }
})