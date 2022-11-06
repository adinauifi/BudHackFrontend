import { DocumentDTO } from "./document";

export interface Cerere {
    id: number;
    requestorId: number;
    type: number;
    documents: DocumentDTO[];
    dateCreated: Date;
    status: string;
    name: string;
  }