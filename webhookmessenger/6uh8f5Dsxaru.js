function sendMessage(){var e=document.getElementById("name").value,t=document.getElementById("message").value,n=document.getElementById("webhook").value,a=document.getElementById("image"),o=new FormData;o.append("content",`- ${t}`),o.append("username",e),o.append("file",a.files[0]),fetch(n,{method:"POST",body:o}).then((e=>{if(!e.ok)throw new Error(`HTTP error ${e.status}`);alert("Message sent!")})).catch((e=>{alert("Error"+e.message)}))}