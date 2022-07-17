const anchorElement = document.getElementById("download");
const inputElement = document.getElementById("myfile");

const fileReader = new FileReader();

inputElement.addEventListener("change", handleFiles, false);
fileReader.onload = (e) => console.log(e.target.result);

function handleFiles() {
    const file = this.files[0] || new File([0], "");
    const filename = file.name.split(".")[0];
    const objectURL = URL.createObjectURL(file);

    anchorElement.download = filename + ".zip"
    anchorElement.href = objectURL

    fileReader.readAsArrayBuffer(file);
    // fileReader.readAsBinaryString(file);
    // fileReader.readAsDataURL(file);
    // fileReader.readAsText(file);
}
