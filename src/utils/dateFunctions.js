export const convertDate = (providedDate) => {
    if (providedDate) {
        const date = new Date(providedDate);
    
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).replace('at', '');
    }

    return 0
};
