

export type Links={
    name:string;
    path:string;
  }
export type DataResponse={
    navigation:Links[];
    profileSettings:Links[];
  }
export interface HeaderProps{
    settings: Links[],
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    onClose?: () => void,
    anchorEl?: null | HTMLElement
}


