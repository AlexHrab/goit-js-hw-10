import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector("form")

form.addEventListener('submit', event =>
{
    event.preventDefault()
    
    const delay = form.elements.delay.value
    const state = form.elements.state.value
    
    const promise = new Promise((resolve, reject) => {
      if (state === 'fulfilled') {
          setTimeout(() => resolve(delay), delay);
      }
      if (state === 'rejected') {
        setTimeout(() => reject(delay), delay);
      }
    });
    
    promise.then((value) => {iziToast.success({message: `✅ Fulfilled promise in ${value} ms`,
          position: "center", close: false, closeOnClick: true, progressBar: false, messageSize: 30, timeout: false, displayMode: 1
        });
        
      }).catch((value) => { iziToast.error({message: `❌Rejected promise in ${value} ms`,
          position: "center", close: false, closeOnClick: true, progressBar: false, messageSize: 30, timeout: false, displayMode: 1
        });
      });
    }
)

  