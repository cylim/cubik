import * as fs from 'fs';
import path from 'path';
import axios, { AxiosResponse } from 'axios';
import FormData from 'form-data';

interface IpfsUploadResponse {
  Name: string;
  Hash: string;
  Size: string;
}

async function convertObjectToTempJsonFile(
  pda: string,
  data: any,
): Promise<string> {
  // Create a unique temporary file name
  const tempFileName = `temp_${pda}.json`;
  const tempFilePath = path.join(__dirname, tempFileName);

  // Write JSON data to the temporary file
  await fs.promises.writeFile(tempFilePath, JSON.stringify(data, null, 2));

  return tempFilePath;
}

async function uploadToIPFS(
  apiKey: string,
  apiKeySecret: string,
  pda: string,
  data: any,
): Promise<IpfsUploadResponse> {
  try {
    const filePath = await convertObjectToTempJsonFile(pda, data);
    const fileContent = fs.createReadStream(filePath);
    const formData = new FormData();
    formData.append('file', fileContent);

    const response: AxiosResponse<IpfsUploadResponse> = await axios.post(
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

    fs.unlinkSync(filePath);

    return response.data;
  } catch (error: Error | any) {
    console.log(error);
    throw new Error(`Error uploading file to Infura: ${error.message}`);
  }
}

async function getDataFromInfura(ipfsHash: string) {
  try {
    const response = await axios.get(
      `https://cubik.infura-ipfs.io/ipfs/${ipfsHash}`,
    );

    return response.data;
  } catch (error: any) {
    throw new Error(`Error getting data from Infura: ${error.message}`);
  }
}

export { uploadToIPFS, getDataFromInfura };
