import { getVideoDurationInSeconds } from "get-video-duration";

function formatDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);

    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

const getVideoDuration = async (filePath) => {
    try {
        const duration = await getVideoDurationInSeconds(filePath);
        const formattedDuration = formatDuration(duration);
        return formattedDuration;
    } catch (error) {
        throw error; // Rethrow the error for handling at a higher level if needed
    }
};

export default getVideoDuration;
