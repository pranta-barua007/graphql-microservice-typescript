import { MetadataStorage } from "../metadata/metadata-storage";

export function getMetadataStorage(): MetadataStorage {
  return (
    new MetadataStorage()
  );
}
