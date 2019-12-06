function streamXHR(content = document.body) {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  iframe.onload = () => {
    iframe.onload = null;
    const xhr = new XMLHttpRequest();
    let pos = 0;
    xhr.onprogress = function() {
      iframe.contentDocument.write(xhr.response.slice(pos));
      pos = xhr.response.length;
      while (iframe.contentDocument.body.childNodes.length > 0) {
        content.appendChild(iframe.contentDocument.body.childNodes[0]);
      }
    };

    xhr.onload = function() {
      iframe.contentDocument.close();
      document.body.removeChild(iframe);
    };

    xhr.responseType = "text";
    xhr.open("GET", "/"); // get some html
    xhr.send();
  };

  iframe.src = "";
}
