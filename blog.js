{
    var blogs = [];
    blogs = JSON.parse(localStorage.getItem("data"));
    if (blogs == null) {
        blogs = [ 
            {
                name: "WHERE I FIND THE BEST TRAVEL DEALS",
                content: '<p><img width="675" height="395" src="https://media.nomadicmatt.com/traveldealslike.jpg" alt="Surfing the web for travel deals" class="alignnone size-full remove-lazy"><br><strong>Last Updated</strong>: 9/29/22 | September 29th, 2022</p><p>Finding the best travel deals is a matter of timing.</p>        <p>A lot of people think travel is just expensive, but in reality, there are incredible deals happening all the time. They usually don’t last too long, and you have to act quickly. That can sometimes be a problem when a deal requires jumping on a plane tomorrow (how many people can do that?), but in fact, most deals are for months in the future, giving you ample time to plan your schedule.</p>        <p>Often I will book a flight and <em>then</em> figure out my plans. </p>        <p>Since you can usually cancel a flight within 24 hours without incurring a fee, I lock in the deal and then figure out if I can make it work. Sometimes I can (like the $1,200 USD business-class flight from <a href="https://www.nomadicmatt.biz/travel-guides/united-states-travel-guide/los-angeles/" target="_blank" rel="noopener noreferrer">LA</a> to <a href="https://www.nomadicmatt.biz/travel-guides/sweden-travel-tips/stockholm/" target="_blank" rel="noopener noreferrer">Stockholm</a> round-trip); sometimes I can’t (like the $400 USD <a href="https://www.nomadicmatt.biz/travel-guides/new-zealand-travel-tips/" target="_blank" rel="noopener noreferrer">New Zealand</a> flights I had to cancel).</p>        <p>I am always looking out for deals.</p>        <p>Today, I want to tell you where I go for travel deals, tips, and expert advice. After all, these resources focus solely on this one aspect of travel, so why not use them? I can’t know everything, so I rely on specialists. If travel were a hospital, I would be your general practitioner. </p>'
            },
            {
                name: "IS EGYPT SAFE FOR FEMALE TRAVELERS?",
                content: '<p><em>I get a lot of questions from female readers about safety in Egypt. That’s not really something I can answer. After all, I only know what female friends tell me. I’m not an expert so, today, Monica Chapon from <a href="https://thisrareearth.com/" target="_blank" rel="noopener noreferrer">This Rare Earth</a>, is going to share her experience and advice for staying safe as a solo female traveler in Egypt!</em></p>            <p><a href="https://www.nomadicmatt.com/travel-blogs/save-money-egypt/" target="_blank" rel="noopener noreferrer">Egypt</a> sits at the top of so many travelers’ bucket lists for good reason. With such a long history, iconic ancient sites, and exotic smells, tastes, and sounds, it’s easy to understand why.</p>            <p>However, many never actually make it here, due to safety concerns. After all, anyone living in Western countries has likely seen repeated warnings via the government and news stories in the media. </p>'
            }
        ];
        localStorage.setItem("data", JSON.stringify(blogs));
    }

    setTimeout(() => {
        let date = new Date();
        document.getElementById("date-div").innerText = date.toDateString().substring(0, 15);
        blogs.map(
            (value) => {
                let ul = document.getElementById("titles");
                let li = document.createElement("li");
                li.className = "link"
                let button = document.createElement("a");
                button.onclick = (value) => { getData(value) };
                button.appendChild(document.createTextNode(value.name));
                li.appendChild(button);
                ul.appendChild(li);
            }
        )
    }, 1000)
}

function getData(content) {
    let text = content.currentTarget.innerText;
    let thisBlog = blogs.filter((value) => {
        if (value.name === text) { return value; }
    })
    let innerHtml = thisBlog[0].content;
    // .substring(1,thisBlog[0].content.length - 1);
    document.getElementById("right-div").innerHTML = innerHtml;

}