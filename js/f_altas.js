// // autoplay videos
// const videos = document.querySelectorAll("video");

// function AutoPlayAllVideos() {
//     if (videos) {
//         videos.forEach((video, index) => {
//             // console.log(`Video ${index + 1}:`, video);
//             // Example: Add an event listener to each video
//             video.addEventListener("play", () => {
//                 console.log("here")
//                 video.play();
//             });
//         });
//     }
// }
// // Iterate through the NodeList of videos

// document.addEventListener("DOMContentLoaded", (event) => {
//     AutoPlayAllVideos();

//     const videos = document.querySelectorAll("video");

//     if (videos) {
//         videos.forEach((video, index) => {
//             const playPromise = video.play();
//             if (playPromise !== undefined) {
//                 playPromise
//                 .then(() => {
//                     console.log("autoplayed")
//                 })
//                 .catch((error) => {
//                     console.log(
//                         "Autoplay prevented. Please click the play button to start the video."
//                     );
//                 });
//             }
//         });
//     }
// });
