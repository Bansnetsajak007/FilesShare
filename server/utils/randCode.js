import File from '../models/file.js';

export const generateRandomCoode = async () => {
    let code;
    let iscodeUnique = false;

    while(! iscodeUnique) {
        code = Math.floor(100000 + Math.random() * 900000);

        const existingFile = await File.findOne({ code: code });

        if(!existingFile) {
            iscodeUnique = true;
        }
    }
    return code;
}

