// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// set up an event listener to respond to a user action

// submit a request to a mocked-up server

// update the DOM  based on the mock server's response

const likeGlyphs = document.getElementsByClassName("like-glyph");
const errorModal = document.getElementById("modal");

for (const glyph of likeGlyphs) {
  glyph.addEventListener('click', function() {
    mimicServerCall()
      .then((res) => {
        if (glyph.classList.contains("activated-heart")) {
          glyph.textContent = EMPTY_HEART;
          glyph.classList.remove("activated-heart");
        } else {
          glyph.textContent = FULL_HEART;
          glyph.classList.add("activated-heart");
        }
      })
      .catch((e) => {
        errorModal.textContent = e;
        errorModal.classList.remove("hidden");
        setTimeout((e) => {
          errorModal.classList.add("hidden");
        }, 3000)
      })
  })
}

// for (const glyph of likeGlyphs) {
//   glyph.addEventListener('click', async () => {
//     try {
//       const serverCall = await mimicServerCall();
//       if (serverCall) {
//         if (glyph.classList.contains("activated-heart")) {
//           glyph.textContent = EMPTY_HEART;
//           glyph.classList.remove("activated-heart");
//         } else {
//           glyph.textContent = FULL_HEART;
//           glyph.classList.add("activated-heart");
//         }
//       }
//     } catch(e) {
//       errorModal.textContent = e;
//       errorModal.classList.remove("hidden");
//       setTimeout((e) => {
//         errorModal.classList.add("hidden");
//       }, 3000)
//     }
//   })
// }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
