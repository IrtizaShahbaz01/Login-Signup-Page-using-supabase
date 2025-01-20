import { supabase } from "./supabase.js";

try {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let btn = document.getElementById("btn");
  let loading = document.getElementById("loading");
  let overlay = document.getElementById("overlay");
  let body = document.body;

  btn.addEventListener("click", async (event) => {
    event.preventDefault(); 
    loading.style.display = "block";
    overlay.style.display = "block";
    body.classList.add("no-interaction");

    const { data, error } = await supabase.auth.signUp(
      {
        email: email.value,
        password: password.value,
        options: {
          data: {
            first_name: name.value,
          }
        }
      }
    );
    
    if (error) {
      alert(`Error is: ${error.message}`);
    } else {
      alert("Sign-up successful! Please check your email for confirmation.");
    }
    loading.style.display = "none";
    overlay.style.display = "none";
    body.classList.remove("no-interaction");
  });
  
} catch (err) {
  alert(`Error is: ${err.message}`);
}
