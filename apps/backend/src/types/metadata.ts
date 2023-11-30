export interface MetadataUploadRequest {
  pda: string;
  type: MetadataType;
  contract_function: ContractFunction;
  metadata: JSON;
}

enum ContractFunction {
  CreateUser = 'create_user',
  CreateProject = 'create_project',
  CreateEvent = 'create_event',
}

enum MetadataType {
  User = 'user',
  Project = 'project',
  Event = 'event',
}
