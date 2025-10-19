import multer from 'multer';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), "/uploads"))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

const uploadToCloudinary = async (file: Express.Multer.File) => {
    // try {
    //     const result = await cloudinary.uploader.upload(file.path);
    //     return result;
    // } catch (error) {
    //     throw new Error('Failed to upload to Cloudinary');
    // }
    console.log("upload cloudinary file", file)
}

export const FileUploader = {
    upload,
    uploadToCloudinary
}