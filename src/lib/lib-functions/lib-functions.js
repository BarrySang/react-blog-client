// function to generate an array of blogs
export function generateBlogs(numberOfBlogs) {
    // array to store the blogs in
    let blogs = []

    for (let i = 0; i < numberOfBlogs; i++) {
        const blog = {
            id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
            user: blogs.length ? 'user'+(blogs[blogs.length - 1].id + 1) : 'user1',
            content: 'Anim ex commodo pariatur duis laborum pariatur. Ex adipisicing qui ea pariatur consectetur mollit. Sint anim incididunt esse qui aliqua laborum duis do culpa sint laborum aute exercitation sit. Sunt fugiat mollit ipsum non. Quis excepteur occaecat ea voluptate.',
            likes: Math.floor((Math.random() * 3000) + 500),
            comments: Math.floor((Math.random() * 100) + 1),
            createdOn: Math.floor((Math.random() * 30) + 1)+
                    '-'+Math.floor((Math.random() * 12) + 1)+
                    '-'+Math.floor((Math.random() * 2024) + 2010),
            updatedOn: 'dd-mm-yyyy'
        }

        blogs.push(blog)
    }

    return blogs
    // set git
    // console.log(blogs)
}