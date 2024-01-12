import videoList from "./sampleData.js";

const featuredVideo = document.querySelector(".feature .embed iframe");
const featuredVideoTitle = document.querySelector(".feature h1");
const featuredVideoDesc = document.querySelector(".feature p");
const galleryUL = document.querySelector(".gallery");

(function drawInitialVideo() {
  const initialVideo = videoList.items[0];
  drawFeaturedVideo(initialVideo);
})();

(function drawGallery() {
  videoList.items.forEach((video) => {
    const li = buildVideoListItem(video);
    galleryUL.appendChild(li);
  });
})();

function buildVideoListItem(video) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");

  anchor.href = "#";
  anchor.addEventListener("click", replaceFeaturedVideo);
  img.src = video.snippet.thumbnails.default.url;
  h3.textContent = video.snippet.title;

  anchor.appendChild(img);
  anchor.appendChild(h3);
  li.appendChild(anchor);

  return li;
}

function replaceFeaturedVideo(event) {
  event.preventDefault();
  const video = videoList.items.find((video) => {
    return video.snippet.title === event.target.textContent;
  });
  drawFeaturedVideo(video);
}

function drawFeaturedVideo(video) {
  featuredVideo.src = `https://www.youtube.com/embed/${video.id.videoId}`;
  featuredVideoTitle.textContent = video.snippet.title;
  featuredVideoDesc.textContent = video.snippet.description;
}
