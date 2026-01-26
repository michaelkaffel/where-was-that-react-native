

export const getImageSource = (image) => {
    // Case 1: bundled images (require returns a number)
    if (typeof image === 'number') {
        return image;
    }
    // Case 2: file:// or http(s):// images
    if (typeof image === 'string' && image.length > 0) {
        return { uri: image };
    }
    // Case 3: fallback
    return require('../assets/images/washingtonpass.jpg');
}