export interface Pin {
  id: string;
  parent?: string;
  name?: string;
  activated?: boolean;
  childPin?: Pin[];
}
