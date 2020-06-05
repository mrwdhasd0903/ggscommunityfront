//将base64转换为blob
let dataURLtoBlob = function (dataurl) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {
    type: mime
  });
}
//将blob转换为file
let blobToFile = function (theBlob, fileName) {
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(',');
  if (arr[1] == "") {
    return null
  }
  var mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {
    type: mime
  });
}

export function dataURLtoFile2(dataurl, filename) {
  return blobToFile(dataURLtoBlob(dataurl), filename);
}