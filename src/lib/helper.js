import { toast } from "sonner";

export const formatDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var d = typeof date === "string" ? new Date(date) : date,
    // month = '' + (d.getMonth() + 1),
    month = months[d.getMonth()],
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join(" ");
};

export function formatTime(date) {
  var d = typeof date === "string" ? new Date(date) : date,
    hour = "" + d.getHours(),
    minute = "" + d.getMinutes(),
    second = "" + d.getSeconds();

  if (hour.length < 2) hour = "0" + hour;
  if (minute.length < 2) minute = "0" + minute;
  if (second.length < 2) second = "0" + second;

  return [hour, minute, second].join(":");
}

export function formatNumberComma(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatDateYYYYmmdd(date) {
  var d = typeof date === "string" ? new Date(date) : date,
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function camelCase(string) {
  // Membagi string menjadi array berdasarkan titik perubahan dari huruf kecil ke huruf besar
  const result = string
    // Menambahkan spasi sebelum huruf besar
    .replace(/([A-Z])/g, " $1")
    // Mengubah huruf pertama setiap kata menjadi huruf besar
    .replace(/^./, (str) => str.toUpperCase());

  return result;
}

export const filterFnForArray = (row, key, searchValue) => {
  if (row?.original[key]) {
    return searchValue.some((item) => row?.original[key].includes(item));
  }
};

export function getBase64FromDataURL(dataURL) {
  if (!dataURL) {
    throw new Error("Invalid or empty data URL");
  }
  const parts = dataURL.split(",");
  if (parts.length !== 2) {
    throw new Error("Invalid data URL format");
  }
  return parts[1];
}

export function base64ToDataURI(base64String, type) {
  const dataUri = `data:${type};base64,${base64String}`;

  return dataUri;
}

export function dataURItoFile(dataURI, filename) {
  // Split the data URI into parts
  const parts = dataURI.split(",");

  // Check if data URI format is valid
  if (!parts || parts.length !== 2) {
    throw new Error("Invalid data URI format");
  }

  // Get content type and base64 encoded data
  const contentType = parts[0].split(":")[1].split(";")[0];
  const base64Data = parts[1];

  // Decode the base64 data
  const byteString = atob(base64Data);

  // Create a new array buffer
  const buffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(buffer);

  // Convert base64 string to array buffer
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  // Create the Blob object
  const blob = new Blob([buffer], { type: contentType });

  // Return a new File object
  return new File([blob], filename, { type: contentType });
}

export const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0;
};

// export function handleError(errorType, errorMessage) {
//   console.log(errorType, errorMessage);
//   toast.error(
//     `${errorType}<br> ${errorMessage}<br> Remarks: ${errorMessage.response.data.remarks}`,
//   );
//   return <ServerError />;
// }
