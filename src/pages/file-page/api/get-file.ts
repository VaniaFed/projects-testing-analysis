import axios from 'axios';
import { File } from 'src/types/file';

export async function getFile(projectId: string, fileId: string) {
    const response = await axios.get<{ file: File }>(
        `/api/projects/${projectId}/files/${fileId}`
    );

    return response.data.file;
}
