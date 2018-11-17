module.exports = {
// create our own post
    create: async (req, res) => {
      try {
          
        const db = req.app.get('db')
    
        let { text_content,img } = req.body;
//using dummy user_id until from end is set up
// still need to build created at date
        // let { id: user_id } = req.session.user
        let user_id = 2
    
        let posts = await db.createPost({ user_id, img, text_content })
        console.log('created post')
        res.send(posts)
      } catch (error) {
        console.log('error creating post:', error)
        res.status(500).send(error)
      }
    },
// read own posts
    getUserPosts: async (req, res) => {
        console.log('attemping to pull posts')
        try {
        const db = req.app.get('db')
        const {id} = req.body
        let posts = await db.getUserPosts(id)
        res.send(posts)

        } catch (error) {
        console.log('error getting posts:', error)
        res.status(500).send(error)
        }
    }
// update post
// delete post

// common a post
}