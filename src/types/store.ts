export interface StoreGame {
    winner: 'user1' | 'user2' | 'draw' | 'none';
    user1Collect: number;
    user2Collect: number;
    time: number;
}