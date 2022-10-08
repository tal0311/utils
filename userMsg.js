// Put this in your HTML file
     <section class="user-msg">
      <h4 class="msg-txt">user msg</h4>
     </section>


// Put this in your JS file
function setUserMsg(msg) {
  document.querySelector(".user-msg").classList.toggle("open");
  if (!msg) return;
  document.querySelector(".msg-txt").innerText = msg || "";
  setTimeout(setUserMsg, 2000);
}

// Put this in your CSS
.user-msg.open {
  transform: translateX(0);
}

.user-msg {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #333;
  padding: 0.1rem 2rem;
  border-radius: 0.8em;
  transition: all 0.5s ease-in-out;
  transform: translateX(150%);
  color: #f3f3f3;
}
