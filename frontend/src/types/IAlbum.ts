export interface IAlbum {
    id?: number;              // 기본키(유일값)
    userId: number | string;
    title: string;  
}