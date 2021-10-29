import {ref} from 'vue'

const getpost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts/' + id)
        if (!data.ok){
          throw Error('that post does not available')
        }
        post.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return{ post, error, load }
}

export default getPost