'use client'
import { createFile } from '@/lib/moviesAPI';
import Image from 'next/image';
import { useState, ChangeEvent } from 'react';

const ImageUploader = ({ setImage }: { setImage: any }) => {
    const [file, setFile] = useState<File | null>(null);
    const [fileType, setFileType] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileType(selectedFile.type);
            setImage(selectedFile)
        }
    };

    const handleCancel = () => {
        setFile(null);
        setFileType(null);
    };

    // const handleSave = async () => {
    //     if (!file) return;

    //     const formData = new FormData();
    //     formData.append('file', file);

    //     setUploading(true);

    //     try {
    //         const response = await createFile(id, formData)

    //         if (!response.ok) {
    //             throw new Error('Upload failed');
    //         }

    //         alert('File uploaded successfully');
    //         handleCancel();
    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //         alert('Error uploading file');
    //     } finally {
    //         setUploading(false);
    //     }
    // };

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">Moive Photo</h3>
                </div>
                <div className="p-7">
                    <div id="FileUpload" className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5">
                        <input
                            accept="image/*,video/*"
                            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            type="file"
                            onChange={handleFileChange}
                        />

                        <div className="flex flex-col items-center justify-center space-y-3">
                            <p><span className="text-primary">Click to upload</span> or drag and drop</p>
                            <p className="mt-1.5">SVG, PNG, JPG, GIF, MP4, or WEBM</p>
                        </div>

                        {file && (
                            <div className="mt-4">
                                {fileType?.startsWith('image/') ? (
                                    <Image src={URL.createObjectURL(file)} width={600} height={600} alt="Preview" className="max-w-full max-h-80" />
                                ) : fileType?.startsWith('video/') ? (
                                    <video controls className="max-w-full max-h-80">
                                        <source src={URL.createObjectURL(file)} type={fileType} />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : null}
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end gap-[4.5px] mt-3">
                        <button
                            className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        {/* <button
                            className="flex justify-center rounded bg-green-500 px-6 py-2 font-medium text-white hover:bg-opacity-90"
                            // onClick={handleSave}
                            disabled={uploading}
                        >
                            {uploading ? 'Uploading...' : 'Save'}
                        </button> */}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ImageUploader;
