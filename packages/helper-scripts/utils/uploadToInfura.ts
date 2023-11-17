import * as fs from 'fs';
import axios, { AxiosResponse } from 'axios';
import FormData from 'form-data';

interface InfuraUploadResponse {
  Name: string;
  Hash: string;
  Size: string;
}

interface InfuraGetResponse {
  Data: string;
}

async function uploadToInfura(
  apiKey: string,
  apiKeySecret: string,
  filePath: string,
): Promise<InfuraUploadResponse> {
  try {
    const fileContent = fs.createReadStream(filePath);
    const formData = new FormData();
    formData.append('file', fileContent);

    const response: AxiosResponse<InfuraUploadResponse> = await axios.post(
      'https://ipfs.infura.io:5001/api/v0/add',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Basic ${Buffer.from(
            `${apiKey}:${apiKeySecret}`,
          ).toString('base64')}`,
        },
      },
    );

    return response.data;
  } catch (error: Error | any) {
    console.log(error);
    throw new Error(`Error uploading file to Infura: ${error.message}`);
  }
}

async function getDataFromInfura(
  apiKey: string,
  apiKeySecret: string,
  ipfsPath: string,
  output: string,
  archive: boolean = false,
  compress: boolean = false,
  compressionLevel: number = -1,
): Promise<InfuraGetResponse> {
  try {
    const response: AxiosResponse<InfuraGetResponse> = await axios.post(
      `https://ipfs.infura.io:5001/api/v0/get?arg=${ipfsPath}&output=${output}&archive=${archive}&compress=${compress}&compression-level=${compressionLevel}`,
      null,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${apiKey}:${apiKeySecret}`,
          ).toString('base64')}`,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    throw new Error(`Error getting data from Infura: ${error.message}`);
  }
}

export { uploadToInfura, getDataFromInfura };
