{
    setTimeout(() => {
        let date = new Date();
        document.getElementById("date-div").innerText = date.toDateString().substring(0, 15);

    }, 1000)
}

function setData(content) {
    let blogName = document.getElementById("blogName").value;
    let nicE = new nicEditors.findEditor('blogContent');
    let blogContent = nicE.getContent();
    let blogs = JSON.parse(localStorage.getItem("data"));
    let newBlog = {
        name: blogName,
        content: blogContent
    }
    blogs.push(newBlog);
    if (blogName !== "" && blogContent !== "<br>") {
        localStorage.setItem("data", JSON.stringify(blogs));
        document.getElementById("blogName").value = "";
        nicE.setContent("<br>")
    }
}