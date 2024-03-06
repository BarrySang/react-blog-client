import TextGenerator from "./TextGenerator"

// function to generate an array of blogs
export function generateBlogs(numberOfBlogs) {
    // array to store the blogs in
    let blogs = []

    // create text generator object
    const textGenerator = new TextGenerator()

    for (let i = 0; i < numberOfBlogs; i++) {
        const blog = {
            id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
            user: blogs.length ? 'user'+(blogs[blogs.length - 1].id + 1) : 'user1',
            title: textGenerator.generateSentence(25, 5), // blogs.length ? 'blog'+(blogs[blogs.length - 1].id + 1) : 'blog1',
            content: 'Anim ex commodo pariatur duis laborum pariatur. Ex adipisicing qui ea pariatur consectetur mollit. Sint anim incididunt esse qui aliqua laborum duis do culpa sint laborum aute exercitation sit. Sunt fugiat mollit ipsum non. Quis excepteur occaecat ea voluptate.',
            comments: Math.floor((Math.random() * 100) + 1),
            likes: Math.floor((Math.random() * 3000) + 500),
            createdOn: Math.floor((Math.random() * 30) + 1)+
                    '-'+Math.floor((Math.random() * 12) + 1)+
                    '-'+Math.floor((Math.random() * 2024) + 2010),
            updatedOn: 'dd-mm-yyyy'
        }

        blogs.push(blog)
    }

    return blogs
    // console.log(blogs)
}

export function formatNumber(value) {
    const suffixes = ['', 'k', 'M', 'B', 'T'];
  
    let formattedValue = value;
    let suffixIndex = 0;
  
    while (formattedValue >= 1000 && suffixIndex < suffixes.length - 1) {
      formattedValue /= 1000;
      suffixIndex++;
    }
  
    const roundedValue = Math.round(formattedValue * 10) / 10;
    return roundedValue + suffixes[suffixIndex];
}
  
//   // Example usage:
//   const result = formatNumber(3124);
//   console.log(result); // Output: '3.1k'
  
// get index range for current page
export function getIndexRange(currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex, endIndex}
}