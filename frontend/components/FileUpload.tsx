import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import apiClient from '../utils/apiClient';

interface FileUploadProps {
  applicationId: string;
};

export default function FileUpload ({applicationId}: FileUploadProps) {
  const onDrop = useCallback<(acceptedFiles: File[]) => Promise<void>>(
    async (acceptedFiles) => {
      const formData = new FormData();
      acceptedFiles.forEach((file)=> {
        formData.append('file',file);
      });
      try {
        await apiClient.post(`/applications/${applicationId}/files`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (err) {
        console.error(err);
      }
    },
    [applicationId]
  );

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()}/>
      {isDragActive? (
        <p>ファイルをアップロード</p>
      ):(
        <p>ファイルをドラッグ&ドロップ</p>
      )}
    </div>
  );
}