/**
 * Converts a file to a base64-encoded string.
 *
 * @param {File} file - The file to be converted.
 * @returns {Promise<string>} - A Promise that resolves to the base64-encoded string of the file.
 */
export function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const base64String = event.target.result;
      const base64Data = base64String.split(",")[1]; // Remove the data URL prefix
      resolve(base64Data);
    };

    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * Checks if the size of a given file is within a specified maximum size limit in kilobytes.
 *
 * @param {File} file - The file to be checked.
 * @param {number} maxSizeKB - The maximum allowed size of the file in kilobytes.
 * @returns {boolean} - True if the file size is less than or equal to the maximum size, false otherwise.
 */
export function isFileSizeValid(file, maxSizeKB) {
  const maxSizeBytes = maxSizeKB * 1024;
  return file.size <= maxSizeBytes;
}
