//wait for the DOM to be fully loaded before running script below
document.addEventListener("DOMContentLoaded", function() {

    const apiKey = "a5afecbf9680758dae4fb5974e866293";

    //Flickr account wanting pics from
    const userId = "alessandrorossini";

    //localStorage for keeping track of last page of pics displayed before site was refreshed or default to page 1
    let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;

    const fetchImages = () => {

        fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${apiKey}&user_id=${userId}&per_page=15&page=${currentPage}&format=json&nojsoncallback=1`)
            .then(response => response.json()) // Parse the JSON response
            .then(data => {

                //if API responds
                if (data.stat === "ok") {

                    //variable for fetching photos
                    const photos = data.photos.photo;

                    const imageBar = document.getElementById("imageBar");
                    imageBar.innerHTML = '';

                    //loop through pics collected
                    photos.forEach(photo => {

                        //variables for used for each image
                        const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
                        const imgElement = document.createElement("img");

                        //set pic to or display alt txt
                        imgElement.src = photoUrl;
                        imgElement.alt = "Photo from Alessandro Rossini";

                        //store title info for cursor hover over
                        imgElement.title = photo.title;
                        imageBar.appendChild(imgElement);
                    });

                    //tracker for local storage
                    localStorage.setItem('currentPage', currentPage);
                    currentPage = currentPage % 5 + 1;

                } else {
                    console.error("Error fetching data from Flickr API");
                }
            })
            .catch(error => console.error("Error fetching data from Flickr API", error));
    };
    fetchImages();

    //timer to switch images every 20 seconds
    setInterval(fetchImages, 20000);
});
