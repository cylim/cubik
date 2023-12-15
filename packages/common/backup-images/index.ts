export const Project_Backup =
  'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/0b413369-9282-4406-e65f-a9198aa82800/public';

export const Background_Backup =
  'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b7c39298-1267-47d5-831c-d4e2a1de0500/public';

export const User_Backup_List = [
  'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/9a869751-136f-42bf-1f63-ce417ac53400/public',
  'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/fff3e34d-bf8e-4faa-3dba-ef71476bc700/public',
  'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/7b2bfba9-f05a-4154-9bfb-a21b5d4f1d00/public',
  'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/121c823b-5056-4ad2-717e-d9864c644e00/public',
  'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/dac42e97-3a1a-4973-0757-8d5c31d47f00/public',
  'https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/b6dce45a-17fe-4db2-bb86-108a168fc700/public',
];

export const generateUserBackupImage = () => {
  const randomIndex = Math.floor(Math.random() * User_Backup_List.length);
  return User_Backup_List[randomIndex];
};
