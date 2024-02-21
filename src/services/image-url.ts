const getCroppedImageUrl = (url: string): string => {
    const target = 'media/';
    const index = url.indexOf(target);
    
    if (index !== -1) {
        return url.slice(0, index + target.length) + 'crop/600/400/' + url.slice(index + target.length);
    } else {
        // If 'media/' is not found in the URL, return the original URL
        return url;
    }
};

export default getCroppedImageUrl;
