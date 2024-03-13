$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", () => {
  const resumeContent = "Rudy_M_Resume .docx.pdf";

  const blob = new Blob([resumeContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Rudy_M_Resume .docx.pdf";

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
