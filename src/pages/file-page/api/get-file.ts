import axios from 'axios';
import { File } from 'src/types/file';
import { authHeader } from 'src/_helpers/auth-header';

export async function getFile(projectId: string, fileId: string) {
    const config = {
        headers: authHeader()
    };
    const response = await axios.get<{ file: File }>(
        `/api/projects/${projectId}/files/${fileId}`,
        config
    );

    return response.data.file;
}
