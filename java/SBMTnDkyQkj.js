function toggleHeader(){var e=document.querySelector("header"),t=document.querySelector("#title");window.pageYOffset>=t.offsetTop+t.offsetHeight?e.classList.add("show-header"):e.classList.remove("show-header")}function smoothScroll(e){var t=document.querySelector(e).offsetTop;window.scrollTo({top:t,behavior:"smooth"})}function submitForm(){var e=document.getElementById("name").value,t=document.getElementById("email").value,n=document.getElementById("topic").value,o=document.getElementById("message").value;!async function(){var a=await async function(){try{const e=await fetch("https://api.ipify.org?format=json");return(await e.json()).ip}catch(e){return console.error("Error",e),"-"}}();const r={content:`**Name:** ${e}\n**Email/Discord:** ${t}\n**Topic:** ${n}\n**User/Origin IP:** ${a}\n**- Message:** ${o}`,username:"Contact Form"};try{if(!(await fetch("https://discord.com/api/webhooks/1181772402393358356/x-99Gdfb70MCF9Mueg2udArGtuR0L-OPiTBLbu9oBd5zHkofuGFTU0hmO8Eg3v_bQ8An",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Error");alert("Message Sent!")}catch(e){console.error("Error:",e)}}()}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("backgroundVideo");e.play(),document.addEventListener("touchstart",(function(){e.play()})),document.addEventListener("visibilitychange",(function(){document.hidden?e.pause():e.play()}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("backgroundMusic"),t=!1,n=document.getElementById("notificationPopup");function o(){n.style.display="none"}e.addEventListener("playing",(function(){t=!0,o()})),document.addEventListener("click",(function(){t||(e.play(),t=!0,o())}))}));