
export enum ConnectionState {
  IDLE = 'IDLE',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  FAILED = 'FAILED',
}

export enum TransferMode {
  FILE = 'FILE',
  TEXT = 'TEXT',
}

export interface FileMetadata {
  type: 'metadata';
  name: string;
  size: number;
  fileType: string;
}

export interface TextPayload {
  type: 'text';
  content: string;
}

export interface TransferEnd {
  type: 'end';
}

export type DataPayload = FileMetadata | TextPayload | TransferEnd | ArrayBuffer;

export interface ReceivedFile {
  blob: Blob;
  name: string;
  size: number;
  type: string;
}