export interface IPost {
    id?: number;              // 기본키(유일값)
    userId: number | string;
    title: string;
    body: string;
}